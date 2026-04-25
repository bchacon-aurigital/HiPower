"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Envía eventos a GA4 para alimentar la métrica de tiempo de sesión.
// GA4 calcula "Average engagement time" sumando engagement_time_msec entre eventos;
// sin eventos periódicos, una visita de lectura silenciosa aparece como ~0 segundos.
// usePathname garantiza que el tracker se reinicie en cada cambio de página.
export default function EngagementTracker() {
  const pathname = usePathname();
  const startTime = useRef(Date.now());
  const lastPing = useRef(Date.now());
  const scrollMilestones = useRef(new Set());

  useEffect(() => {
    // Reiniciar estado al entrar a cada página
    startTime.current = Date.now();
    lastPing.current = Date.now();
    scrollMilestones.current = new Set();

    function sendEngagement(eventName, params = {}) {
      if (typeof window === "undefined" || typeof window.gtag !== "function") return;
      const now = Date.now();
      const engagementMs = now - lastPing.current;
      lastPing.current = now;
      window.gtag("event", eventName, {
        engagement_time_msec: engagementMs,
        page_path: pathname,
        ...params,
      });
    }

    // Heartbeat cada 30 s mientras la pestaña está activa
    const interval = setInterval(() => {
      if (!document.hidden) {
        sendEngagement("user_engagement");
      }
    }, 30000);

    // Scroll depth: dispara en 25 %, 50 %, 75 %, 90 %
    function handleScroll() {
      const scrolled =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      const milestones = [25, 50, 75, 90];
      milestones.forEach((pct) => {
        if (scrolled * 100 >= pct && !scrollMilestones.current.has(pct)) {
          scrollMilestones.current.add(pct);
          sendEngagement("scroll", { percent_scrolled: pct });
        }
      });
    }

    // Evento final cuando el usuario abandona la pestaña / cierra
    function handleVisibilityChange() {
      if (document.hidden) {
        const totalMs = Date.now() - startTime.current;
        sendEngagement("page_leave", { total_time_msec: totalMs });
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return null;
}

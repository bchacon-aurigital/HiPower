"use client";
import Image from "next/image";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
            <div className="text-center">
                {/* Logo con animación de color */}
                <div className="relative w-72 h-56 mx-auto">
                    <Image
                        src="/assets/logo-gradient.svg"
                        alt="HiPower Logo"
                        fill
                        className="object-contain animate-color-change"
                        priority
                    />
                </div>

                <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#037F3F] to-[#002D6A] animate-progress relative">
                        <div 
                            className="absolute top-0 right-0 h-full w-20 bg-white/20 animate-shimmer"
                            style={{ transform: 'skewX(-45deg) translateX(150%)' }}
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    <div className="w-2.5 h-2.5 bg-[#037F3F] rounded-full animate-bounce" 
                         style={{ animationDelay: "-0.32s" }}></div>
                    <div className="w-2.5 h-2.5 bg-[#002D6A] rounded-full animate-bounce" 
                         style={{ animationDelay: "-0.16s" }}></div>
                    <div className="w-2.5 h-2.5 bg-[#037F3F] rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
} 
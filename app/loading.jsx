export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#037F3F] to-[#002D6A] z-50">
        <img
          src="/assets/landing/LogoHiPower.svg"
          alt="Loading..."
          className="w-[50vh]"
        />
      </div>
    );
  }
  
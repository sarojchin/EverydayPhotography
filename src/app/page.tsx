export default function Home() {
  const currentDay = 4;
  const totalDays = 30;

  /* ── Streak Bloom ring math ── */
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (currentDay / totalDays) * circumference;

  return (
    <div className="flex flex-col min-h-[100dvh] max-w-[430px] mx-auto bg-surface relative">
      {/* ────────────────────── Header ────────────────────── */}
      <header className="flex items-center justify-between px-6 pt-5 pb-2">
        <div className="flex items-center gap-2.5">
          {/* Aperture / lens icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="15" cy="15" r="13" stroke="#D44800" strokeWidth="1.6" />
            <circle cx="15" cy="15" r="5" stroke="#D44800" strokeWidth="1.6" />
            <line
              x1="15"
              y1="2"
              x2="16.8"
              y2="10"
              stroke="#D44800"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <line
              x1="26.3"
              y1="8.5"
              x2="19.2"
              y2="12"
              stroke="#D44800"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <line
              x1="26.3"
              y1="21.5"
              x2="19.2"
              y2="18"
              stroke="#D44800"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <line
              x1="15"
              y1="28"
              x2="13.2"
              y2="20"
              stroke="#D44800"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <line
              x1="3.7"
              y1="21.5"
              x2="10.8"
              y2="18"
              stroke="#D44800"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <line
              x1="3.7"
              y1="8.5"
              x2="10.8"
              y2="12"
              stroke="#D44800"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>

          <span className="font-display font-bold text-[17px] tracking-[-0.02em] text-on-surface">
            The Editorial Eye
          </span>
        </div>

        {/* Hamburger menu */}
        <button aria-label="Menu" className="p-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="3"
              y1="6"
              x2="19"
              y2="6"
              stroke="#1c1b1b"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="11"
              x2="19"
              y2="11"
              stroke="#1c1b1b"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="16"
              x2="19"
              y2="16"
              stroke="#1c1b1b"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* ────────────────────── Scrollable content ────────────────────── */}
      <main className="flex-1 px-6 pb-28 overflow-y-auto">
        {/* ── Day counter ── */}
        <section className="mt-5">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-on-surface/45 font-medium">
            Monday, Oct 24
          </p>
          <h1 className="font-display text-[28px] font-extrabold tracking-[-0.02em] leading-tight mt-1">
            Day {currentDay} of {totalDays}
          </h1>
        </section>

        {/* ── Streak + Bloom ring ── */}
        <section className="flex items-center justify-between mt-7">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-on-surface/45 font-medium">
              Current Streak
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              {/* Flame icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 2C10 2 6 6.5 6 10.5C6 13.5 7.8 16 10 17C12.2 16 14 13.5 14 10.5C14 6.5 10 2 10 2Z"
                  fill="url(#flame-grad)"
                />
                <path
                  d="M10 9C10 9 8.5 11 8.5 12.8C8.5 14.2 9.2 15.5 10 16C10.8 15.5 11.5 14.2 11.5 12.8C11.5 11 10 9 10 9Z"
                  fill="#FFCC02"
                />
                <defs>
                  <linearGradient
                    id="flame-grad"
                    x1="10"
                    y1="2"
                    x2="10"
                    y2="17"
                  >
                    <stop stopColor="#FF6B35" />
                    <stop offset="1" stopColor="#D44800" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-[17px] font-bold tracking-[-0.02em]">
                {currentDay} Day Streak
              </span>
            </div>
          </div>

          {/* Streak Bloom — circular progress ring */}
          <div className="relative w-[76px] h-[76px] flex-shrink-0">
            <svg
              viewBox="0 0 80 80"
              className="w-full h-full"
              style={{ transform: "rotate(-90deg)" }}
            >
              <defs>
                <linearGradient
                  id="streak-ring"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop stopColor="#00677e" />
                  <stop offset="1" stopColor="#00a7cb" />
                </linearGradient>
              </defs>
              {/* Background track */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke="#e5e2e1"
                strokeWidth="5.5"
              />
              {/* Progress arc */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke="url(#streak-ring)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-body text-[12px] font-semibold text-on-surface/65">
                {currentDay}/{totalDays}
              </span>
            </div>
          </div>
        </section>

        {/* ── Progress bar ── */}
        <section className="mt-7">
          <div className="flex justify-between items-center mb-2">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-on-surface/45 font-medium">
              Progress
            </p>
            <p className="font-body text-[11px] text-on-surface/45 font-medium">
              {currentDay}/{totalDays}
            </p>
          </div>
          <div className="w-full h-[5px] bg-surface-highest rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(currentDay / totalDays) * 100}%`,
                background: "linear-gradient(90deg, #ab3500, #ff6b35)",
              }}
            />
          </div>
        </section>

        {/* ── Photo card ── */}
        <section className="mt-7">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            {/* Placeholder food photo — rich warm gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at 35% 40%, rgba(107,142,35,0.7) 0%, transparent 55%),
                  radial-gradient(ellipse at 65% 30%, rgba(255,200,60,0.6) 0%, transparent 40%),
                  radial-gradient(ellipse at 50% 75%, rgba(139,90,43,0.5) 0%, transparent 50%),
                  linear-gradient(145deg, #5C4033 0%, #6B8E23 35%, #8B7355 65%, #A0522D 100%)
                `,
              }}
            />

            {/* Category tag */}
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-on-surface/40 backdrop-blur-xl rounded-full">
                <span className="w-[6px] h-[6px] rounded-full bg-primary-container" />
                <span className="font-body text-[10px] uppercase tracking-[0.1em] text-white font-medium">
                  Food
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* ── Daily prompt ── */}
        <section className="mt-7">
          <h2 className="font-display text-[21px] font-bold tracking-[-0.02em] leading-snug">
            Capture a food photo using natural light only
          </h2>
          <p className="font-body text-[14px] text-on-surface/55 mt-2.5 leading-relaxed">
            Find a window, observe the shadows, and highlight the textures of
            your next meal.
          </p>
        </section>

        {/* ── CTAs ── */}
        <section className="mt-7 flex flex-col items-center gap-3">
          {/* Primary — Take Photo */}
          <button
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full font-display font-bold text-[15px] text-white tracking-[-0.01em]"
            style={{
              background: "linear-gradient(90deg, #ab3500, #ff6b35)",
            }}
          >
            {/* Camera icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="5"
                width="16"
                height="12"
                rx="2.5"
                stroke="white"
                strokeWidth="1.5"
              />
              <circle
                cx="10"
                cy="11"
                r="3.5"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M7.5 5L8.5 3H11.5L12.5 5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Take Photo
          </button>

          {/* Ghost — Upload from Library */}
          <button className="flex items-center justify-center gap-2 py-2 font-body text-[14px] text-primary font-medium">
            {/* Upload icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 12V3M9 3L5.5 6.5M9 3L12.5 6.5"
                stroke="#ab3500"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12V14C3 14.5523 3.44772 15 4 15H14C14.5523 15 15 14.5523 15 14V12"
                stroke="#ab3500"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upload from Library
          </button>
        </section>
      </main>

      {/* ────────────────────── Bottom navigation ────────────────────── */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-10"
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="flex items-center justify-around px-6 pt-3 pb-5">
          {/* Home — active */}
          <button className="flex flex-col items-center gap-1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 9.5L11 3L19 9.5V18C19 18.5523 18.5523 19 18 19H14V14H8V19H4C3.44772 19 3 18.5523 3 18V9.5Z"
                fill="#ab3500"
                stroke="#ab3500"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-body text-[10px] uppercase tracking-[0.08em] font-semibold text-primary">
              Home
            </span>
          </button>

          {/* Gallery — inactive */}
          <button className="flex flex-col items-center gap-1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1.5"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                opacity="0.35"
              />
              <rect
                x="12"
                y="3"
                width="7"
                height="7"
                rx="1.5"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                opacity="0.35"
              />
              <rect
                x="3"
                y="12"
                width="7"
                height="7"
                rx="1.5"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                opacity="0.35"
              />
              <rect
                x="12"
                y="12"
                width="7"
                height="7"
                rx="1.5"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                opacity="0.35"
              />
            </svg>
            <span className="font-body text-[10px] uppercase tracking-[0.08em] font-medium text-on-surface/35">
              Gallery
            </span>
          </button>

          {/* Photos — inactive */}
          <button className="flex flex-col items-center gap-1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="2"
                y="6"
                width="18"
                height="13"
                rx="2.5"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                opacity="0.35"
              />
              <circle
                cx="11"
                cy="12.5"
                r="3.5"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                opacity="0.35"
              />
              <path
                d="M8 6L9 3.5H13L14 6"
                stroke="#1c1b1b"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
              />
            </svg>
            <span className="font-body text-[10px] uppercase tracking-[0.08em] font-medium text-on-surface/35">
              Photos
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

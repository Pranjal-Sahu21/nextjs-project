const EventDetailLoading = () => {
  return (
    <section id="event">
      {/* Header skeleton */}
      <div className="header">
        <div className="skeleton h-14 w-[400px] max-sm:w-[260px] max-sm:h-10 rounded-xl" />
        <div className="skeleton h-5 w-full max-w-[600px] mt-2 rounded-lg" />
        <div className="skeleton h-5 w-3/4 max-w-[500px] rounded-lg" />
      </div>

      <div className="details">
        {/* Left Side - Content skeleton */}
        <div className="content">
          {/* Banner */}
          <div className="skeleton h-[400px] max-sm:h-[240px] w-full rounded-xl" />

          {/* Overview */}
          <div className="flex flex-col gap-3">
            <div className="skeleton h-7 w-[140px] rounded-lg" />
            <div className="skeleton h-4 w-full rounded-md" />
            <div className="skeleton h-4 w-full rounded-md" />
            <div className="skeleton h-4 w-3/4 rounded-md" />
          </div>

          {/* Event Details */}
          <div className="flex flex-col gap-3">
            <div className="skeleton h-7 w-[170px] rounded-lg" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex flex-row gap-2 items-center">
                <div className="skeleton h-4 w-4 rounded-full" />
                <div className="skeleton h-4 w-[180px] rounded-md" />
              </div>
            ))}
          </div>

          {/* Agenda */}
          <div className="flex flex-col gap-3">
            <div className="skeleton h-7 w-[100px] rounded-lg" />
            {[280, 340, 240, 310].map((w, i) => (
              <div key={i} className="flex flex-row gap-2 items-center">
                <div className="skeleton h-2 w-2 rounded-full" />
                <div
                  className="skeleton h-4 rounded-md"
                  style={{ width: `${w}px` }}
                />
              </div>
            ))}
          </div>

          {/* Organizer */}
          <div className="flex flex-col gap-3">
            <div className="skeleton h-7 w-[210px] rounded-lg" />
            <div className="skeleton h-4 w-full max-w-[400px] rounded-md" />
          </div>

          {/* Tags */}
          <div className="flex flex-row gap-2 flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="skeleton h-7 rounded-full"
                style={{ width: `${60 + i * 20}px` }}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Booking skeleton */}
        <aside className="booking">
          <div className="signup-card">
            <div className="skeleton h-7 w-[170px] rounded-lg" />
            <div className="skeleton h-4 w-full rounded-md" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="skeleton h-4 w-[110px] rounded-md" />
                <div className="skeleton h-11 w-full rounded-lg" />
              </div>
              <div className="skeleton h-11 w-full rounded-lg" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EventDetailLoading;

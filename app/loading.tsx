const HomeLoading = () => {
  return (
    <section id="home">
      {/* Hero skeleton */}
      <div className="flex flex-col items-center gap-5">
        <div className="skeleton h-16 w-[520px] max-sm:w-[280px] max-sm:h-10 rounded-xl" />
        <div className="skeleton h-16 w-[440px] max-sm:w-[240px] max-sm:h-10 rounded-xl" />
        <div className="skeleton h-5 w-[460px] max-sm:w-[260px] mt-3 rounded-lg" />
        <div className="skeleton h-12 w-[200px] mt-4 rounded-full" />
      </div>

      {/* Featured Events skeleton */}
      <div className="mt-20 space-y-8">
        <div className="skeleton h-8 w-[200px] rounded-lg" />
        <ul className="events list-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <EventCardSkeleton />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const EventCardSkeleton = () => (
  <div className="flex flex-col gap-3 rounded-xl overflow-hidden bg-dark-100/40">
    <div className="skeleton h-[260px] w-full rounded-none" />
    <div className="px-4 pb-4 pt-1 flex flex-col gap-3">
      <div className="skeleton h-5 w-3/4 rounded-md" />
      <div className="flex flex-row gap-2 items-center">
        <div className="skeleton h-3.5 w-3.5 rounded-full" />
        <div className="skeleton h-3.5 w-[120px] rounded-md" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-2 items-center">
          <div className="skeleton h-3.5 w-3.5 rounded-full" />
          <div className="skeleton h-3.5 w-[80px] rounded-md" />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="skeleton h-3.5 w-3.5 rounded-full" />
          <div className="skeleton h-3.5 w-[50px] rounded-md" />
        </div>
      </div>
    </div>
  </div>
);

export default HomeLoading;

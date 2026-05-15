const EventsLoading = () => {
  return (
    <section id="events-page">
      {/* Header skeleton */}
      <div className="events-page-header">
        <div className="skeleton h-4 w-[160px] mx-auto mb-4 rounded-md" />
        <div className="skeleton h-14 w-[300px] max-sm:h-10 max-sm:w-[200px] mx-auto rounded-xl" />
        <div className="skeleton h-5 w-[480px] max-sm:w-[280px] mx-auto mt-4 rounded-lg" />
        <div className="skeleton h-5 w-[320px] max-sm:w-[200px] mx-auto mt-2 rounded-lg" />
      </div>

      {/* Count skeleton */}
      <div className="mb-8">
        <div className="skeleton h-4 w-[120px] rounded-md" />
      </div>

      {/* Accordion skeleton */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <AccordionItemSkeleton key={i} />
        ))}
      </div>
    </section>
  );
};

const AccordionItemSkeleton = () => (
  <div className="rounded-xl border border-dark-200/60 bg-dark-100/30 px-6 py-5 max-sm:px-4 max-sm:py-4">
    <div className="flex flex-row items-center gap-5 max-sm:gap-3">
      {/* Number */}
      <div className="skeleton h-4 w-6 rounded-md shrink-0" />

      {/* Info */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="skeleton h-5 w-[260px] max-sm:w-[180px] rounded-md" />
        <div className="flex flex-row gap-3">
          <div className="skeleton h-3.5 w-[120px] rounded-md" />
          <div className="skeleton h-3.5 w-[100px] rounded-md" />
          <div className="skeleton h-5 w-[60px] rounded-full" />
        </div>
      </div>

      {/* Chevron */}
      <div className="skeleton h-5 w-5 rounded-full shrink-0" />
    </div>
  </div>
);

export default EventsLoading;

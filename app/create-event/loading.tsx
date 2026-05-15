const CreateEventLoading = () => {
  return (
    <section id="create-event-page" className="py-12">
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
        {/* Left — Header skeleton */}
        <div className="lg:sticky lg:top-24 lg:w-[45%] shrink-0 mb-10 lg:mb-0 flex flex-col gap-8">
          {/* Label + Title + Intro */}
          <div>
            <div className="skeleton h-3.5 w-[140px] mb-4 rounded-md" />
            <div className="skeleton h-12 w-[280px] max-sm:w-[220px] mb-5 rounded-xl" />
            <div className="skeleton h-4 w-full max-w-[420px] rounded-md" />
            <div className="skeleton h-4 w-3/4 max-w-[340px] mt-2 rounded-md" />
          </div>

          {/* Steps skeleton */}
          <div className="flex flex-col gap-4">
            <div className="skeleton h-3.5 w-[120px] rounded-md" />

            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="skeleton h-3.5 w-6 mt-1 rounded-md shrink-0" />
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="skeleton h-4 w-[180px] rounded-md" />
                  <div className="skeleton h-3.5 w-full max-w-[320px] rounded-md" />
                </div>
              </div>
            ))}
          </div>

          {/* Tips card skeleton */}
          <div className="bg-dark-200/50 border border-dark-200 rounded-xl px-5 py-5 flex flex-col gap-3">
            <div className="skeleton h-4 w-[200px] rounded-md" />
            <div className="flex flex-col gap-2">
              {[92, 78, 85, 70].map((w, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="skeleton h-3.5 w-3 shrink-0 rounded-sm" />
                  <div
                    className="skeleton h-3.5 rounded-md"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form skeleton */}
        <div className="flex-1 min-w-0">
          <div id="book-event">
            <div className="flex flex-col gap-8">
              {/* Event Details section */}
              <FormSectionSkeleton title={180}>
                <InputSkeleton labelWidth={90} />
                <TextareaSkeleton labelWidth={75} rows={3} />
                <TextareaSkeleton labelWidth={130} rows={5} />
              </FormSectionSkeleton>

              {/* Event Image section */}
              <FormSectionSkeleton title={120}>
                <InputSkeleton labelWidth={100} />
              </FormSectionSkeleton>

              {/* Location & Schedule section */}
              <FormSectionSkeleton title={190}>
                <InputSkeleton labelWidth={100} />
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <InputSkeleton labelWidth={55} />
                  <InputSkeleton labelWidth={75} />
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <InputSkeleton labelWidth={40} />
                  <InputSkeleton labelWidth={40} />
                </div>
              </FormSectionSkeleton>

              {/* Additional Information section */}
              <FormSectionSkeleton title={200}>
                <InputSkeleton labelWidth={130} />
                <InputSkeleton labelWidth={85} />
              </FormSectionSkeleton>

              {/* Tags section */}
              <FormSectionSkeleton title={55}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="skeleton h-11 flex-1 rounded-lg" />
                  <div className="skeleton h-11 w-full sm:w-[90px] rounded-lg" />
                </div>
              </FormSectionSkeleton>

              {/* Agenda section */}
              <FormSectionSkeleton title={75}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="skeleton h-11 flex-1 rounded-lg" />
                  <div className="skeleton h-11 w-full sm:w-[90px] rounded-lg" />
                </div>
              </FormSectionSkeleton>

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="skeleton h-11 w-[160px] rounded-lg" />
                <div className="skeleton h-11 w-[100px] rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormSectionSkeleton = ({
  title,
  children,
}: {
  title: number;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-5">
    <div className="skeleton h-7 rounded-lg" style={{ width: title }} />
    {children}
  </div>
);

const InputSkeleton = ({ labelWidth }: { labelWidth: number }) => (
  <div>
    <div
      className="skeleton h-4 rounded-md mb-2"
      style={{ width: labelWidth }}
    />
    <div className="skeleton h-11 w-full rounded-lg" />
  </div>
);

const TextareaSkeleton = ({
  labelWidth,
  rows,
}: {
  labelWidth: number;
  rows: number;
}) => (
  <div>
    <div
      className="skeleton h-4 rounded-md mb-2"
      style={{ width: labelWidth }}
    />
    <div
      className="skeleton w-full rounded-lg"
      style={{ height: rows * 24 + 24 }}
    />
  </div>
);

export default CreateEventLoading;

import type { Metadata } from "next";
import CreateEventForm from "@/components/CreateEventForm";

export const metadata: Metadata = {
  title: "Create Event | DevEvent",
  description: "Create and publish a new developer event to the community.",
};

const CreateEventPage = () => {
  return (
    <section id="create-event-page" className="py-12">
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
        {/* Left — Header text  */}
        <div className="lg:sticky lg:top-24 lg:w-[45%] shrink-0 mb-10 lg:mb-0 flex flex-col gap-8">
          {/* Label + Title + Intro */}
          <div>
            <p className="font-martian-mono text-primary text-xs uppercase tracking-[0.2em] mb-4 font-medium">
              Add to Community
            </p>
            <h1 className="mb-5">Create New Event</h1>
            <p className="text-light-200 leading-relaxed text-base">
              Share your event with the developer community. Fill in the details
              below and your event will be live shortly — no approval needed.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            <p className="font-space-grotesk text-sm font-semibold uppercase tracking-widest text-light-200">
              How it works
            </p>
            {[
              {
                step: "01",
                title: "Fill in the details",
                desc: "Add your event title, description, date, venue, and all relevant information.",
              },
              {
                step: "02",
                title: "Add tags & agenda",
                desc: "Help attendees find your event with the right tags and a clear agenda.",
              },
              {
                step: "03",
                title: "Go live instantly",
                desc: "Submit and your event is published to the community right away.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start">
                <span className="font-martian-mono text-primary text-xs font-medium mt-1 shrink-0">
                  {step}
                </span>
                <div>
                  <p className="font-space-grotesk font-semibold text-foreground text-sm mb-0.5">
                    {title}
                  </p>
                  <p className="text-light-200 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips card */}
          <div className="bg-dark-200/50 border border-dark-200 rounded-xl px-5 py-5 flex flex-col gap-3">
            <p className="font-space-grotesk font-semibold text-sm text-foreground">
              💡 Tips for a great listing
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Use a clear, specific title — avoid vague names like 'Dev Meetup'.",
                "Upload a high-quality banner image (16:9 works best).",
                "Keep the overview punchy — one or two sentences max.",
                "Add relevant tags so the right audience finds you.",
              ].map((tip) => (
                <li
                  key={tip}
                  className="text-light-200 text-sm font-inter leading-relaxed flex gap-2"
                >
                  <span className="text-primary shrink-0">—</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex-1 min-w-0">
          <CreateEventForm />
        </div>
      </div>
    </section>
  );
};

export default CreateEventPage;

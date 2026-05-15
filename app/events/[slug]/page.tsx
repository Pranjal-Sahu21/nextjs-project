import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";
import EventDetailLoading from "./loading";

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = params.then((p) => p.slug);

  return (
    <main>
      <Suspense fallback={<EventDetailLoading />}>
        <EventDetails params={slug} />
      </Suspense>
    </main>
  );
};
export default EventDetailsPage;

import EventAccordion from "@/components/EventAccordion";
import { cacheLife } from "next/cache";
import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "All Events | DevEvent",
  description:
    "Browse all developer events — hackathons, meetups, conferences, and more. Find your next dev event.",
};

const EventsPage = async () => {
  "use cache";
  cacheLife("hours");
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section id="events-page">
      <div className="events-page-header">
        <p className="events-page-label">Browse & Discover</p>
        <h1>All Events</h1>
        <p className="events-page-subtitle">
          Explore hackathons, meetups, conferences, and workshops from the
          developer community worldwide.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="events-page-count">
          <span>{events?.length || 0}</span> events found
        </div>
        <Link
          href="/create-event"
          className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 font-medium transition-colors -mt-10"
        >
          + Create Event
        </Link>
      </div>

      {events && events.length > 0 ? (
        <EventAccordion events={events} />
      ) : (
        <div className="events-empty">
          <p>No events found. Check back soon!</p>
        </div>
      )}
    </section>
  );
};

export default EventsPage;

import EventCard from "@/components/EventCard";
import ExploreButton from "@/components/ExploreButton";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const Page = async () => {
  'use cache';
  cacheLife('hours');
  const response = await fetch(`${BASE_URL}/api/events?limit=6`);
  const { events } = await response.json();

  return (
    <section id="home">
      <h1 className="text-center">
        The Hub For Every Dev <br />
        Event You Can&apos;t Miss
      </h1>
      <p className="subheading">
        Hackathons, Meetups, and Conferences — All in One Place
      </p>
      <ExploreButton />

      <div id="events" className="mt-20 space-y-8">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {events && events.length > 0 && events.map((event : IEvent) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;

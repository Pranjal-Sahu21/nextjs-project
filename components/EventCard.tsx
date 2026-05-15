"use client";

import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
      onClick={() =>
        posthog.capture("event_card_clicked", {
          event_title: title,
          event_slug: slug,
          event_location: location,
          event_date: date,
        })
      }
    >
      <div className="poster-wrap">
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          className="poster"
        />
      </div>

      <div className="card-body">
        <p className="title">{title}</p>

        <div className="card-location">
          <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
          <p>{location}</p>
        </div>

        <div className="datetime">
          <div>
            <Image
              src="/icons/calendar.svg"
              alt="date"
              width={14}
              height={14}
            />
            <p>{date}</p>
          </div>
          <div>
            <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

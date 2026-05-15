"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

interface EventAccordionItem {
  title: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  tags: string[];
}

const EventAccordion = ({ events }: { events: EventAccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-list">
      {events.map((event, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={event.slug}
            className={`accordion-item ${isOpen ? "accordion-open" : ""}`}
          >
            {/* Collapsed header — always visible */}
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => {
                toggle(index);
                posthog.capture("accordion_toggled", {
                  event_title: event.title,
                  event_slug: event.slug,
                  action: isOpen ? "collapse" : "expand",
                });
              }}
              aria-expanded={isOpen}
            >
              <div className="accordion-summary">
                <div className="accordion-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="accordion-info">
                  <h3 className="accordion-title">{event.title}</h3>
                  <div className="accordion-meta">
                    <span className="accordion-meta-item">
                      <Image
                        src="/icons/pin.svg"
                        alt="location"
                        width={13}
                        height={13}
                      />
                      {event.location}
                    </span>
                    <span className="accordion-meta-item">
                      <Image
                        src="/icons/calendar.svg"
                        alt="date"
                        width={13}
                        height={13}
                      />
                      {event.date}
                    </span>
                    <span className="accordion-meta-item accordion-mode-pill">
                      {event.mode}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`accordion-chevron ${isOpen ? "rotate-180" : ""}`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {/* Expanded content */}
            <div
              className="accordion-content-wrapper"
              style={{
                maxHeight: isOpen ? "600px" : "0px",
              }}
            >
              <div className="accordion-content">
                <div className="accordion-expanded-layout">
                  {/* Left: Image */}
                  <div className="accordion-image-wrap">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={260}
                      className="accordion-image"
                    />
                  </div>

                  {/* Right: Details */}
                  <div className="accordion-details">
                    <p className="accordion-description">{event.description}</p>

                    {event.overview && (
                      <p className="accordion-overview">{event.overview}</p>
                    )}

                    <div className="accordion-detail-row">
                      <Image
                        src="/icons/clock.svg"
                        alt="time"
                        width={14}
                        height={14}
                      />
                      <span>{event.time}</span>
                    </div>

                    <div className="accordion-tags">
                      {event.tags?.slice(0, 5).map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/events/${event.slug}`}
                      className="accordion-cta"
                      onClick={() =>
                        posthog.capture("event_details_clicked", {
                          event_title: event.title,
                          event_slug: event.slug,
                        })
                      }
                    >
                      View Full Details
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventAccordion;

"use client";

import { createBooking } from "@/lib/actions/booking.actions";
import posthog from "posthog-js";
import { useState } from "react";
import { toast } from "sonner";

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { success, error } = await createBooking({ eventId, slug, email });

    if (success) {
      toast.success("You're in! 🎉", {
        description: `Booking confirmed for ${email}`,
      });
      setEmail("");
      posthog.capture("event_booked", {
        eventId,
        slug,
        email,
      });
    } else {
      toast.error("Booking failed", {
        description: error || "Something went wrong. Please try again.",
      });
      posthog.captureException("Booking creation failed");
    }

    setLoading(false);
  };

  return (
    <div id="book-event">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" className="button-submit" disabled={loading}>
          {loading ? "Booking..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BookEvent;

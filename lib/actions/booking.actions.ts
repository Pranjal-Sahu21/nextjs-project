"use server";

import Booking from "@/database/booking.model";

import connectDB from "@/lib/mongodb";

export const createBooking = async ({
  eventId,
  slug,
  email,
}: {
  eventId: string;
  slug: string;
  email: string;
}) => {
  try {
    await connectDB();

    await Booking.create({ eventId, slug, email });

    return { success: true };
  } catch (error: unknown) {
    console.error("create booking failed", error);

    // MongoDB duplicate key error (unique index on eventId + email)
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as { code: number }).code === 11000
    ) {
      return {
        success: false,
        error: "You have already booked this event with this email.",
      };
    }

    return { success: false, error: "Booking failed. Please try again." };
  }
};

export const getBookingCount = async (eventId: string): Promise<number> => {
  try {
    await connectDB();
    const count = await Booking.countDocuments({ eventId });
    return count;
  } catch (error) {
    console.error("Failed to get booking count", error);
    return 0;
  }
};

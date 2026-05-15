"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const ExploreButton = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => {
        console.log("CLICKED");
        posthog.capture("explore_events_clicked");
      }}
    >
      <Link href="/events">
        Explore Events{" "}
        <Image
          src="/icons/top-right-icon.svg"
          alt="Top Right Icon"
          width={17}
          height={17}
        />
      </Link>
    </button>
  );
};

export default ExploreButton;

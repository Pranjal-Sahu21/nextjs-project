"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-dark-200/60 bg-dark-100 mt-20 relative z-10">

      {/* Main footer grid */}
      <div className="container mx-auto sm:px-10 px-5 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand — spans 2 cols on desktop */}
        <div className="md:col-span-2 flex flex-col gap-4 max-md:items-center max-md:text-center">
          <Link href="/" className="logo flex items-center gap-2">
            <Image
              src="/icons/logo.png"
              alt="DevEvents Logo"
              width={24}
              height={24}
            />
            <p className="text-2xl font-space-grotesk font-bold italic tracking-tight text-white">
              DevEvent
            </p>
          </Link>
          <p className="text-light-200 text-sm max-w-sm leading-relaxed">
            The ultimate hub to discover and share developer hackathons, meetups,
            and conferences. Built by developers, for developers.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {[
              {
                label: "Twitter / X",
                href: "#",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                href: "#",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "Discord",
                href: "#",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-dark-200/60 border border-dark-200 flex items-center justify-center text-light-200 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore + Community — side by side on all screen sizes */}
        <div className="grid grid-cols-2 gap-8 md:contents">

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <p className="font-martian-mono text-xs text-primary uppercase tracking-[0.2em] font-medium">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "All Events", href: "/events" },
                { label: "Hackathons", href: "/events?tag=hackathon" },
                { label: "Meetups", href: "/events?tag=meetup" },
                { label: "Conferences", href: "/events?tag=conference" },
                { label: "Online Events", href: "/events?mode=online" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-inter text-light-200 hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-4">
            <p className="font-martian-mono text-xs text-primary uppercase tracking-[0.2em] font-medium">
              Community
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Create Event", href: "/create-event" },
                { label: "GitHub", href: "#" },
                { label: "Discord", href: "#" },
                { label: "Twitter / X", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-inter text-light-200 hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

        </div> {/* end Explore + Community wrapper */}

        {/* CTA nudge — full width on mobile, sits under Community on desktop */}
        <div className="md:col-start-4 md:col-span-1 bg-primary/5 border border-primary/15 rounded-xl px-4 py-4 flex flex-col gap-2">
          <p className="font-space-grotesk text-sm font-semibold text-foreground">
            Hosting an event?
          </p>
          <p className="text-light-200 text-xs leading-relaxed">
            List it for free and reach thousands of developers.
          </p>
          <Link
            href="/create-event"
            className="mt-1 text-xs font-space-grotesk font-bold text-primary hover:underline underline-offset-2 transition-all"
          >
            Create Event →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto sm:px-10 px-5 py-5 border-t border-dark-200/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-light-200/40 text-xs font-inter tracking-wide text-center sm:text-left">
          © {new Date().getFullYear()} DevEvent. Built for the developer community.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-light-200/40 text-xs font-inter hover:text-light-200 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
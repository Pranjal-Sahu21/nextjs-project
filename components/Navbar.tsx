"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/create-event", label: "+ Create" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/icons/logo.png"
            alt="DevEvents Logo"
            width={24}
            height={24}
          />
          <p>DevEvent</p>
        </Link>

        <ul>
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={
                  isActive
                    ? {
                        color: "#fff",
                        background: "rgba(255,255,255,0.08)",
                      }
                    : undefined
                }
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

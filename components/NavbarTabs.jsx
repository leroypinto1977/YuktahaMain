"use client";

// Ensures this component only renders on the client side
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarTabs({ isAuthenticated, user }) {
  const pathname = usePathname();
  console.log("pathname:", pathname);

  const publicNavLinks = [
    { href: "/", label: "Home" },
    { href: "/workshops", label: "Workshops" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
  ];

  const privateNavLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <>
      {/* Centered Navigation Links */}
      <div className="w-2/4 flex justify-center space-x-6">
        {publicNavLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white nav-tabs font-sofia ${
                isActive ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Private Links (Authenticated Users) */}
        {isAuthenticated &&
          privateNavLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white nav-tabs font-sofia ${
                  isActive ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
      </div>
    </>
  );
}

"use client";

// This makes it a client component
import NavbarTabs from "./NavbarTabs";
import UserDropdown from "./UserDropdown";
import { Button } from "@/components/ui/button";
import { shouldHideNavbar } from "@/utils/hideNavbarRoutes";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { usePathname } from "next/navigation";

export default function NavbarClient({ authenticated, user }) {
  const pathname = usePathname();
  console.log("pathname:", pathname);

  // if (shouldHideNavbar(pathname)) {
  //   return null;
  // }

  if (pathname !== "/") {
    if (pathname === "/events" || pathname === "/workshops") {
      return (
        <nav className="flex items-center justify-between pt-4 px-6 bg-transparent w-full z-50">
          {/* Logo Section */}
          <div className="w-1/4 flex justify-start">
            <h1 className="text-lg text-white font-bold font-sofia">Yuktaha</h1>
          </div>

          {/* Centered Navigation Links */}
          <NavbarTabs isAuthenticated={authenticated} user={user} />

          {/* Authentication Section */}
          <div className="w-1/4 flex justify-end relative">
            {!authenticated ? (
              <div className="flex space-x-2">
                <LoginLink>
                  <Button className=" bg-[#3B6790] items-baseline font-sofia">
                    {/* <span className="font-sofia">Sign in</span> */}
                    Sign In
                  </Button>
                </LoginLink>
                <RegisterLink>
                  <Button
                    variant="outline"
                    className="font-sofia items-baseline"
                  >
                    Register
                  </Button>
                </RegisterLink>
              </div>
            ) : (
              <UserDropdown user={user} />
            )}
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="flex items-center justify-between py-4 px-6 bg-transparent w-full z-50">
          {/* Logo Section */}
          <div className="w-1/4 flex justify-start">
            <h1 className="text-lg text-white font-bold font-sofia">Yuktaha</h1>
          </div>

          {/* Centered Navigation Links */}
          <NavbarTabs isAuthenticated={authenticated} user={user} />

          {/* Authentication Section */}
          <div className="w-1/4 flex justify-end relative">
            {!authenticated ? (
              <div className="flex space-x-2">
                <LoginLink>
                  <Button className=" bg-[#3B6790] items-baseline font-sofia">
                    {/* <span className="font-sofia">Sign in</span> */}
                    Sign In
                  </Button>
                </LoginLink>
                <RegisterLink>
                  <Button
                    variant="outline"
                    className="font-sofia items-baseline"
                  >
                    Register
                  </Button>
                </RegisterLink>
              </div>
            ) : (
              <UserDropdown user={user} />
            )}
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav className="flex items-center justify-between py-4 px-6 bg-transparent absolute w-full top-0 left-0 z-50">
        {/* Logo Section */}
        <div className="w-1/4 flex justify-start">
          <h1 className="text-lg text-white font-bold font-sofia">Yuktaha</h1>
        </div>

        {/* Centered Navigation Links */}
        <NavbarTabs isAuthenticated={authenticated} user={user} />

        {/* Authentication Section */}
        <div className="w-1/4 flex justify-end relative">
          {!authenticated ? (
            <div className="flex space-x-2">
              <LoginLink>
                <Button className=" bg-[#3B6790] items-baseline font-sofia">
                  {/* <span className="font-sofia">Sign in</span> */}
                  Sign In
                </Button>
              </LoginLink>
              <RegisterLink>
                <Button variant="outline" className="font-sofia items-baseline">
                  Register
                </Button>
              </RegisterLink>
            </div>
          ) : (
            <UserDropdown user={user} />
          )}
        </div>
      </nav>
    );
  }
}

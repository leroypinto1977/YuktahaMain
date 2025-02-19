export const hideNavbarRoutes = [
  // Add routes where Navbar should be hidden
  "/profile/wk/[eventId]",
  // Add more routes as needed
];

export const shouldHideNavbar = (pathname) => {
  return hideNavbarRoutes.some((route) => pathname.startsWith(route));
};

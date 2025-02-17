// "use client";

// // Make this a Client Component
// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { useState, useEffect } from "react";

// export default function UserDropdown({ user }) {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [pressTimer, setPressTimer] = useState(null);

//   const handlePressStart = () => {
//     setPressTimer(
//       setTimeout(() => {
//         setDropdownOpen(true);
//       }, 600) // Adjust long press duration
//     );
//   };

//   const handlePressEnd = () => {
//     clearTimeout(pressTimer);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="flex items-center space-x-2 focus:outline-none"
//         onMouseDown={handlePressStart}
//         onMouseUp={handlePressEnd}
//         onMouseLeave={handlePressEnd}
//         onTouchStart={handlePressStart}
//         onTouchEnd={handlePressEnd}
//       >
//         {user?.picture ? (
//           <img
//             className="w-8 h-8 rounded-full"
//             src={user?.picture}
//             alt="user profile avatar"
//             referrerPolicy="no-referrer"
//           />
//         ) : (
//           <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full">
//             {user?.given_name?.[0]}
//             {user?.family_name?.[0]}
//           </div>
//         )}
//       </button>

//       {isDropdownOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
//           <div className="p-2 text-sm text-gray-800">
//             {user?.given_name} {user?.family_name}
//           </div>
//           <LogoutLink className="block p-2 text-sm text-gray-800 hover:bg-gray-200">
//             Log out
//           </LogoutLink>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

// Make this a Client Component
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function UserDropdown({ user }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [pressTimer, setPressTimer] = useState(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  console.log("pathname:", pathname);

  useEffect(() => {
    // const pathname = usePathname();
    // if (pathname === "/profile") {
    //   document.getElementById("profile").classList.add("hidden");
    // }
    if (pathname === "/profile") {
      document.getElementById("profile").src = "";
    }

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePressStart = () => {
    setPressTimer(
      setTimeout(() => {
        setDropdownOpen(true);
      }, 50) // Adjust long press duration
    );
  };

  const handlePressEnd = () => {
    clearTimeout(pressTimer);
  };

  return (
    <div
      id="profile"
      className={`relative ${pathname === "/profile" ? "" : ""}`}
      ref={dropdownRef}
    >
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
      >
        {user?.picture ? (
          <div className="w-12 h-12 rounded-full">
            <img
              id="profileImg"
              className={`rounded-full user-profile ${
                pathname === "/profile" ? "hidden" : ""
              } ${pathname === "/new-profile" ? "hidden" : ""} `}
              src={user?.picture}
              alt="user profile avatar"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full">
            {user?.given_name?.[0]}
            {user?.family_name?.[0]}
          </div>
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <div className="p-2 text-sm text-gray-800">
            {user?.given_name} {user?.family_name}
          </div>
          <LogoutLink className="block p-2 text-sm text-gray-800 hover:bg-gray-200">
            Log out
          </LogoutLink>
        </div>
      )}
    </div>
  );
}

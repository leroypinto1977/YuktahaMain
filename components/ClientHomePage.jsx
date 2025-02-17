// app/ClientHomePage.tsx (Client Component)
"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs/client";
import React, { useState, useEffect } from "react";

export default function ClientHomePage({
  initialUser,
  initialIsAuthenticated,
}) {
  const { user, isAuthenticated } = useKindeBrowserClient();
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [currentIsAuthenticated, setCurrentIsAuthenticated] = useState(
    initialIsAuthenticated
  );

  useEffect(() => {
    setCurrentUser(user);
    setCurrentIsAuthenticated(isAuthenticated);
  }, [user, isAuthenticated]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar
        initialUser={currentUser}
        initialIsAuthenticated={currentIsAuthenticated}
      />
      <Hero />
    </div>
  );
}

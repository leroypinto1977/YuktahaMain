// /profile/nte/[eventId]/page.jsx
"use client";

import Navbar from "@/components/Navbar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useParams } from "next/navigation";
import React from "react";

const NonTechnicalEventProfileDetail = () => {
  const [event, setEvent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { user } = useKindeBrowserClient();
  const { eventId } = useParams();
  const numericEventId = eventId ? parseInt(eventId, 10) : null;

  React.useEffect(() => {
    if (!numericEventId || !user?.email) return;

    const fetchEventAndRegistration = async () => {
      try {
        // First fetch user details to check registration
        const userResponse = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/getUser?email=${user.email}`,
          { cache: "no-store" }
        );

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user details");
        }

        const userData = await userResponse.json();

        // Check if event is in user's registered non-technical events
        const isRegistered = userData.ntevents.some(
          (e) => e.eventid === numericEventId
        );

        if (!isRegistered) {
          setError("Non-Technical Event Unregistered");
          setLoading(false);
          return;
        }

        // If registered, fetch event details
        const eventResponse = await fetch(
          `/api/events/getEvent?eventId=${numericEventId}&type=non-technical`
        );

        if (!eventResponse.ok) {
          throw new Error("Event not found");
        }

        const eventData = await eventResponse.json();
        setEvent(eventData.event);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventAndRegistration();
  }, [numericEventId, user?.email]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-64px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-64px)]">
          <div className="text-white text-xl">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 shadow-xl">
          {/* Similar structure to workshop page, but with non-technical event fields */}
          {/* Add your non-technical event display logic here */}
        </div>
      </div>
    </div>
  );
};

export default NonTechnicalEventProfileDetail;

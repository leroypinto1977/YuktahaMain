"use client";

import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/acertinity_ui/background-beams.jsx";
import { useParams } from "next/navigation";
import React from "react";

const WorkshopDetail = () => {
  const [workshop, setWorkshop] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const { workshopId } = useParams();
  const numericWorkshopId = workshopId ? parseInt(workshopId, 10) : null;

  React.useEffect(() => {
    if (!numericWorkshopId) return; // Prevent fetch call if workshopId is invalid

    const fetchWorkshop = async () => {
      try {
        const response = await fetch(
          `/api/workshop/getWorkshop?workshopId=${numericWorkshopId}`
        );
        if (!response.ok) {
          throw new Error("Workshop not found");
        }
        const data = await response.json();
        setWorkshop(data.workshop);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching workshop:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshop();
  }, [numericWorkshopId]);

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

  if (error || !workshop) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex justify-center items-center h-[calc(100vh-64px)]">
          <div className="text-white text-xl">
            {error || "Workshop not found"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-800 to-neutral-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 shadow-xl">
          {workshop.outer_Img && (
            <div className="mb-8">
              {/* Image Container with 16:9 Aspect Ratio */}
              <div className="w-full aspect-video overflow-hidden rounded-xl">
                <img
                  src={workshop.outer_Img}
                  alt={workshop.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              {workshop.name}
            </h1>
            <p className="text-gray-400 text-lg">{workshop.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Workshop Details
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    <span className="font-medium text-white">Department:</span>{" "}
                    {workshop.dept}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-medium text-white">Date:</span>{" "}
                    {new Date(workshop.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-medium text-white">Time:</span>{" "}
                    {workshop.time}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-medium text-white">Venue:</span>{" "}
                    {workshop.venue}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-medium text-white">Fees:</span> ₹
                    {workshop.fees}
                  </p>
                  {/* <p className="text-gray-400">
                    <span className="font-medium text-white">
                      Availability:
                    </span>{" "}
                    {workshop.availability}/{workshop.limit} spots
                  </p> */}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Workshop Coordinators
                </h2>
                <p className="text-gray-400">
                  <span className="font-medium text-white">Name:</span>{" "}
                  {workshop.ecn}
                </p>
                <p className="text-gray-400">
                  <span className="font-medium text-white">Contact:</span>{" "}
                  {workshop.ecc}
                </p>
                {workshop.ecn2 && workshop.ecc2 && (
                  <>
                    <p className="text-gray-400">
                      <span className="font-medium text-white">Name:</span>{" "}
                      {workshop.ecn2}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-medium text-white">Contact:</span>{" "}
                      {workshop.ecc2}
                    </p>
                  </>
                )}
              </div>
              {!workshop.open && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    Registration Status:
                  </h2>
                  <p className="text-gray-400">
                    Registration is closed. Try Onspot if possible.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Requirements from participants
              </h2>
              <p className="text-gray-400 whitespace-pre-line">{workshop.pr}</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              disabled={!workshop.open}
              className={`px-8 py-3 rounded-lg text-white transition-opacity ${
                workshop.open && workshop.availability > 0
                  ? "bg-gradient-to-br from-[#3282b8] to-[#f05454] hover:opacity-90"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              {!workshop.open
                ? "Registration Closed"
                : workshop.availability === 0
                ? "Workshop Full"
                : "Register Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;

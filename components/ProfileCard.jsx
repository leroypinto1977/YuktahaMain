"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ProfileCard = ({ item, index }) => {
  // Ensure required fields have fallback values
  const eventName = item?.name || item?.title || "Untitled Event";
  const eventImage = item?.outer_Img || item?.image || "/workshop/main.png";
  const eventType = item?.type || "workshop";
  const eventId = item?.workshopid || item?.eventid || item?.id;

  // Generate link based on event type
  const eventLink =
    eventType === "workshop"
      ? `/workshops/${eventId}`
      : eventType === "technical"
      ? `/events/technical/${eventId}`
      : `/events/non-technical/${eventId}`;

  // Get badge styling based on event type
  const getBadgeStyle = () => {
    switch (eventType) {
      case "workshop":
        return "bg-blue-900/50 text-blue-200";
      case "technical":
        return "bg-green-900/50 text-green-200";
      case "non-technical":
        return "bg-purple-900/50 text-purple-200";
      default:
        return "bg-gray-900/50 text-gray-200";
    }
  };

  // Get badge text based on event type
  const getBadgeText = () => {
    switch (eventType) {
      case "workshop":
        return "Workshop";
      case "technical":
        return "Technical Event";
      case "non-technical":
        return "Non-Technical Event";
      default:
        return "Event";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      whileHover={{ scale: 1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-zinc-900 border-zinc-800 h-full border-3 rounded-3xl hover:border-zinc-700 transition-all duration-300 overflow-hidden">
        <CardHeader className="p-0">
          <motion.div
            className="relative w-full rounded-t-xl overflow-hidden pt-4 px-4"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={eventImage}
              alt={eventName}
              width={400}
              height={300}
              className="object-cover aspect-video w-full h-full rounded-t-2xl"
              priority
              onError={(e) => {
                e.currentTarget.src = "/workshop/main.png";
              }}
            />
          </motion.div>
          <div className="p-6">
            <CardTitle className="text-white">{eventName}</CardTitle>
            <div className="flex gap-2 mt-2">
              <span className={`text-xs px-2 py-1 rounded ${getBadgeStyle()}`}>
                {getBadgeText()}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end p-4">
          <Button
            className="group items-center"
            variant="secondary"
            onClick={() => {
              window.location.href = eventLink;
            }}
          >
            View Details
            <ArrowRight
              className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;

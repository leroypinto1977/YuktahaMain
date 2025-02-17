"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import React from "react";

const UserProfile = ({ user }) => {
  const [lastName, setValue] = React.useState("Samuel");
  return (
    <Card className="w-full max-w-xl bg-black/90 border-zinc-600 border-4 text-white rounded-[24px] p-6">
      <div className="relative">
        {/* Background Image */}
        {/* background-image: linear-gradient( 90deg, rgba(239, 176, 54, 1) 20%,
    rgba(59, 103, 144, 1) 72% ); */}
        <div className="h-40 -mt-[16px] -mx-[16px] rounded-[16px] bg-gradient-to-r from-[#f05454] to-[#3282b8] opacity-100" />
        {/* Close Button */}
        {/* <button className="absolute right-0 top-0 text-gray-400 hover:text-white">
          ×
        </button> */}
        {/* Profile Header */}
        <div className="relative items-center gap-4 mb-8">
          <div className="relative w-24 h-24">
            <img
              src={user.picture}
              alt="Profile"
              className="w-24 h-24 -mt-[45px] rounded-full border-5 border-black "
            />
            {/* <Check className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full p-1 w-6 h-6" /> */}
          </div>

          <div className="relative flex-1">
            <div className="flex items-center gap-4 mb-1">
              <h2 className="text-2xl font-semibold">Leroy Samuel</h2>
            </div>
            <p className="text-gray-400">leroypinto1977@gmail.com</p>
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Yuktaha ID", value: "YUK250001" },
            { label: "Workshops registerd", value: "1" },
            { label: "Technical events registered", value: "1" },
            { label: "Non-Technical events", value: "0" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="font-medium">{stat.value}</p>
            </div>
          ))}
        </div>
        {/* Form Fields */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <Input
                type="text"
                value="Leroy"
                className="w-full bg-gray-800 h-11 rounded-lg p-3"
                // onValueChange={(value) => setValue(value)}
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <Input
                type="text"
                value={lastName}
                className="w-full bg-gray-800 h-11 rounded-lg p-3"
                // onChange={(value) => setValue("lastName", value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">College</label>
            <div className="relative">
              <Input
                type="email"
                value="PSG iTech"
                className="w-full h-11 bg-gray-800 rounded-lg p-3 pr-32"
                readOnly
              />
              {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-sm text-blue-400">
                <Check className="w-4 h-4 mr-1" />
                VERIFIED 2 JAN, 2025
              </div> */}
            </div>
          </div>

          {/* <div>
            <label className="block text-sm mb-2">Country</label>
            <button className="w-full bg-gray-800 rounded-lg p-3 text-left flex items-center">
              <img
                src="/api/placeholder/24/24"
                alt="US Flag"
                className="w-6 h-6 rounded-full mr-2"
              />
              United States
            </button>
          </div>

          <div>
            <label className="block text-sm mb-2">Username</label>
            <div className="flex rounded-lg overflow-hidden">
              <div className="bg-gray-800 p-3 text-gray-400">
                untitledui.com/
              </div>
              <input
                type="text"
                value="siennahewitt"
                className="flex-1 bg-gray-800 p-3"
                readOnly
              />
              <div className="bg-gray-800 p-3">
                <Check className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div> */}
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
            Save changes
          </button>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;

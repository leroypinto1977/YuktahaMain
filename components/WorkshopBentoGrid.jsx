// import React from "react";

// const BentoGrid = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
//         {/* Central Square */}
//         <div
//           className="col-start-2 row-start-2 flex items-center justify-center bg-blue-500 text-white text-center p-4 rounded-lg"
//           style={{ width: "150px", height: "150px" }}
//         >
//           <span>Innovation & Technology</span>
//         </div>

//         {/* Surrounding Boxes */}
//         <div className="bg-green-500 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>AI & Machine Learning</span>
//         </div>
//         <div className="bg-purple-500 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Cybersecurity & Ethical Hacking</span>
//         </div>
//         <div className="bg-yellow-500 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Blockchain & Cryptocurrency</span>
//         </div>
//         <div className="bg-red-500 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Quantum Computing</span>
//         </div>
//         <div className="bg-indigo-500 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Internet of Things (IoT)</span>
//         </div>
//         <div className="bg-pink-500 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Augmented Reality (AR) & Virtual Reality (VR)</span>
//         </div>
//         <div className="bg-teal-500 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Game Development & Simulation</span>
//         </div>
//         <div className="bg-orange-500 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Full-Stack Web Development</span>
//         </div>
//         <div className="bg-gray-500 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Mobile App Development</span>
//         </div>
//         <div className="bg-blue-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Cloud Computing & DevOps</span>
//         </div>
//         <div className="bg-green-300 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Data Science & Big Data</span>
//         </div>
//         <div className="bg-purple-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Python for Automation</span>
//         </div>
//         <div className="bg-yellow-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Competitive Programming & DSA</span>
//         </div>
//         <div className="bg-red-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Robotics & Automation</span>
//         </div>
//         <div className="bg-indigo-300 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Embedded Systems & IoT</span>
//         </div>
//         <div className="bg-pink-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Drone Technology</span>
//         </div>
//         <div className="bg-teal-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>3D Printing & Prototyping</span>
//         </div>
//         <div className="bg-orange-300 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>VLSI & FPGA Design</span>
//         </div>
//         <div className="bg-gray-300 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Startup Incubation & Pitching</span>
//         </div>
//         <div className="bg-blue-200 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Techpreneurship & Product Development</span>
//         </div>
//         <div className="bg-green-200 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Leadership & Innovation</span>
//         </div>
//         <div className="bg-purple-200 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Design Thinking & Problem Solving</span>
//         </div>
//         <div className="bg-yellow-200 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Resume Building & Interview Mastery</span>
//         </div>
//         <div className="bg-red-200 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Metaverse & Web3</span>
//         </div>
//         <div className="bg-indigo-200 text-white p-4 rounded-lg col-span-1 row-span-2 flex items-center justify-center">
//           <span>Autonomous Vehicles & Smart Transportation</span>
//         </div>
//         <div className="bg-pink-200 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Neural Networks & Deep Learning</span>
//         </div>
//         <div className="bg-teal-200 text-white p-4 rounded-lg col-span-1 row-span-1 flex items-center justify-center">
//           <span>Biotech & Bioinformatics</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BentoGrid;

// import { MagicCard } from "@/components/magic_ui/MagicCard";
import React from "react";

const BentoGrid = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] p-8">
      <div className="grid grid-cols-6 gap-4 w-full mx-auto">
        {/* Row 1 */}
        <div className="col-span-1 h-48 bg-green-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>AI & Machine Learning</span>
        </div>

        <div className="col-span-1 h-48 bg-blue-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Innovation & Technology</span>
        </div>
        <div className="col-span-2 h-48 bg-purple-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Cybersecurity & Ethical Hacking</span>
        </div>

        {/* Row 2 */}
        <div className="col-span-1 h-48 bg-red-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Quantum Computing</span>
        </div>
        <div className="col-span-1 bg-indigo-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Internet of Things (IoT)</span>
        </div>
        <div className="col-span-2 row-span-2 bg-indigo-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Workshop</span>
        </div>
        <div className="col-span-1 h-48 bg-pink-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>AR & VR</span>
        </div>
        {/* <div className="col-span-1 row-span-2 bg-orange-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Full-Stack Development</span>
        </div> */}
        <div className="col-span-1 bg-orange-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Full-Stack Development</span>
        </div>

        {/* Row 3 */}
        <div className="col-span-1 h-48 bg-teal-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Game Development</span>
        </div>
        <div className="col-span-1 bg-indigo-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Internet of Things (IoT)</span>
        </div>
        <div className="col-span-1 h-48 bg-gray-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Mobile App Development</span>
        </div>
        <div className="col-span-1 bg-orange-500 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Full-Stack Development</span>
        </div>

        {/* Row 4 */}
        <div className="col-span-2 h-48 bg-blue-300 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Cloud Computing & DevOps</span>
        </div>
        <div className="col-span-2 row-span-2 h-48 bg-green-300 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Data Science & Big Data</span>
        </div>
        <div className="col-span-1 h-48 bg-purple-300 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Python for Automation</span>
        </div>
        <div className="col-span-1 h-48 bg-yellow-300 text-white p-4 rounded-2xl flex items-center justify-center">
          <span>Competitive Programming</span>
        </div>

        {/* Additional rows following the same pattern */}
        {/* <div className="col-span-2 h-32 bg-red-300 text-white p-4 rounded-lg flex items-center justify-center">
          <span>Robotics & Automation</span>
        </div>
        <div className="col-span-2 h-32 bg-indigo-300 text-white p-4 rounded-lg flex items-center justify-center">
          <span>Embedded Systems</span>
        </div>
        <div className="col-span-2 h-32 bg-pink-300 text-white p-4 rounded-lg flex items-center justify-center">
          <span>Drone Technology</span>
        </div>

        <div className="col-span-2 h-32 bg-teal-300 text-white p-4 rounded-lg flex items-center justify-center">
          <span>3D Printing & Prototyping</span>
        </div>
        <div className="col-span-2 h-32 bg-orange-300 text-white p-4 rounded-lg flex items-center justify-center">
          <span>VLSI & FPGA Design</span>
        </div>
        <div className="col-span-2 h-32 bg-gray-300 text-white p-4 rounded-lg flex items-center justify-center">
          <span>Startup Incubation</span>
        </div> */}
      </div>
    </div>
  );
};

export default BentoGrid;

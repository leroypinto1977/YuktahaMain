// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardFooter,
//   CardTitle,
// } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// // components / WorkshopGrid.tsx;

// const workshopData = [
//   {
//     w_id: 1,
//     title: "Web Development Basics",
//     description: "Learn the fundamentals of HTML, CSS, and JavaScript",
//     duration: "8 weeks",
//     level: "Beginner",
//     img: "/workshop/main.png",
//   },
//   {
//     w_id: 2,
//     title: "React Masterclass",
//     description: "Advanced React patterns and best practices",
//     duration: "6 weeks",
//     level: "Advanced",
//     img: "/workshop/main.png",
//   },
//   {
//     w_id: 3,
//     title: "UI/UX Design",
//     description: "Design principles and user experience fundamentals",
//     duration: "4 weeks",
//     level: "Intermediate",
//     img: "/workshop/main.png",
//   },
//   {
//     w_id: 4,
//     title: "Mobile App Development",
//     description: "Build cross-platform mobile applications",
//     duration: "10 weeks",
//     level: "Intermediate",
//     img: "/workshop/main.png",
//   },
//   {
//     w_id: 5,
//     title: "Data Science Fundamentals",
//     description: "Introduction to data analysis and visualization",
//     duration: "12 weeks",
//     level: "Beginner",
//     img: "/workshop/main.png",
//   },
//   {
//     w_id: 6,
//     title: "Cloud Computing",
//     description: "AWS and cloud infrastructure basics",
//     duration: "8 weeks",
//     level: "Intermediate",
//     img: "/workshop/main.png",
//   },
// ];

// const WorkshopGrid = () => {
//   return (
//     <section className="w-full px-4 py-16 bg-black">
//       <motion.h2
//         className="text-4xl font-bold text-center text-white mb-12"
//         initial={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.6 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         Workshops
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full mx-auto pb-16 px-28">
//         {workshopData.map((workshop, index) => (
//           <motion.div
//             key={workshop.w_id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             whileHover={{ scale: 1 }} // Scale the entire card on hover
//           >
//             <Card className="bg-zinc-900 border-zinc-800 h-full border-3 rounded-3xl hover:border-zinc-700 transition-all duration-300 overflow-hidden">
//               <CardHeader className="p-0">
//                 <motion.div
//                   className="relative h-[300px] w-full rounded-t-xl overflow-hidden"
//                   whileHover={{ scale: 1.1 }} // Scale the image on hover
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src={workshop.img}
//                     alt={workshop.title}
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-full"
//                   />
//                 </motion.div>
//                 <div className="p-6">
//                   <CardTitle className="text-white">{workshop.title}</CardTitle>
//                   <div className="flex gap-2 mt-2">
//                     <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
//                       {workshop.duration}
//                     </span>
//                     <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
//                       {workshop.level}
//                     </span>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent className="p-6 pt-0">
//                 <CardDescription className="text-zinc-400">
//                   {workshop.description}
//                 </CardDescription>
//               </CardContent>
//               <CardFooter className="flex justify-end">
//                 {/* <Button>Deploy</Button> */}
//                 {/* <Button className="group items-center bg-neutral-200 text-neutral-800 hover:bg-neutral-300 hover:text-neutral-900"> */}
//                 <Button
//                   className="group items-center pt-2 pb-2"
//                   variant="secondary"
//                 >
//                   Learn More
//                   <ArrowRight
//                     className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
//                     size={16}
//                     strokeWidth={2}
//                     aria-hidden="true"
//                   />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WorkshopGrid;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const WorkshopGrid = () => {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch("/api/workshop");
        if (!response.ok) {
          throw new Error("Failed to fetch workshops");
        }
        const data = await response.json();
        setWorkshops(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  if (loading) {
    return (
      <div className="w-full px-4 py-16 bg-black text-white text-center">
        Loading workshops...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-4 py-16 bg-black text-white text-center">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="w-full px-4 py-16 bg-black">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Workshops
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full mx-auto pb-16 px-28">
        {workshops
          .filter((workshop) => workshop.open) // Only show workshops where open is true
          .map((workshop, index) => (
            <motion.div
              key={workshop.workshopid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1 }}
            >
              <Card className="bg-zinc-900 border-zinc-800 h-full border-3 rounded-3xl hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0">
                  <motion.div
                    className="relative w-full rounded-t-xl overflow-hidden pt-4 px-4"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={workshop.outer_Img || "/workshop/main.png"}
                      alt={workshop.name}
                      width={400}
                      height={300}
                      className="object-cover aspect-video w-full h-full rounded-t-2xl"
                    />
                  </motion.div>

                  <div className="p-6">
                    <CardTitle className="text-white">
                      {workshop.name}
                    </CardTitle>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                        {workshop.dept}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-0">
                  <CardDescription className="text-zinc-400">
                    {workshop.short_desc}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    className="group items-center pt-2 pb-2"
                    variant="secondary"
                    onClick={() => {
                      router.push(`/workshops/${workshop.workshopid}`);
                    }}
                  >
                    Register
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
          ))}
      </div>
    </section>
  );
};

export default WorkshopGrid;

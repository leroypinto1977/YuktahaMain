// // bento-grid.jsx
// import { cn } from "@/lib/utils";

// export const BentoGrid = ({ className, children }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 w-full px-4",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 rounded-xl group/bento light:hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] light:bg-white border light:border-transparent justify-between flex flex-col space-y-4 w-full",
//         className
//       )}
//     >
//       {header}
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
//         {icon}
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//           {title}
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };

// bento-grid.jsx
import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[minmax(0,1fr)] grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-3 gap-4 w-full h-full p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento light:hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] light:bg-white border light:border-transparent justify-between flex flex-col space-y-2 w-full h-full",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-medium light:text-neutral-600 text-neutral-200 dark:text-neutral-200 my-2">
          {title}
        </div>
        <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

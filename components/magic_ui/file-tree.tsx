// "use client";

// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { cn } from "@/lib/utils";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
// import React, {
//   createContext,
//   forwardRef,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type TreeViewElement = {
//   id: string;
//   name: string;
//   isSelectable?: boolean;
//   children?: TreeViewElement[];
// };

// type TreeContextProps = {
//   selectedId: string | undefined;
//   expandedItems: string[] | undefined;
//   indicator: boolean;
//   handleExpand: (id: string) => void;
//   selectItem: (id: string) => void;
//   setExpandedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
//   openIcon?: React.ReactNode;
//   closeIcon?: React.ReactNode;
//   direction: "rtl" | "ltr";
// };

// const TreeContext = createContext<TreeContextProps | null>(null);

// const useTree = () => {
//   const context = useContext(TreeContext);
//   if (!context) {
//     throw new Error("useTree must be used within a TreeProvider");
//   }
//   return context;
// };

// interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

// type TreeViewProps = {
//   initialSelectedId?: string;
//   indicator?: boolean;
//   elements?: TreeViewElement[];
//   initialExpandedItems?: string[];
//   openIcon?: React.ReactNode;
//   closeIcon?: React.ReactNode;
// } & TreeViewComponentProps;

// const Tree = forwardRef<HTMLDivElement, TreeViewProps>(
//   (
//     {
//       className,
//       elements,
//       initialSelectedId,
//       initialExpandedItems,
//       children,
//       indicator = true,
//       openIcon,
//       closeIcon,
//       dir,
//       ...props
//     },
//     ref
//   ) => {
//     const [selectedId, setSelectedId] = useState<string | undefined>(
//       initialSelectedId
//     );
//     const [expandedItems, setExpandedItems] = useState<string[] | undefined>(
//       initialExpandedItems
//     );

//     const selectItem = useCallback((id: string) => {
//       setSelectedId(id);
//     }, []);

//     const handleExpand = useCallback((id: string) => {
//       setExpandedItems((prev) => {
//         if (prev?.includes(id)) {
//           return prev.filter((item) => item !== id);
//         }
//         return [...(prev ?? []), id];
//       });
//     }, []);

//     const direction = dir === "rtl" ? "rtl" : "ltr";

//     return (
//       <TreeContext.Provider
//         value={{
//           selectedId,
//           expandedItems,
//           handleExpand,
//           selectItem,
//           setExpandedItems,
//           indicator,
//           openIcon,
//           closeIcon,
//           direction,
//         }}
//       >
//         <div
//           className={cn(
//             "size-full light:bg-white light:text-black bg-neutral-900 text-white",
//             className
//           )}
//         >
//           <ScrollArea
//             ref={ref}
//             className="relative h-full px-2"
//             dir={dir as "rtl" | "ltr"}
//           >
//             <AccordionPrimitive.Root
//               {...props}
//               type="multiple"
//               defaultValue={expandedItems}
//               value={expandedItems}
//               className="flex flex-col gap-1"
//               onValueChange={(value) =>
//                 setExpandedItems((prev) => [...(prev ?? []), value[0]])
//               }
//               dir={dir as "rtl" | "ltr"}
//             >
//               {children}
//             </AccordionPrimitive.Root>
//           </ScrollArea>
//         </div>
//       </TreeContext.Provider>
//     );
//   }
// );

// Tree.displayName = "Tree";

// const TreeIndicator = forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => {
//   const { direction } = useTree();

//   return (
//     <div
//       dir={direction}
//       ref={ref}
//       className={cn(
//         "absolute left-1.5 h-full w-px rounded-md bg-muted py-3 duration-300 ease-in-out hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-300 rtl:right-1.5",
//         className
//       )}
//       {...props}
//     />
//   );
// });

// TreeIndicator.displayName = "TreeIndicator";

// const Folder = forwardRef<HTMLDivElement, any>(
//   (
//     {
//       className,
//       element,
//       value,
//       isSelectable = true,
//       isSelect,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const { handleExpand, expandedItems, openIcon, closeIcon } = useTree();

//     return (
//       <AccordionPrimitive.Item
//         {...props}
//         value={value}
//         className="relative h-full overflow-hidden"
//       >
//         <AccordionPrimitive.Trigger
//           className={cn(
//             "flex items-center gap-1 rounded-md text-sm light:text-black text-neutral-200",
//             {
//               "bg-muted dark:bg-gray-700": isSelect && isSelectable,
//               "cursor-pointer": isSelectable,
//               "cursor-not-allowed opacity-50": !isSelectable,
//             },
//             className
//           )}
//           disabled={!isSelectable}
//           onClick={() => handleExpand(value)}
//         >
//           {expandedItems?.includes(value)
//             ? openIcon ?? <FolderOpenIcon className="size-4" />
//             : closeIcon ?? <FolderIcon className="size-4" />}
//           <span>{element}</span>
//         </AccordionPrimitive.Trigger>
//         <AccordionPrimitive.Content className="relative h-full overflow-hidden text-sm">
//           {element && <TreeIndicator aria-hidden="true" />}
//           <div className="ml-5 flex flex-col gap-1 py-1 rtl:mr-5">
//             {children}
//           </div>
//         </AccordionPrimitive.Content>
//       </AccordionPrimitive.Item>
//     );
//   }
// );

// Folder.displayName = "Folder";

// const File = forwardRef<HTMLButtonElement, any>(
//   (
//     {
//       value,
//       className,
//       handleSelect,
//       isSelectable = true,
//       isSelect,
//       fileIcon,
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     const { selectedId, selectItem } = useTree();
//     const isSelected = isSelect ?? selectedId === value;
//     return (
//       <button
//         ref={ref}
//         type="button"
//         disabled={!isSelectable}
//         className={cn(
//           "flex w-fit items-center gap-1 rounded-md pr-1 text-sm light:text-black text-neutral-200",
//           {
//             "light:bg-muted bg-gray-700": isSelected && isSelectable,
//           },
//           isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
//           className
//         )}
//         onClick={() => selectItem(value)}
//         {...props}
//       >
//         {fileIcon ?? <FileIcon className="size-4" />}
//         {children}
//       </button>
//     );
//   }
// );

// File.displayName = "File";

// const CollapseButton = forwardRef<HTMLButtonElement, any>(
//   ({ className, elements, expandAll = false, children, ...props }, ref) => {
//     const { expandedItems, setExpandedItems } = useTree();

//     const expendAllTree = useCallback((elements: TreeViewElement[]) => {
//       const expandTree = (element: TreeViewElement) => {
//         if (element.children && element.children.length > 0) {
//           setExpandedItems?.((prev) => [...(prev ?? []), element.id]);
//           element.children.forEach(expandTree);
//         }
//       };
//       elements.forEach(expandTree);
//     }, []);

//     const closeAll = useCallback(() => {
//       setExpandedItems?.([]);
//     }, []);

//     return (
//       <Button
//         variant={"ghost"}
//         className="absolute bottom-1 right-2 h-8 w-fit p-1 text-black dark:text-white"
//         onClick={
//           expandedItems && expandedItems.length > 0
//             ? closeAll
//             : () => expendAllTree(elements)
//         }
//         ref={ref}
//         {...props}
//       >
//         {children}
//         <span className="sr-only">Toggle</span>
//       </Button>
//     );
//   }
// );

// CollapseButton.displayName = "CollapseButton";

// export { CollapseButton, File, Folder, Tree, type TreeViewElement };

"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

type TreeContextProps = {
  selectedId: string | undefined;
  expandedItems: string[] | undefined;
  indicator: boolean;
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
  setExpandedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  direction: "rtl" | "ltr";
};

const TreeContext = createContext<TreeContextProps | null>(null);

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};

interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

type TreeViewProps = {
  initialSelectedId?: string;
  indicator?: boolean;
  elements?: TreeViewElement[];
  initialExpandedItems?: string[];
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  title?: string;
} & TreeViewComponentProps;

const Tree = forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      elements,
      initialSelectedId,
      initialExpandedItems,
      children,
      indicator = true,
      openIcon,
      closeIcon,
      dir,
      title = "Explorer",
      ...props
    },
    ref
  ) => {
    const [selectedId, setSelectedId] = useState<string | undefined>(
      initialSelectedId
    );
    const [expandedItems, setExpandedItems] = useState<string[] | undefined>(
      initialExpandedItems
    );

    const selectItem = useCallback((id: string) => {
      setSelectedId(id);
    }, []);

    const handleExpand = useCallback((id: string) => {
      setExpandedItems((prev) => {
        if (prev?.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...(prev ?? []), id];
      });
    }, []);

    const direction = dir === "rtl" ? "rtl" : "ltr";

    return (
      <TreeContext.Provider
        value={{
          selectedId,
          expandedItems,
          handleExpand,
          selectItem,
          setExpandedItems,
          indicator,
          openIcon,
          closeIcon,
          direction,
        }}
      >
        <div
          className={cn(
            "size-full light:bg-white light:text-black bg-neutral-900 text-white rounded-xl border border-neutral-700 overflow-hidden",
            className
          )}
        >
          <div className="flex flex-row items-center justify-between border-b border-neutral-700 p-4 pb-3">
            <div className="flex flex-row gap-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-white text-md font-medium">{title}</div>
            <div className="w-10"></div>
          </div>

          <ScrollArea
            ref={ref}
            className="relative h-[calc(100%-4rem)]"
            dir={dir as "rtl" | "ltr"}
            scrollHideDelay={0}
          >
            <div className="px-4 py-1">
              <AccordionPrimitive.Root
                {...props}
                type="multiple"
                defaultValue={expandedItems}
                value={expandedItems}
                className="flex flex-col gap-1 py-2"
                onValueChange={(value) =>
                  setExpandedItems((prev) => [...(prev ?? []), value[0]])
                }
                dir={dir as "rtl" | "ltr"}
              >
                {children}
              </AccordionPrimitive.Root>
            </div>
          </ScrollArea>
        </div>
      </TreeContext.Provider>
    );
  }
);

// Rest of the component code remains the same...
Tree.displayName = "Tree";

const TreeIndicator = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { direction } = useTree();

  return (
    <div
      dir={direction}
      ref={ref}
      className={cn(
        "absolute left-1.5 h-full w-px rounded-md bg-muted py-3 duration-300 ease-in-out hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-300 rtl:right-1.5",
        className
      )}
      {...props}
    />
  );
});

TreeIndicator.displayName = "TreeIndicator";

const Folder = forwardRef<HTMLDivElement, any>(
  (
    {
      className,
      element,
      value,
      isSelectable = true,
      isSelect,
      children,
      ...props
    },
    ref
  ) => {
    const { handleExpand, expandedItems, openIcon, closeIcon } = useTree();

    return (
      <AccordionPrimitive.Item
        {...props}
        value={value}
        className="relative h-full overflow-hidden"
      >
        <AccordionPrimitive.Trigger
          className={cn(
            "flex items-center gap-1 rounded-md text-sm light:text-black text-neutral-200",
            {
              "bg-muted dark:bg-gray-700": isSelect && isSelectable,
              "cursor-pointer": isSelectable,
              "cursor-not-allowed opacity-50": !isSelectable,
            },
            className
          )}
          disabled={!isSelectable}
          onClick={() => handleExpand(value)}
        >
          {expandedItems?.includes(value)
            ? openIcon ?? <FolderOpenIcon className="size-4" />
            : closeIcon ?? <FolderIcon className="size-4" />}
          <span>{element}</span>
        </AccordionPrimitive.Trigger>
        <AccordionPrimitive.Content className="relative h-full overflow-hidden text-sm">
          {element && <TreeIndicator aria-hidden="true" />}
          <div className="ml-5 flex flex-col gap-1 py-1 rtl:mr-5">
            {children}
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    );
  }
);

Folder.displayName = "Folder";

const File = forwardRef<HTMLButtonElement, any>(
  (
    {
      value,
      className,
      handleSelect,
      isSelectable = true,
      isSelect,
      fileIcon,
      children,
      ...props
    },
    ref
  ) => {
    const { selectedId, selectItem } = useTree();
    const isSelected = isSelect ?? selectedId === value;
    return (
      <button
        ref={ref}
        type="button"
        disabled={!isSelectable}
        className={cn(
          "flex w-fit items-center gap-1 rounded-md pr-1 text-sm light:text-black text-neutral-200",
          {
            "light:bg-muted bg-gray-700": isSelected && isSelectable,
          },
          isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
          className
        )}
        onClick={() => selectItem(value)}
        {...props}
      >
        {fileIcon ?? <FileIcon className="size-4" />}
        {children}
      </button>
    );
  }
);

File.displayName = "File";

const CollapseButton = forwardRef<HTMLButtonElement, any>(
  ({ className, elements, expandAll = false, children, ...props }, ref) => {
    const { expandedItems, setExpandedItems } = useTree();

    const expendAllTree = useCallback((elements: TreeViewElement[]) => {
      const expandTree = (element: TreeViewElement) => {
        if (element.children && element.children.length > 0) {
          setExpandedItems?.((prev) => [...(prev ?? []), element.id]);
          element.children.forEach(expandTree);
        }
      };
      elements.forEach(expandTree);
    }, []);

    const closeAll = useCallback(() => {
      setExpandedItems?.([]);
    }, []);

    return (
      <Button
        variant={"ghost"}
        className="absolute bottom-1 right-2 h-8 w-fit p-1 text-black dark:text-white"
        onClick={
          expandedItems && expandedItems.length > 0
            ? closeAll
            : () => expendAllTree(elements)
        }
        ref={ref}
        {...props}
      >
        {children}
        <span className="sr-only">Toggle</span>
      </Button>
    );
  }
);

CollapseButton.displayName = "CollapseButton";

export { CollapseButton, File, Folder, Tree, type TreeViewElement };

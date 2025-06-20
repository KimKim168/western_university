import React from "react";
import { motion } from "motion/react";
import { usePage, Link } from "@inertiajs/react";
import { ChevronRight, ChevronUp } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};


export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  subRoutes = [],
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  subRoutes?: string[];
}) => {
  const { url } = usePage();
  const hasSubMenu = children !== undefined && subRoutes.length > 0;
  const isActive = subRoutes.includes(url);

  return (
    <div
      onMouseEnter={() => hasSubMenu && setActive(item)}
      className="relative"
    >
      <motion.div
        transition={{ duration: 0.3 }}
        className={`text-base px-2 py-11 cursor-pointer font-noto-san-extra-light font-bold hover:text-red-800 ${
          isActive ? "text-red-700" : "text-primary"
        } hover:opacity-90 flex gap-0.5 items-center`}
      >
        {item}
        {hasSubMenu && (
          <ChevronUp className="h-3 w-3 stroke-3 text-black dark:text-gray-300 transition-transform duration-300 rotate-180" />
        )}
      </motion.div>

      {active === item && hasSubMenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute z-100 left-1/2 -translate-x-1/2 w-full"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-blue-950 w-[250px] overflow-hidden shadow-xl"
          >
            <motion.div layout className="h-full w-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};


export const HoveredLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const { url } = usePage();

  const isActive = url === href;

  return (
    <Link
      href={href}
      {...rest}
      className={`group flex items-center text-sm w-full border-b-[0.5px] border-white py-2 text-white ${
        isActive ? "text-red-500 font-extrabold" : ""
      }`}
    >
      <ChevronRight className={`w-4 h-4 mr-1  ${isActive ? 'w-4 h-4 mr-4':' opacity-0 group-hover:opacity-100 transition-opacity duration-300'}`} />
      <span className="transition-transform -translate-x-4 duration-300 group-hover:translate-x-[10px]">
        {children}
      </span>
    </Link>
  );
};


export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-between items-center space-x-2"
    >
      <div className="flex items-center space-x-2 text-base">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md object-cover shadow-xl"
      />
      <div>
        <h4 className="text-xl font-proxima-nova-bold font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

// export const HoveredLink = ({ children, ...rest }: any) => {
//   return (
//   <Link
//   {...rest}
//   className="group flex items-center text-sm w-full border-b-[0.5px] py-2 text-white"
// >
//   <ChevronRight className="  w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//   <span className="transition-transform -translate-x-4 duration-300 group-hover:translate-x-[10px]">
//     {children}
//   </span>
// </Link>

//   );
// };

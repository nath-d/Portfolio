import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiCodeAlt, BiHome, BiGitBranch, BiPhone } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Home = () => {
  const menus = [
    { name: "Home", link: "/", icon: BiHome },
    { name: "About", link: "/", icon: FiUser },
    { name: "Skills", link: "/", icon: BiCodeAlt },
    { name: "Projects", link: "/", icon: BiGitBranch, margin: true },
    { name: "Contact", link: "/", icon: BiPhone },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-zinc-950 min-h-screen ${
          open ? "w-96" : "w-16"
        } duration-500 text-white px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-52 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && ""
              } group flex items-center text-lg gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "22" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-12 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div> */}
    </section>
  );
};

export default Home;


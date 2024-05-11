import "./NavBarCss.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import logo from "../assets/images/icons8-home-repair-64.png";
import { FaAngleDown } from "react-icons/fa";
import { TbUserCircle } from "react-icons/tb";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logoutUser } = useContext(authContext);

  const navItems = (
    <>
      <NavbarItem>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
              : "text-primary dark:text-[#EEF7FF] px-2"
          }
        >
          Home
        </NavLink>
      </NavbarItem>

      <NavbarItem>
        <NavLink
          to={"/services"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary  dark:text-[#EEF7FF] px-2"
              : "text-primary dark:text-[#EEF7FF] px-2"
          }
        >
          Services
        </NavLink>
      </NavbarItem>
    </>
  );

  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-white/60 dark:bg-white/40 shadow-lg shadow-secondary dark:shadow-white border border-white max-w-7xl mx-auto"
      >
        <NavbarContent className="w-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <Link to={"/"} className="flex items-center">
              <img className="w-10" src={logo} alt="" />
              <p className="text-xl font-bold text-inherit">
                Shine
                <span className="text-primary dark:text-secondary">Fix</span>
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-8 text-xl font-medium"
          justify="center"
        >
          {/* laptop  */}
          {navItems}

          {/* ========== Dropdwon ========= */}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-primary dark:text-[#EEF7FF] px-2 text-base font-medium"
                  radius="sm"
                  variant="light"
                >
                  Dashboard{" "}
                  <FaAngleDown className="text-primary dark:text-secondary"></FaAngleDown>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[150px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {/*========= Dropdwon items ========== */}
              <DropdownItem>
                <NavLink
                  to={"/addService"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Add Service
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to={"/managerService"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Manage Service
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to={"/bookedService"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Booked-Services
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to={"/serviceToDo"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Service To Do
                </NavLink>
              </DropdownItem>
              {/* ======== End Dropdwon items ====== */}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent justify="end">
          {user ? (
            <>
              <div>
                {user?.photoURL ? (
                  <>
                    <Tooltip showArrow={true} content={user?.displayName}>
                      <img
                        className="rounded-full w-10 h-10"
                        src={user.photoURL}
                        alt=""
                      />
                    </Tooltip>
                  </>
                ) : (
                  <Tooltip showArrow={true} content={user?.displayName}>
                    <TbUserCircle className="text-4xl text-forth"></TbUserCircle>
                  </Tooltip>
                )}
              </div>
              <Button
                onClick={logoutUser}
                className="rounded-none bg-primary dark:bg-secondary text-base text-white font-medium"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <Button className="rounded-none bg-primary dark:bg-secondary text-base text-white font-medium">
                  Login
                </Button>
              </Link>
            </>
          )}
        </NavbarContent>
        {/* mobile  */}
        <NavbarMenu>
          {navItems}
          {/* ======= dropdwon items =====  */}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className=" text-primary dark:text-[#EEF7FF] px-2 text-base"
                  radius="sm"
                  variant="light"
                >
                  Dashboard{" "}
                  <FaAngleDown className="text-primary dark:text-secondary"></FaAngleDown>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[250px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {/*========= Dropdwon items ========== */}
              <DropdownItem>
                <NavLink
                  to={"/addService"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Add Service
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to={"/managerService"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Manage Service
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to={"/bookedService"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Booked-Services
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to={"/serviceToDo"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
                      : "text-primary dark:text-[#EEF7FF] px-2"
                  }
                >
                  Service To Do
                </NavLink>
              </DropdownItem>
              {/* ======== End Dropdwon items ====== */}
            </DropdownMenu>
          </Dropdown>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;

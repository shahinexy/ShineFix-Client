import './NavBarCss.css'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  //   NavbarMenuItem,
  // Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = (
    <>
      <NavbarItem>
        <NavLink to={"/"} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary dark:text-[#EEF7FF] px-2"
              : "text-primary dark:text-[#EEF7FF] px-2"
          }>Home</NavLink>
      </NavbarItem>

      <NavbarItem>
        <NavLink to={"/services"} className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-primary dark:border-secondary rounded-none text-primary  dark:text-[#EEF7FF] px-2"
              : "text-primary dark:text-[#EEF7FF] px-2"
          }>Services</NavLink>
      </NavbarItem>
    </>
  );

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white/60 dark:bg-white/40 shadow-lg shadow-secondary dark:shadow-white border border-white max-w-7xl mx-auto">
        <NavbarContent className="w-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8 text-xl font-medium" justify="center">
            {/* laptop  */}
          {navItems}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to={'/login'}><Button className='rounded-none bg-primary dark:bg-secondary text-base text-white font-medium'>Login</Button></Link>
          </NavbarItem>
        </NavbarContent>
        {/* mobile  */}
        <NavbarMenu>{navItems}</NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;

import './NavBarCss.css'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
} from "@nextui-org/react";
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { authContext } from '../AuthProvider/AuthProvider';
import logo from '../assets/images/icons8-home-repair-64.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {user, logoutUser} = useContext(authContext)

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
            <img className='w-10' src={logo} alt="" />
            <p className="text-xl font-bold text-inherit">Shine<span className='text-primary dark:text-secondary'>Fix</span></p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8 text-xl font-medium" justify="center">
            {/* laptop  */}
          {navItems}
        </NavbarContent>
        <NavbarContent justify="end">
          {
            user ? <Button onClick={logoutUser} className='rounded-none bg-primary dark:bg-secondary text-base text-white font-medium'>Logout</Button>
            : <>            
            <Link to={'/login'}><Button className='rounded-none bg-primary dark:bg-secondary text-base text-white font-medium'>Login</Button></Link>
            </>
          }
            
        </NavbarContent>
        {/* mobile  */}
        <NavbarMenu>{navItems}</NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;

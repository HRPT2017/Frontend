"use client";

import { Navbar as FlowbiteNavbar, NavbarBrand, NavbarLink, NavbarCollapse, Dropdown, DropdownItem } from "flowbite-react";
import Link from "next/link";
import { routes, Route } from "@/lib/routes";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname(); // current path
  const renderLink = (route: Route) => {
    if (route.children) {
      return (
        <Dropdown
          key={route.name}
          label={route.name}
          arrowIcon={true}
          inline={true}
          className="text-white"
        >
          {route.children.map((child) => (
            <DropdownItem               
                key={child.path}
              className={pathname === child.path ? "bg-blue-500 text-white" : ""}>
              <Link href={child.path}>{child.name}</Link>
            </DropdownItem>
          ))}
        </Dropdown>
      );
    } else {
      return (
        <NavbarLink key={route.path} href={route.path}>
          {route.name}
        </NavbarLink>
      );
    }
  };

  return (
    <FlowbiteNavbar fluid={true} rounded={true} className="bg-blue-600 text-white">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          FPAK
        </span>
      </NavbarBrand>

      <NavbarCollapse>
        {routes.map(renderLink)}
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
};

export default Navbar;

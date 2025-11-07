export type Route = {
  name: string;
  path: string;
  children?: Route[]; // optional dropdown items
};

export const routes: Route[] = [
  { name: "Home", path: "/" },
  {
    name: "Rally",
    path: "#",
    children: [
      { name: "CPR", path: "/rally/cpr" },
      { name: "CP2RM", path: "/rally/cp2rm" },
      { name: "CPRMR", path: "/rally/cprmr" },
    ],
  },
];

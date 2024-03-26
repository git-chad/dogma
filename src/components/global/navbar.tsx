import React from "react";
import Image from "next/image";
import dogmaLogo from "../../../public/dogma-logo.svg";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const user = true;
  const routes = [
    { name: "Products", route: "/products" },
    { name: "Pricing", route: "/pricing" },
    { name: "Clients", route: "/clients" },
    { name: "Resources", route: "/resources" },
    { name: "Docs", route: "/docs" },
    { name: "Enterprise", route: "/enterprise" },
  ];

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-zinc-900 justify-between">
      <aside className="flex items-center gap-1 font-bold text-3xl">
        <Image
          width={30}
          height={0}
          src={dogmaLogo}
          alt="Dogma logo"
          className="shadow-sm"
        />
        <p>Dogma</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          {routes.map((route, idx) => (
            <li key={idx}>
              <Link href={route.route}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
  <Link
    href="/dashboard"
    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-[#FFA07A] focus:ring-offset-2 focus:ring-offset-[#ff4936]"
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7e70_0%,#ff4936_50%,#ff4936_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      {user ? "Dashboard" : "Get Started"}
    </span>
  </Link>
  <UserButton/>
  <MenuIcon className="md:hidden"/>
</aside>


    </header>
  );
};

export default Navbar;

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function RootNavigation() {
  return <div className="shadow flex">
    <NavItem path="/mobs">
      Mobs
    </NavItem>
    <NavItem path="/settings">
      Settings
    </NavItem>
    <NavItem path="/items">
      Items
    </NavItem>
    <NavItem path="/default_drops">
      Default Drops
    </NavItem>
  </div>
}

type NavItemProps = {
  path: string,
  children: ReactNode
};

function NavItem({ path, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);
  return <Link href={path} className={clsx(
    "p-4 transition-colors",
    isActive && "text-red-500"
  )}>{children}</Link>
}

import { links } from "@/public/links/links";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCart from "@/public/icons/ShoppingCart";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center gap-2 p-2">
      <h1 className="text-orange text-3xl">
        Taste<span className="text-white">Bites</span>
      </h1>

      <div className="flex  gap-6 text-lg text-white ">
        {links.map((link, index) => (
          <Link href={link.href} key={index} className="hover:text-orange">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <SearchBar />
        <div className="h-7 w-7 text-white cursor-pointer">
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}

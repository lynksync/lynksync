import Link from "next/link";
import Image from "next/image";
import MenuIcon from "../_assets/menu.svg";


export default function Navbar() {
    return (
    <header className="sticky top-0 backdrop-blur-sm">
        <div className="py-5">
            <div className="container">
                <div className="flex items-center px-2">
                <Link href="/bookmarks" className="text-lg font-bold px-3">LynkSync</Link>
                <Image src={MenuIcon} alt="Menu Icon" className="h-5 w-5 md:hidden"/>
                <nav className="hidden md:flex gap-6 text-black/60 items-center">
                    <Link href="/bookmarks">Bookmarks</Link>
                    <Link href="/categories">Categories</Link>
                </nav>
                </div>
            </div>
        </div>
        </header>
    );
}
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../_assets/arrow-right.svg";
import Logo from "../_assets/logosaas.png";
import MenuIcon from "../_assets/menu.svg";


export default function Navbar() {
    return (
        <header className="sticky top-0 backdrop-blur-sm">
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
            <p className="text-white/60 hidden md:block">
            Synchronise bookmarks across all your devices 
            </p>
            <div className="inline-flex gap-1 items-center">
            <p>Get Started for free</p>
            <Image src={ArrowRight} alt="arrow-right" className="h-4 w-4 justify-center items-center"/>
            </div>
        </div>
        <div className="py-5">
            <div className="container">
                <div className="flex items-center justify-between">
                <Link href="/">    
                <Image src={Logo} alt="Saas Logo" height={40} width={40}/>
                </Link>
                <Image src={MenuIcon} alt="Menu Icon" className="h-5 w-5 md:hidden"/>
                <nav className="hidden md:flex gap-6 text-black items-center">
                    <Link href="#">Pricing</Link>
                    <Link href="#">Features</Link>
                    <Link href="#">About</Link>
                    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                        <Link href="/login">Login / Sign Up
                        </Link>
                    </button>
                </nav>
                </div>
            </div>
        </div>
        </header>
    );
}
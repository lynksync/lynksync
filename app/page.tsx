import Image from "next/image";
import ArrowRight from "./_assets/arrow-right.svg";
import HeroMain from "./_assets/main.svg"

export default function Home() {
  return (
    <div>
     <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
         <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Synchronise Your Bookmarks</h1>
         <p className="text-xl text-[#010D3E] tracking-tight mt-6">
          Do you have bookmarks scattered across multiple devices and browsers?.
          Access your bookmarks from anywhere with LynkSync and categorize them for easy access.
          Create notes from your bookmarks and share them with your friends.
         </p> 
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Get Started for free</button>
          <button className="btn btn-text">
            <span>Learn More </span>
            <Image src={ArrowRight} height={20} width={20} alt="right-arrow"/>
            </button>
        </div>
        </div>
        <div className="mt-20 md:mt-0 md:flex-1 content-around">
        <Image src={HeroMain} alt="hero-main" className="md:w-[800px]"/>
        </div>
        </div>
      </div>
     </section> 
    </div>
  );
}

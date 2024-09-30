import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (  
    <div className="h-full md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center mx-auto overflow-hidden py-10 md:py-0 relative">
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="py-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500"> Master the art of music</h1>
       
        <p className="mt-4 font-normal text-base text-neutral-300 md:text-lg max-w-lg mx-auto">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
          accusamus ullam ratione, repellendus corporis quam ut quia qui aut id
          earum tenetur libero aliquam eius delectus possimus eos esse
          excepturi.
        </p>
        <div 
        className="mt-4
        ">
        <Link href={"/courses"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { Meteors } from "@/components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

          <div className="  h-full md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center mx-auto  overflow-hidden py-10 md:py-0 relative">
            <div className="relative z-10 w-full text-center">
              <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold">
                Contact Us
              </h1>
              <p className="mt-4 font-normal text-base text-neutral-300 md:text-base max-w-lg mx-auto">
                We're here to help with any questions about our courses,
                programs, or events. Reach out and let us know how we can assist
                you in your musical journey.
              </p>
              <form className="mt-4 flex flex-col justify-center items-center gap-5">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="py-2 px-3 w-[40rem] rounded bg-[#080808]"
                />
                <textarea
                  placeholder="Type your message"
                  className="relative py-2 px-3 w-[40rem] rounded bg-[#080808] h-[10rem]"
                ></textarea>
                <input type="submit" value={"Send Message"}  className="cursor-pointer bg-[#08564C] py-2 px-3 rounded"/>
                <Meteors number={20} />
              </form>
            </div>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />
        </div>
      </div>
    </div>
  );
};

export default page;

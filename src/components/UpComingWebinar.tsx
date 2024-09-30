"use client"
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";


const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const UpComingWebinar = () => {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 uppercase tracking-wide font-semibold">
            Featured Webinars
          </h2>
          <p className="mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
      </div>
      <div className="mt-10">
            <div className=" mx-auto px-8">
              <HoverEffect items={projects} />
        </div>
      </div>
      <div className="text-center mt-14">
        <Link
          href={"/courses"}
          className="px-4 py-2 bg-white text-neutral-700 hover:bg-gray-100 transition duration-200 rounded border border-neutral-600"
        >
          View All Webinars
        </Link>
      </div>
    </div>
  );
};

export default UpComingWebinar;

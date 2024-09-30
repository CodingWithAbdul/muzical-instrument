"use client";
import React from "react";
import Link from "next/link";
import coursesData from "../data/musical.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = coursesData.course.filter(
    (course: Courses) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 uppercase tracking-wide font-semibold">
            Featured Courses
          </h2>
          <p className="mt-2 text-white text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {featuredCourses.map((course: Courses) => (
            <div
              key={course.id}
              className="flex flex-col items-center justify-center mx-5 "
            >
              <BackgroundGradient className="flex flex-col justify-center items-center rounded-[22px] max-w-sm  sm:p-10 bg-white dark:bg-zinc-900 h-full text-center">
                <h1 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-400 ">
                  {course.title}
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                <div className="text-center mt-7">
                  <Link
                    href={`/course/${course.slug}`}
                    className="px-4 py-2"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          href={"/courses"}
          className="px-4 py-2 bg-white text-neutral-700 hover:bg-gray-100 transition duration-200 rounded border border-neutral-600"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;

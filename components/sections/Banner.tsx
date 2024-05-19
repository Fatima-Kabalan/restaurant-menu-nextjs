"use client";

import { greatVibes } from "@/app/fonts/fonts";
import Button from "../atoms/Button";

export default function Banner() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <section className="flex justify-evenly  relative banner-bg-img p-4">
      <div className="flex flex-col justify-center gap-4 text-white text-5xl">
        <h6 className={`text-orange text-3xl ${greatVibes.className}`}>
          Its Quick & Amusing!
        </h6>
        <h1 className="flex flex-col font-bold">
          <div>
            <span className="text-orange">The</span> Art of speed
          </div>
          <div>food Quality</div>
        </h1>
        <p className="text-base max-w-sm">
          Experience a blend of speed and quality like never before. Our dishes
          are crafted with the finest ingredients, ensuring a delightful
          culinary journey in every bite.
        </p>
        <Button title={"See Menu"} isPrimary={true} onClick={handleClick} />
      </div>

      <div className="flex justify-center items-center">
        <img src="/images/foodbanner.png" className="w-full max-w-lg" />
      </div>
    </section>
  );
}

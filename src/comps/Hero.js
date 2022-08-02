import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="grid h-full max-w-full grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-start h-full max-w-full gap-10 py-24 mx-auto">
          <h1 className="text-3xl font-bold sm:text-6xl">
            Payments infrastructure for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.{" "}
          </p>
          <div className="flex flex-col justify-start w-full h-auto gap-5 item-start md:items-center md:flex-row">
            <button className="py-2 text-black capitalize bg-white rounded-full px-7">
              start now
            </button>
            <button className="px-5 py-2 text-black capitalize">
              contact sales
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/illus2.png" alt="illustraton" className="object-cover" />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Hero;

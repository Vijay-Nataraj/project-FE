import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to Freelance Marketplace</h1>
      <h2 className="text-2xl mt-4">
        We connect people to bring projects to life
      </h2>
      <p className="mt-4 max-w-xl mx-auto">
        Find high-quality talent or open jobs with the help of AI tools that
        keep you in control.
      </p>
      <input
        type="text"
        placeholder="Search for any service"
        className="mt-4 p-2 rounded border border-gray-300"
      />
    </div>
  );
};

export default HeroSection;

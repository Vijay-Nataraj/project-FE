import React, { useEffect, useState } from "react";
import instance from "../services/instance";

const FindFreelancers = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await instance.get("/freelancers");
        setFreelancers(response.data);
      } catch (err) {
        setError("Failed to fetch freelancers. Please try again.");
      }
    };
    fetchFreelancers();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Find Freelancers</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{freelancer.name}</h2>
            <p>Skills: {freelancer.skills.join(", ")}</p>
            <p>Rating: {freelancer.rating}</p>
            <button className="bg-blue-600 text-white p-2 rounded mt-2">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindFreelancers;

import React, { useEffect, useState } from "react";
import instance from "../services/instance";

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await instance.get("/jobs");
        setJobs(response.data);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again.");
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Find Jobs</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p>Budget: {job.budget}</p>
            <p>Deadline: {job.deadline}</p>
            <button className="bg-blue-600 text-white p-2 rounded mt-2">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;

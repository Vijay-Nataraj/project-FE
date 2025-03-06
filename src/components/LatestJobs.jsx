import React from "react";

const LatestJobs = () => {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Web Developer",
      description: "Build a responsive website.",
    },
    {
      id: 2,
      title: "Graphic Designer",
      description: "Create stunning visuals.",
    },
    {
      id: 3,
      title: "SEO Expert",
      description: "Optimize website for search engines.",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Latest Jobs</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;

import React, { useEffect, useState } from "react";
import instance from "../services/instance";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    portfolio: "",
    businessDetails: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await instance.get("/profile");
        console.log("Fetched profile data:", response.data); // Debugging log
        setUser(response.data);
        setFormData({
          name: response.data.profile.name || "",
          email: response.data.email || "",
          skills: response.data.profile.skills.join(", ") || "",
          portfolio: response.data.profile.portfolio.join(", ") || "",
          businessDetails: response.data.profile.businessDetails || "",
        });
      } catch (err) {
        console.error("Error fetching profile:", err); // Debugging log
        setError("Failed to fetch profile. Please log in again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await instance.put("/profile", formData);
      setIsEditing(false);
      const response = await instance.get("/profile");
      setUser(response.data);
    } catch (err) {
      console.error("Error updating profile:", err); // Debugging log
      setError("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      {user ? (
        <div>
          <h1 className="text-2xl font-bold">{user.username}'s Profile</h1>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="mt-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Skills (comma separated)</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block mb-1">
                  Portfolio (comma separated)
                </label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Business Details</label>
                <textarea
                  name="businessDetails"
                  value={formData.businessDetails}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded mt-4"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-600 text-white p-2 rounded mt-4 ml-2"
              >
                Cancel
              </button>
            </form>
          ) : (
            <div className="mt-4">
              <p>Email: {user.email}</p>
              <p>
                Skills:{" "}
                {user.profile.skills.length > 0
                  ? user.profile.skills.join(", ")
                  : "No skills listed"}
              </p>
              <p>
                Portfolio:{" "}
                {user.profile.portfolio.length > 0
                  ? user.profile.portfolio.join(", ")
                  : "No portfolio provided"}
              </p>
              <p>
                Business Details:{" "}
                {user.profile.businessDetails || "No business details provided"}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white p-2 rounded mt-4"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

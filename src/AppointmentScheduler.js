import { useState } from "react";
import axios from "axios";

const AppointmentScheduler = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-backend-url/api/appointments", {
        title,
        date
      });
      alert("Appointment scheduled successfully!");
      setTitle("");
      setDate("");
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      alert("Failed to schedule appointment.");
    }
  };

  return (
    <div>
      <h1>Business Appointment Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;

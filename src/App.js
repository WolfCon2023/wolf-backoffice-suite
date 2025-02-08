import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppointmentScheduler from "./components/AppointmentScheduler";
import Calendar from "./components/Calendar";
import CustomerDetails from "./components/CustomerDetails";
import CustomerCRM from "./components/CustomerCRM";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<AppointmentScheduler />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/crm" element={<CustomerCRM />} />
      </Routes>
    </Router>
  );
}

export default App;

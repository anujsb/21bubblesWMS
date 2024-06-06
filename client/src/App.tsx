import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Projects from "./components/pages/Projects";
import LoginOptions from "./components/pages/login/LoginOptions";
import ManagerLogin from "./components/pages/login/ManagerLogin";
import EmployeeLogin from "./components/pages/login/EmployeeLogin";
import ManagerRegister from "./components/pages/login/ManagerRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/loginoptions"
          element={
            <div>
              <LoginOptions />
            </div>
          }
        />
        <Route
          path="/managerlogin"
          element={
            <div>
              <ManagerLogin />
            </div>
          }
        />
        <Route
          path="/employeelogin"
          element={
            <div>
              <EmployeeLogin />
            </div>
          }
        />
        <Route
          path="/managerregister"
          element={
            <div>
              <ManagerRegister />
            </div>
          }
        />
        <Route
          path="/managerlogin"
          element={
            <div>
              <LoginOptions />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <Dashboard />
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

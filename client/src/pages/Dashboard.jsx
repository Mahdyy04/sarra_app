import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import "../assets/styles/Dashboard.css";
import ScrollToTop from "../components/ScrollToTop";
export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className="dashboard">
        <Sidebar />
        <MainContent>
          <ScrollToTop/>
          <Outlet />
        </MainContent>
      </div>
    </>
  );
}

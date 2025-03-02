import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useFormState } from "react-hook-form";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const { logOut, user } = useAuth();

  const handleLogout = () => {
    logOut().then(() => console.log("logged out successfully "));
  };

  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row">
      <Helmet>
        <title>Heartsync | Dashboard</title>
      </Helmet>
      <div className="lg:w-64 min-h-screen bg-purple-300 flex flex-col gap-6 p-4 font-semibold text-gray-700">
        {isAdmin ? (
          <>
            <h2 className="font-bold text-xl px-4">Admin Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <NavLink
                  to="/dashboard/adminDashboard"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Admin Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appPremium"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Approved Premium
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appContactReq"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Approved Contact Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/successStory"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Success Story
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h2 className="font-bold text-xl px-4">User Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <NavLink
                  to="/dashboard/editBiodata"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Edit Biodata
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/viewBiodata"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  View Biodata
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/contactRequest"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  My Contact Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/favoriteBiodata"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  My Favorite Biodata
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/dashboard/gotMarried"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      backgroundColor: isActive ? "#a9106b" : "",
                      textDecorationColor: isActive ? "#a9106b" : "none",
                      color: isActive ? "White" : "#374177",
                      padding: "4px 8px",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  Got Married{" "}
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <button onClick={handleLogout} className="bg-[#a9106b] text-white p-2">
          Logout
        </button>
        <hr />
        <ul className="flex flex-col gap-6 px-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

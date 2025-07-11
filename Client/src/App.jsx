import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import CreateCampaign from "./Pages/CreateCampaign";
import { Toaster } from "sonner";
import CampaignDetail from "./Pages/Campaign-detail";

function App() {
  return (
    <div className="realtive sm:-8 p-4 flex flex-row min-h-screen bg-[#13131a] ">
      <Toaster />
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="create-campaign" element={<CreateCampaign />} />
          <Route path="campaign-details/:id" element={<CampaignDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

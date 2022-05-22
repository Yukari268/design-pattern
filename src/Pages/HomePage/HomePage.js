import React from "react";
import RecentSection from "./Components/RecentSection";
import AllProjectSection from "./Components/AllProjectSection";
import MembersSection from "./Components/MembersSection";
import WelcomePage from "./Components/WelcomePage";
import "./HomePage.css"
const HomePage = () => {
  return <div className="home-page">
    <WelcomePage></WelcomePage>
    <RecentSection></RecentSection>
    <AllProjectSection></AllProjectSection>
    <MembersSection></MembersSection>
  </div>;
};

export default HomePage;

import React from "react";
import Title from "./Components/Title";
import RecentSection from "./Components/RecentSection";
import AllProjectSection from "./Components/AllProjectSection";
import MembersSection from "./Components/MembersSection";
import "./HomePage.css"
const HomePage = () => {
  return <div className="home-page">
    <Title></Title>
    <RecentSection></RecentSection>
    <AllProjectSection></AllProjectSection>
    <MembersSection></MembersSection>
  </div>;
};

export default HomePage;

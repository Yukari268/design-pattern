import React from "react";
import "./MembersSection.css";
import Section from "../../../Ulitities/Components/Section/Section";
import Member from "../../../Ulitities/Components/Member/Member";

const MembersSection = () => {
  return (
    <Section>
      <h2>THÀNH VIÊN TRONG NHÓM</h2>
      <div className="members">
        <Member
          link=""
          avatar_link="tin.png"
          name="Nguyen Trong Tin"
          fb_link=""
          github_link=""
        ></Member>
        <Member
          link=""
          avatar_link="hoang.png"
          name="Nguyen Mai Hoang"
          fb_link=""
          github_link=""
        ></Member>
      </div>
    </Section>
  );
};

export default MembersSection;

import React from "react";
import { GET_IMAGES } from "../helpers/getImage";
import Skills from "./Skills";

const Job = ({
  id,
  company,
  featured,
  newJob,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  setFilter,
}) => {
  const skills = [role, level, languages, tools];
  return (
    <>
      <div className="headerCard">
        <img src={GET_IMAGES[company]} alt={`${company}-logo`} />
        <div className="top">
          <h1>{company}</h1>
          <div className="tag">
            {newJob && <span>NEW!</span>}
            {featured && <span>FEATURED</span>}
          </div>
        </div>
        <div className="position">
          <h2>{position}</h2>
        </div>
        <div className="details">
          <p>
            {postedAt} <span className="dote"></span> {contract}
            <span className="dote"></span> {location}
          </p>
        </div>
      </div>
      <hr />
      {skills.map((el, key) => (
        <Skills key={key} el={el} setFilter={setFilter} />
      ))}
    </>
  );
};

export default Job;

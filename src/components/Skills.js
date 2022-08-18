import React from "react";

const Skills = ({ el, setFilter }) => {
  return (
    <>
      {typeof el === "object" ? (
        el.map((la) => (
          <span
            key={crypto.randomUUID()}
            onClick={() => setFilter(la)}
            className="skills"
          >
            {la}
          </span>
        ))
      ) : (
        <span className="skills" onClick={() => setFilter(el)}>
          {el}
        </span>
      )}
    </>
  );
};

export default Skills;

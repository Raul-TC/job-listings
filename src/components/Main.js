import React, { useEffect, useState } from "react";
import Job from "./Job";

const Main = () => {
  const [db, setDb] = useState([]);
  const [db02, setD02] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [skillsFilter, setSkillsFilter] = useState("");
  useEffect(() => {
    fetch("./db/data.json")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setDb(data);
        setD02(data);
      })
      .catch((err) => console.info(err));
  }, []);

  const setFilter = (el) => {
    if (skillsFilter.includes(el)) {
      console.info("ya se encuentra en el filtro");
      return;
    }
    setIsTrue(true);
    setSkillsFilter([...skillsFilter, el]);
  };

  const handleState = (e) => {
    setIsTrue(false);
    setSkillsFilter("");
    setDb(db02);
  };
  useEffect(() => {
    let languages = [];
    let tools = [];
    const flt = () => {
      const b = db.filter((el) => skillsFilter.includes(el.level));
      setDb(b);
    };

    isTrue && flt();
  }, [isTrue]);
  return (
    <>
      <div>Main</div>
      {skillsFilter !== "" &&
        skillsFilter.map((el) => <span key={el}>{el}</span>)}
      <p onClick={() => handleState()}>CLEAR</p>

      {db.length !== 0 ? (
        db.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            company={job.company}
            newJob={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            setFilter={setFilter}
          />
        ))
      ) : (
        <p>Data not Found...</p>
      )}
    </>
  );
};

export default Main;

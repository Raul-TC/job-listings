import React, { useEffect, useState } from "react";
import Job from "./Job";

const JobMain = () => {
  const [db, setDb] = useState([]);

  const [skillsFilter, setSkillsFilter] = useState([]);

  useEffect(() => {
    fetch("./db/data.json")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setDb(data);
      })
      .catch((err) => console.err(err));
  }, []);

  const filterByTags = ({ role, level, tools, languages }) => {
    const skills = [role, level, ...languages, ...tools];

    if (skillsFilter.length === 0) return true;

    return skillsFilter.every((filter) => skills.includes(filter));
  };

  const filteredJobs = db.filter(filterByTags);

  const handleSetFilter = (el) => {
    if (skillsFilter.includes(el)) {
      return;
    }
    setSkillsFilter([...skillsFilter, el]);
  };

  const handleState = () => {
    setSkillsFilter([]);
  };

  const handleFilterClick = (e) => {
    setSkillsFilter(skillsFilter.filter((filt) => filt !== e));
  };
  return (
    <>
      <header className="bg-teal-500 mb-12">
        <img
          src="/images/bg-header-desktop.svg"
          alt="bg-img-header"
          className="isDesktop"
        />
        <img
          src="/images/bg-header-mobile.svg"
          alt="bg-img-header"
          className="isMobile"
        />
      </header>
      <main className="container m-auto ">
        <div
          className={
            skillsFilter.length > 0
              ? "flex items-center justify-between -mt-20 z-10 relative  bg-white shadow-md my-16 mx-6  p-6 rounded "
              : ""
          }
        >
          <div className="flex justify-between items-center cursor-pointer mb-0 sm:mb-0 rounded flex-wrap ">
            <div className="flex flex-row items-center mr-4  gap-y-8 flex-wrap">
              {skillsFilter.length > 0 && (
                <>
                  {skillsFilter.map((el) => (
                    <div key={crypto.randomUUID()} className="mr-4">
                      <span
                        key={crypto.randomUUID()}
                        className="colorCyanText backgroundCyan font-bold p-2 pl-2  sm:mb-0 rounded-l-lg "
                      >
                        {el}
                      </span>
                      <span
                        key={crypto.randomUUID()}
                        onClick={() => handleFilterClick(el)}
                        className="colorCyan text-teal-100 p-2 lg:mb-0 xHover rounded-r-lg"
                      >
                        x
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="ml-auto">
            {skillsFilter.length !== 0 && (
              <p
                className="cursor-pointer colorCyanText hover:underline"
                onClick={() => handleState()}
              >
                CLEAR
              </p>
            )}
          </div>
        </div>
        {db.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <Job
              key={job.id}
              company={job.company}
              newJob={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              logo={job.logo}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
              handleSetFilter={handleSetFilter}
            />
          ))
        )}
      </main>
    </>
  );
};

export default JobMain;

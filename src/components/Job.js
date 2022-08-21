import React from "react";

const Job = ({
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
  logo,
  handleSetFilter,
}) => {
  const skills = [role, level, ...languages, ...tools];

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-6 p-2 rounded ${
        featured && "border-l-4 borderCyan border-solid"
      } lg:flex-row lg:my-6`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20  lg:h-24 lg:w-24 lg:my-0"
          src={logo}
          alt={`${company}-logo`}
        />
      </div>
      <div className=" flex flex-col justify-between ml-4">
        <div className="flex items-center">
          <h3 className="sm:text-m colorCyanText mr-2 ">{company}</h3>
          {newJob && (
            <span className="colorCyan text-white font-bold mr-2 pt-1 px-2 rounded-full sm:text-sm">
              NEW!
            </span>
          )}
          {featured && (
            <span className="backgroundFeatured text-white font-bold mr-2 pt-1 px-2 rounded-full sm:text-sm">
              FEATURED
            </span>
          )}
        </div>
        <h4 className=" colorText font-bold text-xl my-2  cursor-pointer companyHover">
          {position}
        </h4>
        <p className="text-gray-400 font-bold">
          {postedAt} · {contract} · {location}
        </p>
      </div>

      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-400   lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {skills &&
          skills.map((skill) => (
            <span
              onClick={() => handleSetFilter(skill)}
              key={crypto.randomUUID()}
              className="cursor-pointer textCyan backgroundCyan font-bold mr-4 mb-4  rounded lg:mb-0 hoverSkill"
            >
              {skill}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Job;

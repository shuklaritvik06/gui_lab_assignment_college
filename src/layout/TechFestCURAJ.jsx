import React from "react";

const TechFestCURAJ = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto w-full md:mt-20 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-md">
        <div className="h-full bg-primary p-5 flex flex-col">
          <div>
            <img
              src="/CURAJ.png"
              alt=""
              className="w-3/4 h-3/4 md:w-4/5 md:h-4/5"
            />
          </div>
          <div className="mt-5">
            <img src="/Hackathon.png" alt="" />
          </div>
          <div className="bg-secondary p-3 space-y-3 mt-auto">
            <div className="text-xl font-bold">Terms and Rules</div>
            <ul className="list-disc px-5 text-base">
              <li>Participants must adhere to a strict code of ethics</li>
              <li>Team Collaboration</li>
              <li>There will be a team prize of $30000</li>
            </ul>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TechFestCURAJ;

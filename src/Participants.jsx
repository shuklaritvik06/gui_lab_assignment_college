import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/participants").then((res) => {
      setParticipants(res.data);
    });
  }, []);
  return (
    <div className="h-full w-full bg-white p-8 flex flex-col">
      <div className="text-3xl font-bold">
        CodeCraze: TechFusion | Participants
      </div>
      {participants.length > 0 ? (
        <div className="overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
            {participants.map((element) => {
              return (
                <div className="bg-secondary p-5 rounded-md">
                  <div className="flex space-x-2">
                    <div>{element.firstName}</div>
                    <div>{element.lastName}</div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div>{element.instituteName}</div>
                    <div>{element.rollNumber}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-10">No Participants Yet!</div>
      )}
      <Link
        to="/"
        className="bg-primary p-2 mt-auto rounded-md text-center text-white font-semibold cursor-pointer"
      >
        Register Now!
      </Link>
    </div>
  );
};

export default Participants;

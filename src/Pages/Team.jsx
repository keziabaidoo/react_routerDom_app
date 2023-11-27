import React from "react";
import { useEffect, useState } from "react";

function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
        
      const response =  await fetch(

        "https://jsonplaceholder.typicode.com/users"
      );

      setTeam(await response.json());
    };

    fetchTeamData();
  }, []);

  return (
    <>
      {team.map((member) => (
        <ul
          key={member.id}
           style={{
            listStyle: "none",
            backgroundColor: "#151515",
            marginBottom: "1rem",
            padding: " 1.5rem",
            borderRadius: "0.5rem",
            color: "grey",
          }}
        >
          <li>Full Name: {member.name}</li>
          <li>Email: {member.email}</li>
          <li>Address: {member.address.city}</li>
        </ul>
      ))}
    </>
  
  );

}

export default Team



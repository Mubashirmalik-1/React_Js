import React from "react";
import BioCard from "./components/BioCard";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <div className="container">
      {users.map((user, index) => (
        <div key={index}>
          <BioCard
            userName={`${user.name.first} ${user.name.last}`}
            picture={user.picture.large}
            bio={`${user.location.city}, ${user.location.country}`}
          />
        </div>
      ))}
    </div>
  );
};

export default App;

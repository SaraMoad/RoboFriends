import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./searchbox";
import Scroll from "./scroll";
import "./index.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1S"> RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;

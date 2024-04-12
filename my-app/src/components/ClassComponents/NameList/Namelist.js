import React from "react";

function Namelist() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 22,
      skill: "React"
    },
    {
      id: 2,
      name: "Wanda",
      age: 21,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Gray",
      age: 23,
      skill: "Vue"
    }
  ];
  const personList = persons.map((person) => (
    <h2>
      I am {person.name}. I am {person.age}. I know {person.skill}.
    </h2>
  ));
  return <div>{personList}</div>;
}

export default Namelist;

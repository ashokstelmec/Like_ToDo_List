import "./App.css";
import React, { useState } from "react";

function App() {
  const myArray = [
    { id: "0", name: "Sujal", age: "27" },
    { id: "1", name: "Aniket", age: "17" },
    { id: "2", name: "Ashok", age: "26" },
  ];

  const [code, setCode] = useState(myArray);

  const handleClick = (e) => {
    setCode([]);
  };

  const handleChange = (id) => {
    // alert(id);
    const myNewArray = code.filter((element) => {
      return element.id !== id;
    })

    setCode(myNewArray);
  };

  return (
    <div className="App">
      {code.map((item) => {
        return (
          <h1 key={item.id}>
            Name: {item.name} & Age: {item.age}
            <button className="btn" onClick={ () => handleChange(item.id)}>
              Remove
            </button>
          </h1>
        );
      })}
      <button onClick={handleClick}> Click me</button>
    </div>
  );
}

export default App;

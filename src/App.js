// Function with two parameters 
// First paramater is a function you want to run
//Second par


import React, {useState, useEffect} from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);
  setTimeout(() => setCount(count + 1), 50);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );

};

// export default counter;

function App() {
        {/* <p> Edit ("twitter page") with the formal names.  */}
  let [firstName, setFirstName] = useState("");
  let [bio, setBio] = useState("");
  let [people, setPeople] = useState([]);


  let [textInput, setTextInput] = useState("");
  return (
    <header>
    <div style={{ textAlign: 'center' }}>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
          <input value={bio} onChange={e => setBio(e.target.value)} />
          <button
          
          
            onClick={() =>
              setPeople([...people, { firstName: firstName, bio: bio }])
            }
          >
            Add Person to Array
          </button>
          <div>
            <p>List of People: </p>
            {people.map(person => (
              <div>
                {person.firstName}, {person.bio}
              </div>
            ))}
          </div>
        </div>
        {/* </p> */}
        </header>
      );
    }
    
    export default App;

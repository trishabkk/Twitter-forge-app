import React, {useState} from 'react';

function App() {
      <header>
        <p> Edit ("twitter page") with the formal names. 
  let [firstName, setFirstName] = useState("");
  let [bio, setBio] = useState("");
  let [people, setPeople] = useState([]);


  let [textInput, setTextInput] = useState("");
  return (
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
        </p>
        </header>
      );
    }
    
    export default App;

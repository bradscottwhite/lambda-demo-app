/**
 * ...
 */

import { useState } from 'react';

import axios from 'axios';

const url = 'https://pbaesib7i1.execute-api.us-east-1.amazonaws.com/prod/hello'; // ***URL_FROM_LAST_TUTORIAL***

const App = () => {
  const [ name, setName ] = useState('');
  const [ greeting, setGreeting ] = useState('');

  const fetchGreeting = () => {
    axios.post(url, { name })
      .then(res => {
        const { data } = res;
        setGreeting(data.msg);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="bg-red-500">
      <header>
        <input
          value={name}
          placeholder='Enter name here'
          onChange={e => setName(e.currentTarget.value)}
        />
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <h2>{greeting}</h2>
      </header>
    </div>
  );
};

export default App;

/**
 * App to test out API for tutorial on my blog
 * @author Brad White
 * @date 1/13/23
 */

import { useState } from 'react';

import axios from 'axios';

const url = 'https://pbaesib7i1.execute-api.us-east-1.amazonaws.com/prod/hello'; // ***URL_FROM_LAST_TUTORIAL***

const App = () => {
  const [ name, setName ] = useState('');
  const [ greetings, setGreetings ] = useState([]);

  const fetchGreeting = () => {
    axios.post(url, { name })
      .then(res => {
        const { data } = res;
        setGreetings([ ...greetings, data.msg ]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="bg-slate-200 grid h-screen place-items-center overflow-x-hidden">
      <div className='bg-slate-400 px-16 py-10 mx-16 my-10 rounded-lg shadow-lg'>
        <h1 className='text-slate-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-2xl font-bold px-2 py-4'>Testing Lambda Rest API</h1>
        <input
          className='rounded-lg px-4 py-1 mx-4 my-2 text-slate-500 shadow-md shadow-slate-500'
          value={name}
          placeholder='Enter name here'
          onChange={e => setName(e.currentTarget.value)}
        />
        <button
          className='bg-green-600 hover:bg-green-700 px-4 py-2 mx-2 py-1 text-gray-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition ease-in-out delay-100 duration-150 hover:scale-110 rounded-lg shadow-md shadow-slate-500'
          onClick={fetchGreeting}
        >Fetch Greeting</button>
       
        {greetings[0] && <h2 className='text-slate-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl px-2 py-4'>API Outputs:</h2>}
        <div>
          {greetings.map(msg => (
            <div className='bg-green-600 opacity-75 rounded-lg px-6 py-4 mx-4 my-3 shadow-md shadow-slate-500'>
              <h3 className='text-gray-200 text-lg text-center'>{msg}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

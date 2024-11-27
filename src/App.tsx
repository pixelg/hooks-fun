import React, { useState } from 'react';

function MyName(){
  const [name, setName] = useState('Brent');

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>){
    setName(evt.target.value);
  }

  return (
    <div>
      <h1>My name is: {name}</h1>
      {/*<input type={"text"} value={name} onChange={e => setName(e.target.value)} />*/}
      <input type={"text"} value={name} onChange={handleChange} />
    </div>
  );
}

export default MyName;
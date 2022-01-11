import React, { useState,useEffect } from 'react';
import {RolesWebAPI} from './WebAPIs/RolesWebAPI';

function App() {
  const [value,setValue] = useState<string> ('');
  useEffect(()=>{
    FetchData()
  },[])

  return <div>{value}</div>;

  async function FetchData()
  {
    const roles = await RolesWebAPI.Get();
    setValue(JSON.stringify(roles))
  }
}

export default App;

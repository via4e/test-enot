import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { ListContext } from '../App';

export default function Control() {
  const appContext = useContext(ListContext)
  const addHandler = () => { 
    appContext?.list.push('new task ' + Math.random(3)+1) 
    console.log(appContext)
  }
  return (
    <div>
      <Button variant="contained" onClick={ addHandler }>Add</Button>
    </div>
  );
}
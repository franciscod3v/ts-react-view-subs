import './App.css'
import { useEffect, useState } from 'react';
import { List } from './components/List';
import { Form } from './components/Form';
import { Sub } from './types';

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

const INITIAL_STATE = [{
  nick: 'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'Dapelu es un moderador'
},
{
  nick: 'Vicente',
  subMonths: 2,
  avatar: 'https://i.pravatar.cc/150?u=fr',
  description: undefined
}]

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </>
  )
}

export default App

import './App.css'
import { useEffect, useState } from 'react';

interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
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

  const [subs, setSubs] = useState<Array<Sub>>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  });

  return (
    <>
      <h1>Subs</h1>
      <ul>
        {
          subs.map(
              sub => {
                return(
                  <li key={sub.nick}>
                    <img src={sub.avatar} alt={`Avatar de ${sub.nick}`} />
                    <h4>{sub.nick} {sub.subMonths}</h4>
                    <p>{sub.description?.substring(0,100)}</p>
                  </li>  
                )
              }
            )
        }
      </ul>
    </>
  )
}

export default App

import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}

export const List = ({subs}: Props) => {
  return (
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
  )
}

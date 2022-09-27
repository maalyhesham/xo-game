import { useState } from 'react';
import './App.css';

const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialValue = ["", "", "", "", "", "", "", "", ""];

  function TicTac() {
    
    const [state, setState] = useState([
      ['', '', ''],
      ['','',''],
      ['', '', ''],
 ]);

   const [player,setPlayer]=useState('x')

   const handleClick = (rowIndex,cellIndex) => {
    
      let cloneBoard = [...state];
      cloneBoard[rowIndex][cellIndex]=player
      setState(cloneBoard) 
      setPlayer((prev)=> prev==='x' ? "o":"x")

    }
    const CellData = ({ num }) => {
      return <td onClick={() => handleClick(num)}>{state[num]}</td>;
    };
    return (

      <div className='container'>
        <table>
          Game :{player}
          <tbody>
            {state.map((row,rowIndex)=>(
              <tr>
                {row.map((cell,cellIndex)=>(
                  <td onClick={()=>handleClick(rowIndex,cellIndex)}>{cell}</td>
                ))}
              </tr>
            ) )}
          </tbody>
        </table>
      </div>
    );
  };

  export default TicTac;

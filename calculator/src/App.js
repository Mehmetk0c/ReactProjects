import './App.css';
import { useState } from 'react';

function App() {
  
  const [data,setData]=useState({
    result:"",
    expression:""
  });

  const butons=[];
  [7,8,9,4,5,6,1,2,3,".",0,"00"].forEach(item=>{
    butons.push(
      <button onClick={(event) =>{
        setData({expression:data.expression+event.target.value})
        
      }}
      value={item
 
      }
      key={item}
      >{item}</button>
      
    )
  })
  return (
    <div className="wrapper">
      <div className="show-input">{data.expression}
      <hr></hr>
      <div className='result'>{data.result}</div>
      </div>
      <div className='digits flex'>{butons}</div>
        <div className='modifiers subgrid'>
        
          <button onClick={()=>setData({expression:data.expression.substring(0,data.expression.length-1)})}>Sil</button>
          <button onClick={()=>setData({expression:""})}>AC</button>
          <button onClick={()=>setData({expression:data.expression+"%"})}>mod</button>

        </div>

        <div className='operations subgrid'>
          <button onClick={event=>setData({expression:data.expression+event.target.value})} value="+">+</button>
          <button onClick={event=>setData({expression:data.expression+event.target.value})} value="-">-</button>
          <button onClick={event=>setData({expression:data.expression+event.target.value})} value="*">*</button>
          <button onClick={event=>setData({expression:data.expression+event.target.value})} value="/">/</button>
          <button onClick={event=>{
          try {
            setData(
              {result:"= "+(String(eval(data.expression)).length>3 && String(eval(data.expression)).includes(".") ? String(eval(data.expression).toFixed(4)):String(eval(data.expression))),expression:data.expression}
            )
            
          } 
          catch (error) {
            
          }
        }
        }>=</button>
        </div>
         

      

    </div>
  );
}




export default App;

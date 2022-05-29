import React, { useEffect, useState } from "react";

const Timer = (props) => {
  let [timer, setTimer] = useState(props.start);

  useEffect(() => {
    const id = setInterval(() => {
        if(timer>=props.end) {
            clearInterval(id);
          }
          else{
            setTimer(timer + 1);
          }
     return()=>{
         clearInterval(id)
         
     }
    }, 1000);

   
  }, [timer]);
  return <div>Count down:{timer}</div>;
};

export default Timer;

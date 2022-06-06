import React from "react";

const Card = () => {

    const [countAge , setCountAge] = React.useState(21);
    const [status , setStatus] = React.useState(true);
   

    const increaseAge = () => {
        if(countAge == 100){
           return;
        }
        setCountAge(countAge + 1);
   }

   const decreaseAge = () => {
       if(countAge == 1){
            return;
       }
    setCountAge(countAge - 1);
  }

    return (
         <div className = "Card">
               <img src = "profile.png"></img>
                <h2>Name : Md Tabish</h2>
                <h2>Age : {countAge}</h2>
                <button onClick = {increaseAge}>INCREASE AGE</button>
                <button onClick = {decreaseAge}>DECREASE AGE</button>
                 { 
                    (status)? 
                    (<button onClick = {() => setStatus(false)} className = "Details">SHOW MORE DETAILS</button>):

                    (<>
                      <button onClick = {() => setStatus(true)} className = "Details">HIDE MORE DETAILS</button>
                         <h2>Location : Patna</h2>
                         <h2>Organisation : Masai school</h2>
                    </>)
                 }

         </div>
    )
}

export default Card
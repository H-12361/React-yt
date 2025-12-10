import React, { Fragment } from "react";

function Hero(props) {
    //here recive the the props props are used to send the properties  
    console.log(props.user );
  return (
    <Fragment>
        
         <div className="parent">
            <div className="child">
                <img src={props.img} alt="img" />
                <h1>{props.user}</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores!</p>
                <button> Submit</button>
            </div>
        </div>
        

      


    </Fragment>
     

  );
}

export default Hero;

import React from "react";

const App = () => {
    function 
      demo(val)
      {console.log(val)

      }
  return (
    <>
    
      <div>
        <input
          type="text"
          onChange={function (element) {
            console.log(element.target.value);
          }}
          placeholder="enter text"
        />
      </div>
    </>
  );
};

export default App;

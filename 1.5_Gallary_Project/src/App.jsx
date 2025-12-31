import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // here we used usestate to set data in your document
  const [userdetial, setUserDetial] = useState([]);
  const [prev, setPrev] = useState(1);

  const getdetial = async () => {
    const response = await axios.get(
     `https://picsum.photos/v2/list?page=${prev}&limit=12`

    );
    console.log(response.data);
    setUserDetial(response.data);
  };
  useEffect(function () {
    getdetial();
  }, [prev]);

  let printuserData = (
    <h3 className="px-2 py-2 text-xl  text-amber-700 absolute ">Loading....</h3>
  );
  if (userdetial.length > 0) {
    printuserData = userdetial.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url}>
            <div className="h-40 w-40 bg-white rounded-2xl overflow-hidden">
              <img
                className="h-full object-cover w-auto"
                src={elem.download_url}
                alt="images"
              />
            </div>
            <h2 className="text-lg font-bold">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="m-10   p-10 gap-10 flex  flex-wrap w-auto  ">
       
        {printuserData}
      </div>
      <div className=" flex justify-center  gap-4  pb-5 ">
        <button
          onClick={() => {
            if(prev > 1) {
              setPrev(prev- 1);
            }
          }}
          className="bg-amber-500  w-13   text-black  rounded-md"
        >
          Prev
        </button>

      <h4>Page  {prev}</h4>

        <button
          onClick={() => {
            setPrev(prev + 1);
          }}
          className="bg-amber-500 w-13  text-black rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

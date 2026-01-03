import React from "react";
import { Link } from "react-router-dom";
import { MoveLeft, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //here we use navigation one page to another page using react router dom 
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex px-5 py-6 bg-cyan-900 justify-between text-white">
        <div>
          <h2 className="text-xl">Harshit </h2>
        </div>

        <div className="flex gap-20 text-2xl">
          <button
            className="flex gap-2 py-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            <MoveLeft />
          </button>

          <button
            className="flex gap-2 py-2"
            onClick={() => {
              navigate(+1);
            }}
          >
            <MoveRight />
          </button>

          <Link to="/Home">Home</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

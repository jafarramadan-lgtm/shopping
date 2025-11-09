import React from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./nav.css";
import { Link } from "react-router-dom";
export default function Nav({ M, setM }) {
  let a = ">";
  const handlckick = () => {
    {
      if (M != 2) {
        setM(2);
      } else if (M === 2) {
        setM(1);
      }
    }
  };

  const sh = () => {
    {
      if (M != 3) {
        setM(3);
      } else if (M === 3) {
        setM(1);
      }
    }
  };
  let s = "Search Now ............";
  return (
    <div className="nav">
      <h1> shop market</h1>
      <p>shop {a}</p>
      <p>on sale {a}</p>
      <p>now arrivers {a}</p>
      <p>brands {a}</p>

      <div className="searchfiv">
        {" "}
        <input className="input1" type="search" placeholder={s}></input>
        <FaSearch className="isearch"></FaSearch>
      </div>

      <Link to="./shop">
        <div style={{ cursor: "pointer" }} onClick={sh}>
          <FaShoppingCart size={24} color="gray" className="a"></FaShoppingCart>
        </div>
      </Link>
      <Link to="./shop">
        <div className="a" onClick={handlckick} setM={setM}>
          {" "}
          <FaUser size={24} color="gray"></FaUser>
        </div>
      </Link>
    </div>
  );
}

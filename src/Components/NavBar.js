import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { HiUserCircle, HiSearch } from "react-icons/hi";
import { useData } from "../Context/DataProvider";
export function NavBar() {
  const { dispatch } = useData();
  const [itemToSearch, setItemToSearch] = useState("");
  function searchItems() {
    dispatch({ type: "SEARCH_ITEM", payload: itemToSearch });
    setItemToSearch("");
  }
  return (
    <nav>
      <div className=" flex-row flex-gap">
        <Link className="nav-header link-btn" to="/">
          <img alt="logo" className="logo" src={logo} />
          <span className="logo-text padding-left medium-text">PetHub</span>
        </Link>
        <div className="flex-row flex-grow-one">
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search"
              value={itemToSearch}
              onChange={(event) => setItemToSearch(event.target.value)}
              className="width-full"
            ></input>
          </div>

          <Link className="link-btn" to="/" onClick={() => searchItems()}>
            <button className="search-btn simple-btn">
              <HiSearch size="1rem" />
            </button>
          </Link>
        </div>
        <Link className="link-btn" to="/">
          <HiUserCircle color="black" size="2rem" />
        </Link>
      </div>
      <div className="flex-row ">
        <div className="mobile-search-bar">
          <input
            type="search"
            placeholder="Search"
            value={itemToSearch}
            onChange={(event) => setItemToSearch(event.target.value)}
            className="width-full"
          ></input>
        </div>
        <Link className="link-btn" to="/" onClick={() => searchItems()}>
          <button className="mobile-search-btn simple-btn">
            <HiSearch />
          </button>
        </Link>
      </div>
    </nav>
  );
}

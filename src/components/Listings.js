import React from "react";
import listingsData from "../data/listingsData";
import { useState } from "react";
import RealEstateItems from "./RealEstateItems";

function Listings({onSearchFilter, listingsData}) {
  const [search, setSearch] = useState('');


  const handleSearchChange = (event) => {
    const {value} = event.target;
    setSearch(value);
    onSearchFilter(value);
  }
  return (
    <section id="listings" className="listings">
      <section className="search-area">
        <input type="text" name="search" id="search" onChange={handleSearchChange} value={search} placeholder="Search here" ></input>
      </section>
      <section className="sortby-area">
        <div className="results">390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fa-solid fa-list"></i>
            <i className="fa-solid fa-grip"></i>
          </div>
        </div>
      </section>
      <section className="listings-results">
        {listingsData.map((item) => (
          <RealEstateItems item={item} key={item}/>
        ))}
      </section>
      <section className="pagination">
        <ul className="pages">
          <div className="selected">
            <li>Prev</li>
          </div>
          <div className="active">
            <li>1</li>
          </div>
          <div className="selected">
            <li>2</li>
          </div>
          <div className="selected">
            <li>3</li>
          </div>
          <div className="selected">
            <li>4</li>
          </div>
          <div className="selected">
            <li>5</li>
          </div>
          <div className="selected">
            <li>Next</li>
          </div>
        </ul>
      </section>
    </section>
  );
}

export default Listings;

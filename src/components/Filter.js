import React from "react";
import { useState } from "react";
import listingsData from "../data/listingsData";

export function Filter({ citys, manyRooms }) {
  const [locations, setLocations] = useState(listingsData);
  console.log(citys);

  return (
    <section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="neighbourhood" className="filters neighbourhood">
          {citys.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
        <select name="housetype" className="filters housetype">
          <option>Ranch</option>
        </select>
        <select name="bedrooms" className=" filters neighbourhood">
          {manyRooms.map((rooms) => (
            <option value={rooms} key={rooms}>
              {rooms} BR
            </option>
          ))}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price"></input>
          <input type="text" name="max-price" className="max-price"></input>
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input
            type="text"
            name="min-floor-space"
            className="min-floor-space"
          ></input>
          <input
            type="text"
            name="max-floor-space"
            className="max-floor-space"
          ></input>
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input name="extras" value="elavator" type="checkbox"></input>
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox"></input>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input
              name="extras"
              value="finished basement"
              type="checkbox"
            ></input>
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input name="extras" value="gym" type="checkbox"></input>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Filter;

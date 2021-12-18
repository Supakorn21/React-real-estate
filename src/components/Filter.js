import React from "react";


function Filter() {
  return (
    <section id="filter">
        <div className="inside">
        <h4>Filter</h4>
        <select name="neighbourhood" className="filters neighbourhood">
            <option>Ridgewood</option>
        </select>
        <select name="housetype" className="filters housetype">
            <option>Ranch</option>
        </select>
        <select name="bedrooms" className=" filters neighbourhood">
            <option>2 BR</option>
        </select>
        <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price"></input>
            <input type="text" name="max-price" className="max-price"></input>
            
        </div>
        <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min-floor-space" className="min-floor-space"></input>
            <input type="text" name="max-floor-space" className="max-floor-space"></input>
            
        </div>
        <div className="filters extras">
            <span className="title">Extras</span>
            <label  htmlfor="extras">
                <span>Elevators</span>
                <input  name="extras" value="elavator" type="checkbox"></input>
            </label>
            <label  htmlfor="extras">
                <span>Swimming Pool</span>
                <input  name="extras" value="swimming-pool" type="checkbox"></input>
            </label>
            <label  htmlfor="extras">
                <span>Finished Basement</span>
                <input  name="extras" value="finished basement" type="checkbox"></input>
            </label>
            <label  htmlfor="extras">
                <span>Gym</span>
                <input  name="extras" value="gym" type="checkbox"></input>
            </label>
        </div>
        </div>
    </section>
  );
}

export default Filter;

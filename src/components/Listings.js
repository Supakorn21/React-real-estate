import React from "react";
import listingsData from "../data/listingsData";

function Listings() {
  return (
    <section id="listings" className="listings">
      <section className="search-area">
        <input type="text" name="search"></input>
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
        {listingsData.map((data, index) => {
          return (
            <div className="listing" key={index} >
              <div className="listing-img" style={{background: `url("${data.image}") no-repeat center center `}}>
                <span className="address">{data.address}</span>
                <div className="details">
                  <div className="user-info">
                    <div className="user-img"></div>
                    <div className="user-details">
                      <span className="user-name">
                        Nina Smith <br></br>
                        <span className="post-date">Posted on 08/05/2021</span>
                      </span>
                    </div>
                  </div>

                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa-solid fa-square"></i>
                      <span>
                        1000 ft<sup>2</sup>
                      </span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa-solid fa-bed"></i>
                      <span>{data.rooms} bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price-month">${data.price}/ month (ex.)</span>
                <br></br>
                <span className="location-bottom">
                  <i className="fa-solid fa-location-dot"></i> {data.city}, {data.state}
                </span>
              </div>
            </div>
          );
        })}
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

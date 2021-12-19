import React from "react";

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
      <section className="listings-result">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Address</span>
            <div className="details">
              <div className="user-img"></div>
              <div className="user-details">
                <span className="user-name">Nina Smith</span>
                <span className="post-date">08/05/2021</span>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="fa-solid fa-square"></i>
                  <span>1000 ft&sup2</span>
                </div>
                <div className="bedrooms">
                  <i className="fa-solid fa-bed"></i>
                  <span>3 bedrooms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span>$100 / month</span>
            <span>
              <i className="fa-solid fa-location-dot"></i> Ridgewood NY
            </span>
          </div>
        </div>
      </section>
      <section className="pagination">
        <ul className="pagination-nums">
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
    </section>
  );
}

export default Listings;

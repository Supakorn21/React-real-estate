
const   RealEstateItems = ({item}) => {
    return (
        <div className="listing"  >
              <div className="listing-img" style={{background: `url("${item?.image}") no-repeat center center `}}>
                <span className="address">{item?.address}</span>
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
                      <span>{item?.room} bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price-month">${item?.price}/ month (ex.)</span>
                <br></br>
                <span className="location-bottom">
                  <i className="fa-solid fa-location-dot"></i> {item?.city}, {item?.state}
                </span>
              </div>
            </div>
    )
}

export default RealEstateItems;
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import listingsData from "./data/listingsData";
import { AppProvider } from "./components/listingsProvider";
import { useState } from "react";

function App() {
  const [showListingsData, setShowListingsData] = useState(listingsData);

  const generateLocationDataForDropdown = () => {
    return [...new Set(listingsData.map((item) => item.city))];
  };
  const generateHomeTypeDataForDropdown = () => {
    return [...new Set(listingsData.map((item) => item.homeType))];
  };
  const generateRoomsDataForDropdown = () => {
    return [...new Set(listingsData.map((item) => item.room))];
  };

  const handleFilterSearch = (search) => {
    const filteredListingsData = listingsData.filter((item) => {
      const fullSearch = `${item.address} ${item.city}  ${item.homeType} ${item.extras} `;
      if (fullSearch.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    setShowListingsData(filteredListingsData);
  };


  const handleFilterLocation = (location) => {
    const filteredListingsData = listingsData.filter((item) => {
      
      if (item.city === location) {
        return item;
      }
    });
    setShowListingsData(filteredListingsData);
  };

  const handleFilterHomeType = (homeTypes) => {
    const filteredListingsData = listingsData.filter((item) => {
      
      if (item.homeType === homeTypes) {
        return item;
      }
    });
    setShowListingsData(filteredListingsData);
  };

  const handleFilterRoom = (rooms) => {
    const filteredListingsData = listingsData.filter((item) => {
      
      if (item.room === rooms) {
        return item;
      }
    });
    setShowListingsData(filteredListingsData);
  };


  console.log(listingsData);
  return (
    <div className="App">
      <Header />
      <section id="content-area">
        <Filter
          citys={generateLocationDataForDropdown()}
          rooms={generateRoomsDataForDropdown()}
          homeTypes={generateHomeTypeDataForDropdown()}
          onLocationFilter={handleFilterLocation}
          onRoomsFilter={handleFilterRoom}
          onHomeTypeFilter={handleFilterHomeType}
        />
        <Listings
          listingsData={showListingsData}
          onSearchFilter={handleFilterSearch}
        />
      </section>
    </div>
  );
}

export default App;

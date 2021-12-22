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
  const generateRoomsDataForDropdown = () => {
    return [...new Set(listingsData.map((item) => item.rooms))];
  };

  const handleFilterSearch = (search) => {
    const filteredListingsData = listingsData.filter((item) => {
      const fullSearch = `${item.address} ${item.city}  ${item.homeType} ${item.extras} ${item.state}`;
      if (fullSearch.toLowerCase().includes(search.toLowerCase())) {
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
          manyRooms={generateRoomsDataForDropdown()}
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

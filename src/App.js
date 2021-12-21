import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Listings from './components/Listings';
import listingsData from './data/listingsData';
import { AppProvider } from './components/listingsProvider';
import { useState } from 'react';


function App() {
  const[showListingsData, setShowListingsData] = useState({listingsData})
  

  console.log(listingsData)
  return (
    
      <div className="App">
      <Header/>
      <section id='content-area'>
        <Filter />
        <Listings listingsData={showListingsData}/>
      </section>
    </div>
    
    
  );
}

export default App;

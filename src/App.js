import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
      <Header/>
      <section id='content-area'>
        <Filter/>
        <Listings/>
      </section>
    </div>
  );
}

export default App;

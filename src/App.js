import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data.js';

const cards = Data.map(item => {
  return(
    <Card 
      key={item.id}
      item={item}
    />
  )
})
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </header>
    </div>
  );
}

export default App;

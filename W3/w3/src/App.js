import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Search from './Component/Search';
import TechCard from './Component/TechCard';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
    <Header/>
    <Search/>
    <TechCard/>
    <Card/>
    </div>
  );
}

export default App;


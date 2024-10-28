import logo from './logo.svg';
import './App.css';
import Calculator from './Component/Hooks';
import Effect from './Component/EffectsHook';
import { createContext } from 'react';
import Home from './Component/Home';

export const context = createContext()

function App() {
  return (
    <context.Provider value={{name:"Nityanand",sap:51985173}}>
      <div className="App">
        <Calculator/>
        <Home/>
      </div>
    </context.Provider>   
  );
}
export default App; 


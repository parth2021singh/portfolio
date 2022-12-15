import { useContext } from 'react';
import './App.css';
import About from './componenets/about/About';
import Contact from './componenets/contact/Contact';
import Intro from './componenets/intro/Intro';
import ProductList from './componenets/productList/ProductList';
import { Toggle } from './componenets/toggle/Toggle';
import { ThemeContext } from './context';

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{backgroundColor: darkMode ? "black" : "white",color:darkMode? "white" : "black"}}>
          <Toggle/>
          <Intro/>
          <About/>
          <ProductList/>
          <Contact/>
    </div>
  );
}

export default App;

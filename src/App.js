import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import { AppProvider } from "./Components/appContext";
import products from "./Data/product.json";

function App() {
  
  return (
    <div className="App">
      <AppProvider>

        <NavbarComp products={products}/>
        
      </AppProvider>
      

    </div>
  );
}

export default App;

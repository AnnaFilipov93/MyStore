import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import { AppProvider } from "./Components/appContext";

function App() {
  return (
    <div className="App">
      <AppProvider>

        <NavbarComp/>
        
      </AppProvider>
      

    </div>
  );
}

export default App;

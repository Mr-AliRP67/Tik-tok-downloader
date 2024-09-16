import AddApi from './Api/AddApi';
import './App.css';
import AppStore from './Component/AppStore/AppStore';
import Search from './Component/Search';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Search/>
     <AppStore/>
     <AddApi/>
    </div>
  );
}

export default App;

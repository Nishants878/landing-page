import logo from './logo.svg';
import './App.css';
import Homepage from './Containers/Homepage/Homepage'
import Sidebar from './Components/Sidebar/Sidebar'
function App() {
  return (
    <div className="App">
      <header>
        <Sidebar/>
      </header>
      <main>
      <Homepage/>
      </main>
    
    </div>
  );
}

export default App;

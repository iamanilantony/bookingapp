import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import { Home, Hotel, Hotels } from './pages';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/hotels' element={<Hotels />}/>
                <Route path='/hotel' element={<Hotel />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

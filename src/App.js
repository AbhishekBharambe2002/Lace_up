import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Buy from './Pages/Buy';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/buy' element={<Buy/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

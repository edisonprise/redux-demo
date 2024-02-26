// components
import { Index } from "./pages/Index";
import  Home  from "./pages/Home"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      
    </div>

  );
}

export default App;

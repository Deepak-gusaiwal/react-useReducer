import Navbar from "./components/Navbar.jsx";
import ReducerHook from "./components/ReducerHook.jsx";
import {Routes,Route} from 'react-router-dom'
import ContextApi from "./components/ContextApi.jsx";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/reducer-hook" element={<ReducerHook/>}/>
    <Route path="/context" element={<ContextApi/>}/>
  </Routes>
  </>
  );
}

export default App;

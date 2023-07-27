import Navbar from "./components/Navbar.jsx";
import ReducerHook from "./components/ReducerHook.jsx";
import {Routes,Route} from 'react-router-dom'
import ContextApi from "./components/ContextApi.jsx";
import RecuerHookWithObject from "./components/RecuerHookWithObject.jsx";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/reducer-hook" element={<ReducerHook/>}/>
    <Route path="/context" element={<ContextApi/>}/>
    <Route path="/reducer-hook-with-object" element={<RecuerHookWithObject/>}/>
  </Routes>
  </>
  );
}

export default App;

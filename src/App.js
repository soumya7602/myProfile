import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Navebar from './components/Navebar.js';
function App() {
  return (
    <>
      <Navebar />
      <Outlet />
    </>
  );
}
export default App;


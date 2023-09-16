import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/task3/subpage">Subpage</NavLink>
          <NavLink to="/task3/counter">Counter</NavLink>
        </nav>
      </header>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

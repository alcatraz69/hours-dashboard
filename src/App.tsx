import React from 'react';
import Navbar from './components/Navbar';
import BudgetStatus from './pages/BudgetStatus';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <BudgetStatus/>
    </div>
  );
}

export default App;

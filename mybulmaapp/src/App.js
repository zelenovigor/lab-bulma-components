import React from 'react';
import './App.css';
import NavBar from './Navbar'
import FormField from './FormField'
function App() {
  return (
    <div className="App">
        <NavBar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Telephone" type="number" placeholder="555-555-5555" />
        <FormField label="CreditCard" type="number" placeholder="1234567890" />

    </div>
  );
}

export default App;

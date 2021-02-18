import React from 'react'
import { Header } from './components'


const App = () => {
  const navItems = [
    {
      texto: 'Inicio', 
      link: '/'
    },
    {
      text: 'Servicios',
      link:'/servicios'
    },
    {
      text: 'Contacto',
      link:'/contacto'
    }
  ]
  

  return (
    <div className="my-app" id="my-app">
      
      <Header menuItems={navItems} />

      <h1>Mi primera app de React</h1>
      
    </div>
  );
};

export default App;

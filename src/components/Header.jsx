import React, {useState} from "react";
function Header() {
    const [isOpen, setIsOpen] = useState(false);
return (
    <header className=" bg-gradient-to-b from-gray-900 via-zinc-600 to-zinc-300 text-white p-6 shadow-lg"> 
<div className="container mx-auto flex justify-between items-center">
<a href="/" className="text-2xl font-bold text-teal-300 transition-colors duration-300">
ETER
</a>
<div className="md:hidden">
<button onClick={( ) => setIsOpen(!isOpen)} className= "text-white focus:outline-none">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {isOpen ? (
      
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    ) : (
      
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    )}
  </svg>
</button>
</div>

<nav className= {`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 z-10`}>

<ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
     
     <li>
        <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300">

        </a>
     </li>
     <li>
    <a href="#servicios" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300">
      Servicios
    </a>
  </li>
  <li>
    <a href="#nosotros" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300">
      Nosotros
    </a>
  </li>
  <li>
    <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300">
      Contacto
    </a>
  </li>
</ul>
</nav>

<div className="hidden md:block"> {/* Oculto en móviles, visible en desktop */}
  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
    Iniciar Sesión
  </button>
</div>

</div>
    </header>
);

}
export default Header;

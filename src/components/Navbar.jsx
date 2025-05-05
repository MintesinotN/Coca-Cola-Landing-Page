import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    "Our Company",
    "Brands",
    "Sustainability",
    "Social",
    "Careers",
    "Media Center",
    "Investors",
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white text-coke-black p-4 hidden justify-between items-center shadow-sm lg:flex">
        <div className="flex items-center space-x-4">
          <span className="lg:invisible max-lg:hidden text-sm font-light">THE COCA-COLA COMPANY</span>
          <img
            src="https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo.svg"
            alt="Coca-Cola Company Logo"
            className="h-8"
          />
        </div>
        <ul className="flex space-x-6 text-sm font-semibold">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-coke-red text-nowrap">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </div>
        <span className="lg:invisible max-lg:hidden text-sm font-light">THE COCA-COLA COMPANY</span>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-white text-coke-black p-4 flex justify-between items-center shadow-sm lg:hidden">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo.svg"
            alt="Coca-Cola Company Logo"
            className="h-8"
          />
          {/* <span className="text-sm font-light">THE COCA-COLA COMPANY</span> */}
        </div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 lg:hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo.svg"
                alt="Coca-Cola Company Logo"
                className="h-8"
              />
              <span className="text-sm font-light max-lg:hidden">THE COCA-COLA COMPANY</span>
            </div>
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-lg font-semibold">
            {menuItems.map((item) => (
              <li key={item} className="border-b border-gray-200 pb-2">
                <a href="#" className="flex justify-between items-center hover:text-coke-red text-nowrap">
                  {item}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 mt-auto pt-8">
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
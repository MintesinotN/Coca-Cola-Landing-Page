import { useState } from 'react'

function Footer() {
  const aboutUsLinks = [
    "Media Center",
    "Coca-Cola Foundation",
    "Investors",
    "Policies and Practices",
    "Careers",
  ]

  const needHelpLinks = [
    "FAQ",
    "Contact Us",
    "International",
  ]

  const privacyLinks = [
    "Privacy Policy",
    "Cookies Policy",
    "Notice at Collection",
    "Do Not Sell or Share My Personal Information",
    "Terms of Service",
    "Cookies Settings",
  ]

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              {aboutUsLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Need Help?</h4>
            <ul className="space-y-2">
              {needHelpLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Privacy Policy</h4>
            <ul className="space-y-2">
              {privacyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:opacity-75">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.58 8.04 8.14 9.5v-6.72h-2.46v-2.78h2.46v-2.1c0-2.44 1.5-3.78 3.68-3.78 1.04 0 1.94.08 2.2.12v2.56h-1.5c-1.18 0-1.4.56-1.4 1.38v1.82h2.8l-.36 2.78h-2.44v6.72c4.56-1.46 8.14-5.1 8.14-9.5 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-75">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.9 18.9H5.8V9.5h3.1v9.4zm-1.55-11.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm11.65 11.6h-3.1v-5.1c0-1.2-.4-2-1.4-2-.8 0-1.3.6-1.5 1.1v6h-3.1V9.5h3.1v1.4c.4-.7 1.2-1.6 2.9-1.6 2.1 0 3.7 1.4 3.7 4.4v5.2z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-75">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-75">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>United States | English</span>
            <button className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-xs">•</span>
            </button>
          </div>
        </div>

        <div className="text-center border-t border-gray-600 pt-4">
          <p className="text-sm">© 2025 The Coca-Cola Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
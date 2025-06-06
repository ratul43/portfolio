import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-base-200 text-base-content">
          
      <footer className="footer flex flex-col md:flex-row items-center justify-between gap-6 p-10 container mx-auto">
        <nav className="flex flex-wrap justify-center gap-4">
          <a className="link link-hover">About me</a>
          <a className="link link-hover">Contact</a>

        </nav>
        <i class="bi bi-facebook"></i>
        <nav className="flex justify-center gap-4">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current hover:text-blue-600" viewBox="0 0 24 24">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6c0-.955.192-1.333 1.115-1.333H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
    </svg>
  </a>
 
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current hover:text-blue-800" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current hover:text-gray-700" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.3c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.52.12-3.18 0 0 1-.33 3.3 1.25A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.3-1.58 3.3-1.25 3.3-1.25.66 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.2 0 4.58-2.81 5.6-5.49 5.9.44.38.83 1.12.83 2.26v3.35c0 .32.22.69.83.58A12 12 0 0 0 12 0z"/>
    </svg>
  </a>
</nav>


        <aside className="text-center">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            John Witson
          </p>
        </aside>
      </footer>
    </div>
    );
};

export default Footer;
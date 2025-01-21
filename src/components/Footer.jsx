import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    
    <footer className="bg-[#E5E1DA] dark:bg-[#3C3C3C] py-8 md:flex space-x-2 justify-center text-center">
      <p> &copy; {year} Favour Badakin.</p>
      <p> All Rights Reserved </p>
      
    </footer>
  );
}

export default Footer
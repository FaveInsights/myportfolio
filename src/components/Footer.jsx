import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className="dark:bg-[#3C3C3C] py-8">
      <p> All Rights Reserved </p>
      <p> &copy; {year} Favour Badakin</p>
    </footer>
  );
}

export default Footer
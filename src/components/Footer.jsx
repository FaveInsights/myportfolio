import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className="">
      <p> All Rights Reserved </p>
      <p> &copy; {year} Favour Badakin</p>
    </footer>
  );
}

export default Footer
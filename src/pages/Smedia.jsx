import React from 'react'
import DashboardNav from '../components/DashboardNav'
import social from '../assets/images/socialmedia2.jpg'
import social1 from '../assets/images/socialmediaa.jpg'

const Smedia = () => {
  return (
    <>
    <DashboardNav />
    <main>
        <div>
            <img src={social1} alt='dashboard' />
        </div>
        <div>
            
    <img src ={social} alt='dashboard'/>
        </div>
    </main>
    </>
  )
}

export default Smedia
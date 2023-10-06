import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function Booked() {
  return (
    <div>
 <Header/>
 <div className='h-[1000px]'>
 <p className='lg:ml-[700px] sm:ml-[200px] ml-[130px] mt-12'>no appointment yet</p>
 </div>

 <Footer/>
    </div>
  )
}

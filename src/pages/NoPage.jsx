import React from 'react'
import ParticleBG from '../components/ParticleBG'

function NoPage() {
  return (
    <>
  <ParticleBG/>
    <div className='font-bold text-3xl flex justify-center items-center text-[#ffffff] h-screen'>
      <h1 className='font-bold text-3xl flex justify-center items-center text-[#ffffff] '>Error 404 - page not available</h1>
    </div>
    </>
  )
}

export default NoPage

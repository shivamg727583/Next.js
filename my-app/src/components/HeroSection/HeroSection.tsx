import Image from 'next/image'
import React from 'react'
import img from 'public/images/image1.png'

function HeroSection() {
  return (
    <div className='relative'>
        <Image 
        src={img}
        width={1000}
        height={400}
        // fill={true}
        placeholder='blur'
        style={{objectFit:'cover'}}
        alt='img1'
        />
    </div>
  )
}

export default HeroSection
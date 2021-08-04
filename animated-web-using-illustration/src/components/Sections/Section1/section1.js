import React from 'react';
import bg1 from '../../../images/bg1.svg';
import './section1.css';

export default function Section1() {
  
  return (
    
      <div className='bg'>
        <img src={bg1} alt='bg not found' height={600} />
        <div className='wellcome-screen' >

          <h1 className='wellcome-h1'>FREE TECHNO WEBSITE </h1>
          <p className='para'>This comprehensive training course focuses on installing, configuring, and managing VMware NSX®.
            This course presents VMware NSX as a part of the software-defined data center. You will learn how to use logica
            l switching in VMware NSX to virtualize your switching environment. The course also details logical routing to enable you to
            dynamically route between different virtual And you will learn how to use gateway services. </p>
          <button >GET MORE...  </button>
        </div>
      </div>
    

  )
}
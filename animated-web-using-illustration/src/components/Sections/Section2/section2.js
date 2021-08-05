import React from 'react';
import bg from '../../../images/bg2.svg';
import './section2.css';

export default function Section2() {    
    return (
            <div className='section2' >
                    <h1 className='section2-h1'>Point Of Sale</h1>
                    <p className='section2-para'>
                        The Syscoin protocol facilitates real-world point-of-sale applications that  can be used  to tra
                        nsact in-store  or via e-commerce. The high speed, quick resolution of asset transactions via
                        Syscoin’s proprietary  Z-DAG  technology means you can empower your business with the speed and security of blockchain.
                        <br />
                        Some examples of retail use cases include:
                        <ul>
                            <li> De-Centralised Marketplaces and E-Commerce</li>
                            <li>Game Assets and Microtransactions </li>
                            <li>Certificate Backed Digital Goods </li>
                        </ul>



                     </p>
                    <img className='section2-img' src={bg} alt='not' height='650' width='800'></img>
                </div>

        
    )
};
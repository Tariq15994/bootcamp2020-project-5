import React from 'react';
import NavBar from '../NavBar/navBar';
import Section1 from './Section1/section1';
import './Section1/section1.css';
import Card from './Cards/Cards';
import Section2 from './Section2/section2';
export default function Sections(){
    return (
    <div >
        <NavBar />
        <Section1 />
        <Section2 />
        <Card />
    </div>
    )
}


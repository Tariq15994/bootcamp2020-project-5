import React from 'react';
import Card1 from '../../../images/cards/card1.svg';
import Card2 from '../../../images/cards/card2.svg';
import Card3 from '../../../images/cards/card3.svg';
import Card4 from '../../../images/cards/card4.svg';
import Card5 from '../../../images/cards/card5.svg';
import Card6 from '../../../images/cards/card6.svg';
import './card.css';

export default function Card(){
    return(
    <div className='cards-container'>
        <div  className='card'>
            <img className='card-img' src={Card1} alt='card not found '  />
            <div className='desc'>
            <h1 className='h1'>Grocerry</h1>
            <p className='card-para'>Chiefly US. : a store that sells food and household supplies : supermarket.</p>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={Card2} alt='card not found '  />
            <div className='desc'>
            <h1 className='h1'>Chief</h1>
            <p className='card-para'>Chiefly US. : a store that sells food and household supplies : supermarket.</p>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={Card3} alt='card not found '  />
            <div className='desc'>
            <h1 className='h1'>Grocerry Bowles</h1>
            <p className='card-para'>Chiefly US. : a store that sells food and household supplies : supermarket.</p>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={Card4} alt='card not found '  />
            <div className='desc'>
            <h1 className='h1'>Cakes</h1>
            <p className='card-para'>Chiefly US. : a store that sells food and household supplies : supermarket.</p>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={Card5} alt='card not found '  />
            <div className='desc'>
            <h1 className='h1'>Fry Foods</h1>
            <p className='card-para'>Chiefly US. : a store that sells food and household supplies : supermarket.</p>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={Card6} alt='card not found '  />
            <div className='desc'>
            <h1 className='h1'>Baverage</h1>
            <p className='card-para'>Chiefly US. : a store that sells food and household supplies : supermarket.</p>
            </div>
        </div>
        </div>
    )
}

import React from 'react'
import fsd1 from  '../images/fsd1.png'
import fsd2 from   '../images/fsd2.webp'
import fsd3 from   '../images/fsd3.webp'
import fsd4 from   '../images/fsd4.webp'
import fsd5 from   '../images/fsd5.webp'
import fsd6 from   '../images/fsd6.webp'

function FullStack() {

  
let data = [
  {
    id : 1,
    image : fsd1,
    title :'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
    text :'When you’re hiring a full-stack developer, what are the most important things you look for?',
    button :'READ MORE »'
  },
  {
    id : 2,
    image : fsd2,
    title :'Top Differences: Full Stack Developer vs Software Engineer 2024',
    text :'A Full Stack Developer is a tech all-rounder. They work on both the front and',
    button :'READ MORE »'
  },
  {
    id : 3,
    image : fsd3,
    title :'Horizontal vs Vertical Scaling for Efficient System Design',
    text :'In the world of system design, envision a digital skyscraper – a multifaceted structure built',
    button :'READ MORE »'
  },
  {
    id : 4,
    image : fsd4,
    title :'Best Books to Learn Full-Stack Development',
    text :'Are you interested in becoming a full-stack developer but not sure where to start? In',
    button :'READ MORE »'
  },
  {
    id : 5,
    image : fsd5,
    title :'Top 10 Product-Based Companies for Full-Stack Developers [2024]',
    text :'In the dynamic landscape of technology, full-stack developers are the architects of the digital world,',
    button :'READ MORE »'
  },
  {
    id : 6,
    image : fsd6,
    title :'7 Best Full-Stack Development Online Courses [2024]',
    text :'Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand',
    button :'READ MORE »'
  }
];

  return <div className='container body-nav'>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.map(cardData=>(
        <div className="col" key={cardData.id}>
            <div className="card" style={{width:'22.5rem'}}>
            <img src={cardData.image} alt={cardData.title} className=" custom-img" />
            <div className="card-body">
              <h5 className="card-title">{cardData.title}</h5>
              <p className="card-text">{cardData.text}</p>
              <a href="#" className="btn">{cardData.button}</a>
            </div>
            <div className='card-bottom'>
                <span>15 November 2023 </span>
                <span>.</span>
                <span>No Comments</span>
              </div>
            </div>
        </div>
      ))}
    </div>
    
  </div>
}

export default FullStack
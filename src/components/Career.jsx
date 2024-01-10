import React from 'react'
import career from  '../images/career.jpg'
import career1 from   '../images/career1.webp'
import career2 from   '../images/career2.webp'
import career4 from   '../images/career4.webp'
import career5 from   '../images/career5.webp'
import career6 from '../images/career6.webp'


function Career() {
  let data3 = [
    {
      id : 1,
      image : career,
      title :'UI/UX Designer Job Description and Roles & Responsibilities',
      text :'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
      button :'READ MORE »'
    },
    {
      id : 2,
      image : career1,
      title :'Top 5 IT Jobs for Economics Students',
      text :'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for',
      button :'READ MORE »'
    },
    {
      id : 3,
      image : career2,
      title :'Top IT Jobs for Commerce Students: A Lucrative Career Path',
      text :'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
      button :'READ MORE »'
    },
    {
      id : 4,
      image : career4,
      title :'Automation Test Engineer Resume: 10 Important Things To Consider',
      text :'The world is moving towards automating the testing of products in order to increase work',
      button :'READ MORE »'
    },
    {
      id : 5,
      image : career5,
      title :'Professional Civil Engineer Resume: A Guide To Attract Employers in 2024',
      text :'The world is moving towards modernization leading to an increase in the popularity of civil',
      button :'READ MORE »'
    },
    {
      id : 6,
      image : career6,
      title :'9 Best Product-Based Companies for Project Management',
      text :'In today’s tech-driven world, the demand for project managers is higher than before. The workload',
      button :'READ MORE »'
    }
  ];
  
    return <div className='container body-nav'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data3.map(cardData3=>(
          <div className="col" key={cardData3.id}>
              <div className="card" style={{width:'22.5rem'}}>
              <img src={cardData3.image} alt={cardData3.title} className=" custom-img" />
              <div className="card-body">
                <h5 className="card-title">{cardData3.title}</h5>
                <p className="card-text">{cardData3.text}</p>
                <a href="#" className="btn">{cardData3.button}</a>
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

export default Career
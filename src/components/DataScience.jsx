import React from 'react'
import ds1 from  '../images/ds1.webp'
import ds7 from   '../images/ds7.webp'
import ds3 from   '../images/ds3.webp'
import ds4 from   '../images/ds4.webp'
import ds5 from   '../images/ds5.webp'
import ds6 from   '../images/ds6.webp'

function DataScience() {
  let data1 = [
    {
      id : 1,
      image : ds1,
      title :'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
      text :'Are you someone who’s not interested in coding, but wants to get placed in tech',
      button :'READ MORE »'
    },
    {
      id : 2,
      image : ds7,
      title :'Useful Python Libraries & Tools for Data Science Beginners',
      text :'In a world filled with information, knowing how to understand and use data is super',
      button :'READ MORE »'
    },
    {
      id : 3,
      image : ds3,
      title :'Top Product-Based Companies for Data Science Freshers',
      text :'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
      button :'READ MORE »'
    },
    {
      id : 4,
      image : ds4,
      title :'What is the Difference between Data Science and Data Engineering?',
      text :'India has been making some serious waves in the world of data. Just like the',
      button :'READ MORE »'
    },
    {
      id : 5,
      image : ds5,
      title :'Top 10 Data Science Tools in 2024',
      text :'Data Science is an in-demand profession and will continue growing in the coming years. From',
      button :'READ MORE »'
    },
    {
      id : 6,
      image : ds6,
      title :'Best Data Science Books to Learn in 2024',
      text :'Today, we’re going to talk about something really cool: data science. It’s all about using',
      button :'READ MORE »'
    }
  ];
  
    return <div className='container body-nav'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data1.map(cardData1=>(
          <div className="col" key={cardData1.id}>
              <div className="card" style={{width:'22.5rem'}}>
              <img src={cardData1.image} alt={cardData1.title} className=" custom-img" />
              <div className="card-body">
                <h5 className="card-title">{cardData1.title}</h5>
                <p className="card-text">{cardData1.text}</p>
                <a href="#" className="btn">{cardData1.button}</a>
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

export default DataScience
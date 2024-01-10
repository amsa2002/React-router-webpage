import React from 'react'
import cs1 from  '../images/cs1.webp'
import cs7 from   '../images/cs2.webp'
import cs3 from   '../images/cs3.png'
import cs4 from   '../images/cs4.png'
import cs5 from   '../images/cs5.gif'
import cs6 from   '../images/cs6.gif'


function CyberSecurity() {
  let data2 = [
    {
      id : 1,
      image : cs1,
      title :'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      text :'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
      button :'READ MORE »'
    },
    {
      id : 2,
      image : cs7,
      title :'UsWhat Is Hacking? Types of Hacking & More',
      text :'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
      button :'READ MORE »'
    },
    {
      id : 3,
      image : cs3,
      title :'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
      text :'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
      button :'READ MORE »'
    },
    {
      id : 4,
      image : cs4,
      title :'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
      text :'Look around today, you will witness that we are more reliant on technology and devices',
      button :'READ MORE »'
    },
    {
      id : 5,
      image : cs5,
      title :'8 Different Types of Cybersecurity and Threats Involved',
      text :'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
      button :'READ MORE »'
    },
    {
      id : 6,
      image : cs6,
      title :'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
      text :'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
      button :'READ MORE »'
    }
  ];
  
    return <div className='container body-nav'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data2.map(cardData2=>(
          <div className="col" key={cardData2.id}>
              <div className="card" style={{width:'22.5rem'}}>
              <img src={cardData2.image} alt={cardData2.title} className=" custom-img" />
              <div className="card-body">
                <h5 className="card-title">{cardData2.title}</h5>
                <p className="card-text">{cardData2.text}</p>
                <a href="#" className="btn">{cardData2.button}</a>
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

export default CyberSecurity
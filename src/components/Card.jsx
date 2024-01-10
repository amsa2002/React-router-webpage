import React from 'react'
import career from  '../images/career.jpg'
import career1 from   '../images/career1.webp'
import career2 from   '../images/career2.webp'
import career4 from   '../images/career4.webp'
import career5 from   '../images/career5.webp'
import career6 from '../images/career6.webp'
import ds1 from  '../images/ds1.webp'
import ds7 from   '../images/ds7.webp'
import ds3 from   '../images/ds3.webp'
import ds4 from   '../images/ds4.webp'
import ds5 from   '../images/ds5.webp'
import ds6 from   '../images/ds6.webp'
import cs1 from  '../images/cs1.webp'
import cs7 from   '../images/cs2.webp'
import cs3 from   '../images/cs3.png'
import cs4 from   '../images/cs4.png'
import cs5 from   '../images/cs5.gif'
import cs6 from   '../images/cs6.gif'
import fsd1 from  '../images/fsd1.png'
import fsd2 from   '../images/fsd2.webp'
import fsd3 from   '../images/fsd3.webp'
import fsd4 from   '../images/fsd4.webp'
import fsd5 from   '../images/fsd5.webp'
import fsd6 from   '../images/fsd6.webp'

function Card() {
  let allData = [
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
  },
  {
    id : 7,
    image : ds1,
    title :'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    text :'Are you someone who’s not interested in coding, but wants to get placed in tech',
    button :'READ MORE »'
  },
  {
    id : 8,
    image : ds7,
    title :'Useful Python Libraries & Tools for Data Science Beginners',
    text :'In a world filled with information, knowing how to understand and use data is super',
    button :'READ MORE »'
  },
  {
    id : 9,
    image : ds3,
    title :'Top Product-Based Companies for Data Science Freshers',
    text :'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
    button :'READ MORE »'
  },
  {
    id : 10,
    image : ds4,
    title :'What is the Difference between Data Science and Data Engineering?',
    text :'India has been making some serious waves in the world of data. Just like the',
    button :'READ MORE »'
  },
  {
    id : 11,
    image : ds5,
    title :'Top 10 Data Science Tools in 2024',
    text :'Data Science is an in-demand profession and will continue growing in the coming years. From',
    button :'READ MORE »'
  },
  {
    id : 12,
    image : ds6,
    title :'Best Data Science Books to Learn in 2024',
    text :'Today, we’re going to talk about something really cool: data science. It’s all about using',
    button :'READ MORE »'
  },
  {
    id : 13,
    image : cs1,
    title :'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    text :'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
    button :'READ MORE »'
  },
  {
    id : 14,
    image : cs7,
    title :'UsWhat Is Hacking? Types of Hacking & More',
    text :'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
    button :'READ MORE »'
  },
  {
    id : 15,
    image : cs3,
    title :'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    text :'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
    button :'READ MORE »'
  },
  {
    id : 16,
    image : cs4,
    title :'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
    text :'Look around today, you will witness that we are more reliant on technology and devices',
    button :'READ MORE »'
  },
  {
    id : 17,
    image : cs5,
    title :'8 Different Types of Cybersecurity and Threats Involved',
    text :'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
    button :'READ MORE »'
  },
  {
    id : 18,
    image : cs6,
    title :'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
    text :'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
    button :'READ MORE »'
  },
  {
    id : 19,
    image : cs1,
    title :'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    text :'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
    button :'READ MORE »'
  },
  {
    id : 20,
    image : cs7,
    title :'UsWhat Is Hacking? Types of Hacking & More',
    text :'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
    button :'READ MORE »'
  },
  {
    id : 21,
    image : cs3,
    title :'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    text :'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
    button :'READ MORE »'
  },
  {
    id : 22,
    image : cs4,
    title :'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
    text :'Look around today, you will witness that we are more reliant on technology and devices',
    button :'READ MORE »'
  },
  {
    id : 23,
    image : cs5,
    title :'8 Different Types of Cybersecurity and Threats Involved',
    text :'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
    button :'READ MORE »'
  },
  {
    id : 24,
    image : cs6,
    title :'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
    text :'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
    button :'READ MORE »'
  },
  {
    id : 25,
    image : career,
    title :'UI/UX Designer Job Description and Roles & Responsibilities',
    text :'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
    button :'READ MORE »'
  },
  {
    id : 26,
    image : career1,
    title :'Top 5 IT Jobs for Economics Students',
    text :'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for',
    button :'READ MORE »'
  },
  {
    id : 27,
    image : career2,
    title :'Top IT Jobs for Commerce Students: A Lucrative Career Path',
    text :'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
    button :'READ MORE »'
  },
  {
    id : 28,
    image : career4,
    title :'Automation Test Engineer Resume: 10 Important Things To Consider',
    text :'The world is moving towards automating the testing of products in order to increase work',
    button :'READ MORE »'
  },
  {
    id : 29,
    image : career5,
    title :'Professional Civil Engineer Resume: A Guide To Attract Employers in 2024',
    text :'The world is moving towards modernization leading to an increase in the popularity of civil',
    button :'READ MORE »'
  },
  {
    id : 30,
    image : career6,
    title :'9 Best Product-Based Companies for Project Management',
    text :'In today’s tech-driven world, the demand for project managers is higher than before. The workload',
    button :'READ MORE »'
  }
];

  return <>
  <div className='container body-nav'>
  <div className="row row-cols-1 row-cols-md-3 g-4">
        {allData.map(allCardData=>(
          <div className="col" key={allCardData.id}>
              <div className="card" style={{width:'22.5rem'}}>
              <img src={allCardData.image} alt={allCardData.title} className=" custom-img" />
              <div className="card-body">
                <h5 className="card-title">{allCardData.title}</h5>
                <p className="card-text">{allCardData.text}</p>
                <a href="#" className="btn">{allCardData.button}</a>
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
  </>
}

export default Card
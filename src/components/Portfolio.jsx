import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

// className use react to create respinsive design
// fetch website img from porfolio.js using stack.map, use this to iterate through array of object
function Portfolio() {
   return (
      <>
         <div id="projects"></div>
         <div  className="self-start ">
            <div className="w-full md:w-7/12">
               <Title>Projects</Title>
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {portfolio.map(project => (
                  <PortfolioItem
                     imgUrl={project.imgUrl}
                     title={project.title}
                     bodyText={project.bodyText}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </>

   )
}

//fall back value for the module(code file), do this for all file to interact with each other
export default Portfolio;
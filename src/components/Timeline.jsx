import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

//similar to porfolio page
function Timeline() {
   return (

      <>
      <div id="timeline"></div>
      <div className=" flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>Projects Timeline</Title>
            {timeline.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
      </>
      
   )
}

export default Timeline;
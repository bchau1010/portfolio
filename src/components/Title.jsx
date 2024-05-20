import React from 'react';

//this is to display title name for each section of the website
//must be import over to timeline in order for it to take effect
function Title({ children, id }) {
   return (
      <h1
         id={id && id}
         className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
      >
         {children}
      </h1>
   )
}

export default Title;
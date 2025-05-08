import React from "react";
import Title from "./Title";

function Aboutme() {
    return (
        <>
            <br></br>
            <br></br>
            <h1 className="self-start text-3xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold">
                <div className="w-full md:w-7/12">
                    <Title>About Me</Title>
                </div>
            </h1>
            <p className="self-start text-lg max-w-xl mb-6 font-bold">
                Hi, I'm Bao Chau 👋, a recent Software Engineering graduate at The University of Texas at Arlington. I am the backend guy for the majority of the projects that I've been a part of, and I love every minute of it!
                <br/>
                <br/> 
                My core interests right now are Scalable Systems, Information Security,  Machine Learning, Datamining, AI, and Web Development.
                <br/>
                <br/>
                I am open for work and to collaborating on future projects, especially those that involve the areas mention above. If you like what I've done here, feel free to contact me using the form below or reach out to me via linkedin. 
                <br />
                <br></br>
            </p>
        </>
    )
}

export default Aboutme;
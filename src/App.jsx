import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Aboutme from './components/Aboutme';
import Techstack from './components/Techstack';

// implement dark mode via react via useEffect and useState
function App() {
	const [theme, setTheme] = useState(null);

	//if the user browser is darktheme, automaticly set to dark
	//otherwise light is turn on
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	//Button function for light and dark mode
	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	//set the page into dark mode if darkmode is turn on
	//if not, turn off dark mode
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	// the icon for the sun button
	// heroicons.com
	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	// the icon for the moon button
	// heroicons.com
	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	//The physical button for switching between sun and moon
	//onClick: call the handleThemeSwitch function
	//then change to sun to moon depend on the theme
	return (
		<>
			<div className="bg-light-background dark:bg-dark-background text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="fixed top-0 left-0 w-full z-50">
					<div className="py-3 mx-4 md:mx-auto max-w-5xl w-11/12 mx-auto bg-dark-background dark:bg-light-background rounded-md flex justify-between items-center">
						<button
							type="button"
							onClick={handleThemeSwitch}
							className="ml-5 bg-dark-background text-dark-background dark:bg-light-background text-lg p-1 rounded-md border border-light-background dark:border-dark-background">
							{theme === 'dark' ? sun : moon}
						</button>
						<div className="mr-5 text-light-background dark:text-dark-background flex items-center space-x-4 text-xl font-bold">
							<ul className="flex space-x-4 ">
								<li><a href="#intro" className="hover:text-gray-500 dark:hover:text-gray-500">Home</a></li>
								<li><a href="#projects" className="hover:text-gray-500 dark:hover:text-gray-500">Projects</a></li>
								<li><a href="#timeline" className="hover:text-gray-500 dark:hover:text-gray-500">Timeline</a></li>
								<li><a href="#contact" className="hover:text-gray-500 dark:hover:text-gray-500">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="max-w-5xl w-11/12 mx-auto pt-5">
					<Intro />
					<Aboutme />
					<Techstack />
					<Portfolio />
					<Timeline/>
					<Contact />
					<Footer />
				</div>
			</div>

		</>
	)
}

export default App

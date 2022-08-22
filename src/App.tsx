import { useState, useEffect } from 'react';
import { Tags } from './ProjectTags';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Storage } from 'aws-amplify';

import './App.css';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
  return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<div className="App">
				<Contact />
				<About />
				<Projects />
			</div>
		</ThemeProvider>
  );
}

const Contact = () => {
	return (
		<div className="contact">
			<a href="http://www.google.com" target="_blank" rel="noreferrer">
				<Button variant="outlined" size="small">Resume</Button>
			</a>

			<a href="https://github.com/mojuwara" target="_blank" rel="noreferrer">
				<img src="/github-icon.png" alt="Github Icon" width={27} />
			</a>

			<a href='https://www.linkedin.com/in/mahamadou-juwara/' target="_blank" rel="noreferrer">
				<img src="/linkedin-icon.png" alt="LinkedIn Icon" width={30} />
			</a>
		</div>
	)
}

const About = () => {
	return (
		<div className="about-section">
			<div>
				<h1>Mahamadou Juwara</h1>
				<h4>Software Engineer II, Bank of America</h4>
			</div>
			<h3>I am a software engineer with passion for cloud computing and backend development</h3>
		</div>
	)
}

const Projects = () => {
	const [raftDemoURL, setRaftDemoURL] = useState<string>("");

	useEffect(() => {
		// Storage.get("raft-demo.mp4").then(url => setRaftDemoURL(url));
		Storage.get('raft-demo.mp4', {level: 'private'}).then(data => setRaftDemoURL(data));
	}, []);
	console.log(raftDemoURL)

	const projectList = [
		{
			href: "https://raft.mojuwara.com",
			title: "Raft Consensus Algorithm Demo",
			tags: ["AWS", "AWS Lambda", "Docker", "GO", "https", "Linux", "Multithreading", "React", "RPC", "Signals", "TypeScript", "WebSocket"],
			display: <video playsInline muted src={raftDemoURL} />
		}
	]
	return (
		<div className='projects-container'>
			<div className='projects'>
				<h2>Projects</h2>
				{projectList.map((p, ndx) => <Project key={ndx} {...p}/>)}
			</div>
		</div>
	)
}

type ProjectProps = {
	href: string;
	title: string;
	tags: string[];
	display: JSX.Element;
}
const Project = ({href, title, tags, display}: ProjectProps) => {
	const tagStyle = {
		margin: 0.2,
		padding: 0.6,
		borderRadius: 3,
		textAlign: "center",
		display: "inline-block",
	}

	return (
		<div className="project">
			<a href={href} target="_blank" rel="noreferrer">
				<h3>{title}</h3>
			</a>
			{display}
			<div className="tag-container">
				{tags.map((t, ndx) => <Paper key={ndx} elevation={1} sx={{ ...tagStyle, backgroundColor: Tags[t] }}>{t}</Paper>)}
			</div>
		</div>
	)
}

export default App;

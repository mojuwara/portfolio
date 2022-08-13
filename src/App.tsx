import { Tags } from './ProjectTags';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import './App.css';

function App() {
  return (
    <div className="App">
			<Contact />
			<About />
			<Projects />
    </div>
  );
}

// TODO: Host resume on AWS
const Contact = () => {
	return (
		<div className="contact">
			<a href="http://www.google.com" target="_blank" rel="noreferrer">
				<Button variant="outlined">Resume</Button>
			</a>

			<a href="https://github.com/mojuwara" target="_blank" rel="noreferrer">
				<img src="/github-icon.png" alt="Github Icon" width={30} />
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
			{/* <div>
				<h3>I am a software engineer at Bank of America with passion for distributed systems, backend development and programming in general.</h3>
				<h3>Please have a look at some of my personal projects.</h3>
			</div> */}
		</div>
	)
}

const Projects = () => {
	const projectList = [
		{
			href: "https://raft.mojuwara.com",
			title: "Raft Consensus Algorithm Demo",
			tags: ["AWS", "AWS Lambda", "Docker", "GO", "https", "Linux", "React", "RPC", "Multithreading", "Signals", "TypeScript", "WebSocket"],
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
	// display: string;
}
const Project = ({href, title, tags}: ProjectProps) => {
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
			<img src="/placeholder-image.png" alt={title} width="70%" />
			<div className="tag-container">
				{tags.map((t, ndx) => <Paper key={ndx} elevation={1} sx={{ ...tagStyle, backgroundColor: Tags[t] }}>{t}</Paper>)}
			</div>
		</div>
	)
}

export default App;

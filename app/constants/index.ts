export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
	{
		title: "Full Stack Developer",
		icon: "/backend.webp",
	},
	{
		title: "Backend Developer",
		icon: "/web.webp",
	},
	{
		title: "Front End Developer",
		icon: "/mobile.webp",
	}
];

const technologies = [
	{
		name: "Java",
		icon: "/tech/java.webp",
	},
	{
		name: "Spring Boot",
		icon: "/tech/springboot.webp",
	},
	{
		name: "SQL",
		icon: "/tech/sql.webp",
	},
	{
		name: "Redis",
		icon: "/tech/redis.webp",
	},
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Redux",
		icon: "/tech/redux.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "Machine Learning",
		icon: "/tech/ml.webp",
	},
	{
		name: "Natural Language Processing",
		icon: "/tech/NLP.webp",
	},
];

const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "InternOptima",
		iconBg: "#E6DEDD",
		date: "2024 - 2024",
		points: [
			"Implemented end-to-end authentication and authorization session token logic, leveraging Redis for efficient session storage.",
			"Integrated Stripe payment gateway into the application, ensuring seamless interaction between the UI and backend.",
		],
	},
	{
		title: "Master of Science",
		company_name: "University Of Colorado Denver",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Explored advanced topics in Artificial Intelligence, integrating software engineering expertise with AI, machine learning, and natural language processing.",
			"Developed an in-depth understanding of code optimization techniques and best practices for scalable and efficient software solutions.",
			"Enhanced problem-solving skills through hands-on projects and collaborative coursework.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Caogemini Technology Services",
		iconBg: "#E6DEDD",
		date: "2021 - 2022",
		points: [
			"Developed and validated 80+ endpoints adhering to SOLID principles, ensuring seamless backend-frontend integration.",
			"Conducted rigorous testing using JUnit and Postman, reducing integration-related support tickets by 40%.",
			"Created a reusable library of UI components, minimizing redundant coding efforts by 35% and ensuring design consistency.",
			"Executed unit and integration testing using Enzyme and React, improving application reliability by 25% and cutting post-release defects by 30%.",
			"Established CI/CD pipelines using Jenkins and Docker, reducing deployment time by 40% with smooth, error-free rollouts.",
			"Implemented a secure JWT token process for client-server data transmission with configurable expiration times."
		],
	},
	{
		title: "Android Developer",
		company_name: "NowApps Technologies",
		iconBg: "#E6DEDD",
		date: "2019 - 2019",
		points: [
			"Android Studio Expertise: Conducted a comprehensive analysis of the Android Studio IDE and Gradle build system, mastering tools for efficient application development and deployment.",
			"Native Application Development: Designed and developed native Android applications using Java, showcasing hands-on experience in building robust and scalable mobile solutions."
			],
	},
	{
		title: "Bachelor's in computer science",
		company_name: "Preseidency University",
		iconBg: "#383E56",
		date: "2017 -  2021",
		points: [
			"Hackathon Runner-Up: Secured the runner-up position in the prestigious Presi Hackathon among 90 groups, showcasing problem-solving and coding excellence.",
			"Strong Algorithmic Foundation: Developed a solid understanding of data structures and algorithms, enabling efficient problem-solving and optimized software solutions.",
			"Academic Excellence: Gained comprehensive knowledge in core computer science subjects, including operating systems, databases, and software engineering.",
		],
	}
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Jagan Pocha",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/pocha-jaganmohan",
	},
	{
		id: 2,
		testimonial:
			"LeetCode is a platform for practicing coding challenges, focusing on algorithms, data structures, and interview preparation.",
		name: "Jagan Pocha",
		image: "/tech/LeetCode.webp",
		link: "https://leetcode.com/u/jagan_pocha",
	},
	{
		id: 3,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Jagan Pocha",
		image: "/tech/github.webp",
		link: "https://github.com/jagan-pocha",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
}[] = [
	{
		name: "Extracting Text from Images Using Google Vision AI",
		description:
			"Extracted text from images efficiently using Google Vision AI, leveraging its Optical Character Recognition (OCR) capabilities to convert visual data into actionable insights.",
		tags: [
			{
				name: "Google Vision AI",
				color: "blue-text-gradient",
			},
			{
				name: "OCR (Optical Character Recognition)",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/text_extract.webp",
	},
	{
		name: "AI-Powered Shortlisting Tool",
		description:
			"Developed an AI-powered shortlisting tool using Word2Vec and BERT to analyze and rank resumes based on similarity to job descriptions, enhancing recruitment efficiency and accuracy.",
		tags: [
			{
				name: "BERT Model",
				color: "red-text-gradient",
			},
			{
				name: "NLP (Natural Language Processing)",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/shortlisting.webp",
	},
	{
		name: "Enigma Machine -  Cipher Machine",
		description:
			"Enhanced the Enigma Machine cipher complexity by adding an additional rotor, increasing encryption strength. Developed a robust simulation to demonstrate secure communication and cryptographic principles.",
		tags: [
			{
				name: "React JS",
				color: "blue-text-gradient",
			},
			{
				name: "Javascript",
				color: "orange-text-gradient",
			}
		],
		image: "/projectimg/Enigma_Machine.jpg",
	},
	{
		name: "SwiftFly - Android App",
		description:
			"An Android app that enables users to search for flights based on travel dates and locations across 195 countries. Designed a user-friendly interface and integrated APIs for real-time flight data. Ensured seamless functionality and an intuitive user experience.",
		tags: [
			{
				name: "Android Sudio",
				color: "green-text-gradient",
			},
			{
				name: "Gradle",
				color: "blue-text-gradient",
			},
			{
				name: "Java",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/enhanced_image.png",
	},
];

export { services, technologies, experiences, testimonials, projects };

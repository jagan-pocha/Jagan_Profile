"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div style={{background:'linear-gradient(to bottom, #ff6666 0%, #ff3300 100%);'}} className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="heroSubText">Introduction</p>
				<h2 className="heroSubText">Overview</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
			>
				Innovative Software Developer with a strong foundation in backend and frontend development. 
				Proficient in Java, Spring Boot, SQL, Javascript and ReactJS, with experience in developing seamless user interfaces and robust APIs. 
				Adept at integrating third-party services such as payment gateways and implementing secure authentication and authorization using Redis. 
				Skilled in using tools like Postman, GitHub Copilot, and Figma for efficient development and collaboration. 
				Passionate about delivering scalable and high-quality software solutions, as demonstrated through hands-on experience in building end-to-end features and improving user experiences. 
				Excited to leverage my technical expertise to contribute to innovative projects and solve complex problems.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");

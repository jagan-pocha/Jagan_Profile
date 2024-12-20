"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	return (
		<div>
			<p style={{fontSize:'1.5rem', fontWeight:'bold', marginBottom:"1rem"}}>SKILLS</p>
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
					<h2 style={{display:'flex',alignContent:'center', justifyContent:'center'}}>{technology.name}</h2>
				</div>
			))}
		</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");

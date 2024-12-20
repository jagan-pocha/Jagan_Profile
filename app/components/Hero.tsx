"use client";
import { motion } from "framer-motion";
import React from "react";
import myImage from '../../public/My_Image.png'
import Image from 'next/image';

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#df2020] " />
					<div className="w-1 sm:h-80 h-40" style={{background:'#df2020'}}/>
				</div>
				<div>
					<h1 className="heroHeadText text-white">
						Hi, I&apos;m Jagan
					</h1>
					<p className="heroSubText">
						A Software Engineer
					</p>
					
				</div>	
				<div style={{alignItems:'center',alignContent:'center', display:'flex', justifyContent:'right'}}>
					<Image src={myImage} alt="Profile" />
					</div>
			</div>
			
			<div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;

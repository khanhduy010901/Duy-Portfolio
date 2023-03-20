import React from "react";
import Image from "../assets/duy.png";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[73vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row items-center'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
              DUY <span>NGUYEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary
              font-semibold uppercase leading-[1]'>
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation 
              sequence={[
                'Deverloper', 
                2000,
                'RICON',
                2000,
                'Ronaldo SOCSON',
                2000, 
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}} 
              className='flex gap-x-6 max-w-max items-center mb-12
              mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto
              lg:mx-0'>
              <a href='#'>
                <FaYoutube/>
              </a>
              <a href='#'>
                <FaGithub/>
              </a>
              <a href='#'>
                <FaDribbble/>
              </a>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import home1 from '../img/matt-collamer-P8Uk8kdx-BE-unsplash.jpg';
import Wave from "./Wave";
//Styled
import styled from 'styled-components';
import { About, Description,Image,Hide } from "./styles";
//Framer motion
import {motion} from "framer-motion";
import { titleAnim,fade,photoAnim } from "../pages/animation";

const AboutSection = () =>{



    return(
<About>
    <Description>
        <motion.div 
        className="title">
            <Hide>
                <motion.h2 
                variants={titleAnim}
                >We work to make</motion.h2>
            </Hide>
            <Hide>
            <motion.h2 
            variants={titleAnim}
                >your <span>dreams</span> come</motion.h2>
            </Hide>
            <Hide>
            <motion.h2 
                >true</motion.h2>
            </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact us for exceptional photo, video or design ideas. We have professionals ready to help you out with their amazing skills.</motion.p>
    <motion.button variants={fade}>Contact Us</motion.button>
    </Description>

    <Image>
<motion.img variants={photoAnim } src={home1} alt="camera guy" />
    </Image>
    <Wave/>
</About>
    )
}





export default AboutSection;
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () =>{
  return(  

<WaveSvg viewBox="0 0 2265 816" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
  initial={{pathLength:0,pathOffset:1}}
  animate={{pathLength:1,pathOffset:0}}
  transition={{duration:1}} d="M-25 755.091C424 816 558.449 -247.683 867.819 61.8265C1254.53 448.713 1213.55 811 1616.65 811C1939.14 811 2129 68.6731 2324 97" stroke="#FF44D6" strokeWidth="9" strokeOpacity=".5"/>
</WaveSvg>

    )
}


const WaveSvg = styled.svg`
position: absolute;
left: 0;
z-index:1;
`
export default Wave;
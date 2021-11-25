import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Import images
import goodtime from '../img/j-williams-5lWfPoWH6EY-unsplash.jpg';
import racer from '../img/nicolas-hoizey-Lno6-CxVXgo-unsplash.jpg';
import athlete from '../img/athlete.jpg';
import {motion} from 'framer-motion';
import { pageAnimation,fade,photoAnim,lineAnim,Slider,sliderContainer } from "./animation";
import {useScroll} from '../components/useScroll';
import ScrollTop from "../components/ScrollTop";

const OurWork = () =>{
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return(
        <Work
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{background:"#fff"}}>
            <motion.div variants={sliderContainer}>
            <Frame1 variants={Slider}></Frame1>
            <Frame2 variants={Slider}></Frame2>
            <Frame3 variants={Slider}></Frame3>
            <Frame4 variants={Slider}></Frame4>
            </motion.div>
          <Movie>
              <motion.h2 variants={fade}>The Athlete</motion.h2>
              <motion.div className="line" variants={lineAnim}></motion.div>
              <Link to="/work/the-athlete">
              <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete" />
              </Hide>
              </Link>
              </Movie>  

              <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
              <h2>The Racer</h2>
              <motion.div variants={lineAnim} className="line"></motion.div>
              <Link to="/work/the-racer">
                  
              <img src={racer} alt="racer" />
              
              </Link>
              </Movie>  

              <Movie ref={element2} variants={fade} animate={controls2} initial='hidden'>
              <h2>Hey Good Time</h2>
              <motion.div variants={lineAnim} className="line"></motion.div>
              <Link to="/work/hey-good-time.">
              <img src={goodtime} alt="goodtime" />
              </Link>
              </Movie>  

              <ScrollTop/>
        </Work>
    )
}

//styled
const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding:1rem 0rem;
    }
    @media (max-width:1300px){
        padding:2rem
    }
`

const Movie = styled(motion.div)`
padding-bottom: 10rem;
.line{
    height: .5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
const Hide=styled.div`
    overflow: hidden;
`

//Frame animation
const Frame1 = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`
const Frame2 = styled(Frame1)`
background: #ff8efb;
`
const Frame3 = styled(Frame1)`
background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
background: #8effa0;
`


export default OurWork;
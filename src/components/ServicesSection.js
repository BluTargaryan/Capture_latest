import React from "react";
//icons
import clock from '../img/alarm-outline.svg';
import diaphragm from '../img/camera-diaphragm-svgrepo-com.svg';
import teamwork from '../img/teamwork-svgrepo-com.svg';
import money from '../img/cash-outline.svg';
//images
import home2 from '../img/hicham-kaidi-symm28.jpg'
//styles
import { About, Description,Image,Hide } from "./styles";
import styled from 'styled-components';


import {scrollReveal} from '../pages/animation';
import { useScroll } from "./useScroll";


const ServicesSection = () =>{
  const [element,controls] = useScroll();
    return(
<Services variants={scrollReveal} ref={element} animate={controls} initial="hidden">
    <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
            <Card>
                <div className="icon">
                    <img src={clock} alt="icon"/>
                    <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <div className="icon">
                    <img src={teamwork} alt="icon"/>
                    <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <div className="icon">
                    <img src={diaphragm} alt="icon"/>
                    <h3>Diaphragm</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <div className="icon">
                    <img src={money} alt="icon"/>
                    <h3>Affordable</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
        </Cards>
    </Description>
    <Image>
        <img src={home2} alt="" />
    </Image>
</Services>
    )
}

//styled comps
const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
}
@media (max-width:1300px){
        
    }
`;

const Cards = styled.div`
display: flex;
flex-wrap:wrap;
@media (max-width:1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display:flex;
    align-items: center;
    img{
        width:2rem;
        height:auto;
        filter: invert(57%) sepia(93%) saturate(361%) hue-rotate(107deg) brightness(101%) contrast(91%);
    }
    h3{
        margin-left:1rem;
        background: white;
        color:black;
        padding: 1rem;
    }
}

`





export default ServicesSection;
import React,{useState} from "react";
import styled from "styled-components";
import {About} from './styles';
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../pages/animation";

const FaqSection = () =>{
    const [faqToggle,setFaqToggle] = useState(false);
    const [element,controls] = useScroll();
    return(
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Questions <span>FAQ</span></h2>
            
            <AnimateSharedLayout>
            <Toggle title='How Do I Start'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus.</p>
                    

            </div>
            </Toggle>

<Toggle title='Daily Schedule'>
                    <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus.</p>
                </div>
            </Toggle>

<Toggle title='Different Payment Methods'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus.</p>
                </div>
</Toggle>
            
<Toggle title='What Product Do I Offer'>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, temporibus.</p>
                </div>
</Toggle>
</AnimateSharedLayout>

        </Faq>
    )
}

const Faq = styled(About)`
    display:block;

    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #cccccc;
        height:.2rem;
        margin:2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor:pointer;
        h4{
            color:white;
        }
        .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
    }

   
`

export default FaqSection;
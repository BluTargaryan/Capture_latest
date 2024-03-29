import React,{useState,useEffect} from "react";
import styled from "styled-components";
import {useNavigate,useLocation} from 'react-router-dom';
import {MovieState} from './movieState';
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const MovieDetail = ()=>{

    const navigate = useNavigate();
    const location = useLocation();
    const url = location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);

    //UseEffect
    useEffect(()=>{
        const currentMovie = movies.filter((stateMovie)=>stateMovie.url===url);
        setMovie(currentMovie[0]);
        
    },[movies,url]);

    console.log(movie);
return(
    <motion.div
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit">
    {movie && (
    <Details>
    <Headline>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie" />
    </Headline>
    <Awards>
{movie.awards.map((award) =>{
    return(
        <Award
    title={award.title}
    description={award.description}
    key={award.title}
    />
    )
}
)}
    </Awards>

    <ImageDisplay>
        <img src={movie.mainImg} alt="secImg" />
    </ImageDisplay>
</Details>
)}
</motion.div>
)
}

const ImageDisplay = styled.div`
min-height: 50vh;
img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`

const Details= styled.div`
color: white;
`
const Headline=styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;

h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform:translate(-50%,-10%);
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
const Awards= styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;

@media (max-width:1500px){
    display: block;
    margin: 2rem;
    }
`
const AwardStyle = styled.div`
padding: 5rem;
h3{
    font-size: 2rem;
}
.line{
    width: 100%;
    background: #23d997;
    height: .5rem;
    margin: 1rem 0rem;
}
p{
    padding: 2rem 0rem;
}
`

//Award component
const Award = ({title,description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <div className="description">{description}</div>
        </AwardStyle>
    )
};



export default MovieDetail;
//Import images
import goodtime from '../img/grayscale-photo-of-man-and-woman-in-black-coat-3692624.jpg';
import racer from '../img/nicolas-hoizey-Lno6-CxVXgo-unsplash.jpg';
import athlete from '../img/athlete.jpg';

export const MovieState = () =>{
    return[
        {
            title:"The Athlete",
            mainImg:athlete,
            url:'/work/the-athlete',
            awards:[{
                title:"Truly a masterpiece",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
            {
                title:"Fresh take",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
            {
                title:"Bon appetit",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
        ]
        },
        {
            title:"The Racer",
            mainImg:racer,
            url:'/work/the-racer',
            awards:[{
                title:"Truly a masterpiece",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
            {
                title:"Fresh take",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
            {
                title:"Bon appetit",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
        ]
        },
        {
            title:"Hey Good Time",
            mainImg:goodtime,
            url:'/work/hey-good-time',
            awards:[{
                title:"Truly a masterpiece",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
            {
                title:"Fresh take",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
            {
                title:"Bon appetit",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates aspernatur tempore deleniti temporibus accusantium nulla necessitatibus ad eaque impedit?"
            },
        ]
        }
    ]
}

export default MovieState;
export const pageAnimation={
    hidden:{
        opacity:0,
     y:300
    },
    show:{
        opacity: 1,
        y:0,
        transition:{
            duration:.5,
            when:'beforeChildren',
            staggerChildren:.25
        }
    },
    exit:{
        opacity:0,
     y:300,
        transition:{
            duration:.5
        }
    }
}

export const titleAnim = {
    hidden:{
        y:200
    },
    show:{
        y:0,
        transition: {duration:.75, ease:'easeOut'}
    }
}

export const fade = {
    hidden:{opacity:0},
    show:{
        opacity: 1,
        transition: {ease:'easeOut', duration:.75}
    }
}

export const photoAnim = {
    hidden:{scale:1.5,opacity:0},
    show:{
        scale: 1,
        opacity:1,
        transition: {duration:.75, ease:'easeOut'}
    }
}

export const lineAnim = {
    hidden:{
        width:'0%'
    },
    show:{
        width: '100%',
        transition:{duration:1}
    }
}

export const Slider={
    hidden:{
        x:'-130%',
        skew:'45deg'
    },
    show:{
        x:'100%',
        skew:'0deg',
        transition: {
            duration:1,
            ease:'easeOut'
        }
    }
}

export const sliderContainer={
    hidden:{opacity:1},
    show:{
        opacity:1,
        transition: {
            staggerChildren:0.1,
            ease:'easeOut'
        }
    }
}

export const scrollReveal = {
    hidden:{
        opacity:0,
        scale:1.2,
        transition:{
            duration:.5
        }
    },
    show:{
        opacity:1,
        scale:1,
        tansition:{
            duration:1
        }
    }
}
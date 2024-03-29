//TEST
import {useInView} from 'react-intersection-observer';
import { useAnimation } from "framer-motion";

export const useScroll = () =>{
      //for the scroll anim
      const controls = useAnimation();
      const [element, view] = useInView({threshold:0.3});
      console.log(view);
      if(view){
          controls.start('show');
      }else{
          controls.start('hidden');
      }
      return[element,controls];
}
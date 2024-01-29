

import React, { useRef ,useState} from 'react'
import { useCharacter } from './CharacterContext';

import Comp from './Collective/Comp';
// import './Assets/css/index.css'

export default function Popup(props) {
   

    
   const container = useRef()


    // console.log(typeof(character))
   
    



    return (
        <div ref={container} id='collective-container' >



            <div className='collective-box'>


               <Comp/>
                {/* {showComponent2 && } */}
                {/* <Zoro/> */}


            </div>


        </div>
    )
}





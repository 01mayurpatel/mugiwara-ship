


import React, { useRef ,useState} from 'react'
import { useCharacter } from './CharacterContext';
import Usopp from './components/Usopp/Usopp'
import Zoro from './components/Zoro/Zoro'
import { type } from '@testing-library/user-event/dist/type/index.js'
import { renderToString } from 'react-dom/server';

// import './Assets/css/index.css'

export default function Popup(props) {
    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);

    
    const handleShowComponent1 = () => {
        setShowComponent1(true);
      };
    const handleShowComponent2 = () => {
        setShowComponent2(true);
    };

    const handleCloseComponent2 = () => {
        setShowComponent2(false);
    };


    // console.log(typeof(character))
    const { characterName } = useCharacter();
    const container = useRef()

    const closeHandler = () => {
        container.current.style.display = 'none'
    }
    let selectedComponent ;
    if(characterName=="zoro"){
        selectedComponent = <Zoro/>
    }else if(characterName == "usopp"){
        selectedComponent = <Usopp/>
    }




    return (
        <div ref={container} id='popup-container' >



            <div className='popup-box'>

{/* <Comp/> */}
                {selectedComponent}
                {/* {showComponent2 && } */}
                {/* <Zoro/> */}


            </div>


        </div>
    )
}





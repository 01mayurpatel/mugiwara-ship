import React, { useEffect, useState } from 'react'
import CopyLink from '../Assets/copy-link.png'
import './Card.css'
import Mcap from '../Assets/mcap_png_1.png'
import Holders from '../Assets/holders_png_1.png'
import Bars from '../Assets/rectangle_1_copy_3.png'
import Owner from '../Assets/owner_png_1.png'

function Card(propers) {
    
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
      setIsClicked(true);
  
      // Reset isClicked after the transition duration
      setTimeout(() => {
        setIsClicked(false);
        
      }, 100); // Adjust the duration based on your CSS transition time
    };
    const [isClicked2, setIsClicked2] = useState(false);

    const handleClick2 = () => {
      setIsClicked2(true);
  
      // Reset isClicked after the transition duration
      setTimeout(() => {
        setIsClicked2(false);
      }, 100); // Adjust the duration based on your CSS transition time
    };
        
    
        // Cleanup event listener on component unmount
       
    
    let Section1 = document.getElementsByClassName('cc-section-1')[0];

    const [tagcolor, settagcolor] = useState('');
    const [charName, setCharName] = useState('');
  const [charTag, setCharTag] = useState('');
  function myFunction() {
    var copyText = '0xbb02647c4ed460d08df6254d69f11217c52ad326';
    navigator.clipboard.writeText(copyText);
  
  }
  useEffect(() => {
      if (propers.ids === 1) {
          settagcolor('#ebd091')
          setCharName('<span>M</span>ONKEY <span>D</span>. <span>L</span>UFFY');
    //   var jj = charName
     
      setCharTag('THE RUBBER BANDED RASCAL');

    //   setCharName('');/
    } else if (propers.ids === 2) {
        settagcolor('#ffc87a')

        setCharName('<span>V</span>NSMOKE <span>S</span>ANJI');
        
      setCharTag('THE KICKIN’ COOK WITH A HEART OF GOLD');
    } else if (propers.ids === 3) {
        settagcolor('#ffa754')
        
        setCharName('<span>N</span>AMI');
        
        setCharTag('THE SAVVY NAVIGATOR AND WEATHER');
    } else if (propers.ids === 4) {
        settagcolor('#ff9082')
        setCharName('<span>C</span>HOPPER');
        
        setCharTag('THE CUTEST DOCTOR TO EVER SAIL THE GRAND LINE');
    } else if (propers.ids === 5) {
        settagcolor('#18ffba')
        setCharName('<span>R</span>ORONOA <span>Z</span>ORO');
        
        setCharTag('THE SWORD WEILDING SLEEPWALKER');
    } else if (propers.ids === 6) {
        settagcolor('#6edbff')
        setCharName('<span>F</span>RANKY ');
        
        setCharTag('THE COLA FUELED SHIPWRIGHT WITH A ROCKIN’ DO');
    } else if (propers.ids === 7) {
        settagcolor('#bc9dff')
        setCharName('<span>N</span>ICO <span>R</span>OBIN');
        
        setCharTag('THE HISTORY BUFF WITH MANY HANDS');
    } else if (propers.ids === 8) {
        settagcolor('#93b8ff')
        setCharName('<span>J</span>INBE');
        
        setCharTag('THE FISH-MAN WITH A KNACK FOR DIPLOMACY');
    } else if (propers.ids === 9) {
        settagcolor('#f9f9ea')
        setCharName('<span>B</span>ROOK');
        
      setCharTag('THE SOULFUL SKELETON WITH AN AFRO TO DIE');
    }else if (propers.ids === 10) {
        setCharName('<span>U</span>SOPP');
        
      setCharTag('THE LONG NOSED SNIPER KING');
    }
  }, [propers.ids]);

    return (
        <div className='cc-card-main'>
            <div className="cc-main-box">
                <div className="cc-card-container" style={{backgroundColor:`${propers.bgcolor}` , paddingBottom:"15px"}} >
                    <div className="cc-section-1" style={{ backgroundImage: `url(${propers.backimg})` }}>

                        <div className="cc-section1-text">
                            <div className='cc-section1-text1'>
                                <h3 className='cc-section1-tsm'>DOUBLOON'S VALUE</h3>
                                <h3 className='cc-section1-tb'>{propers.doubloonValue}</h3>
                            </div>
                            <div className='cc-section1-text2'>
                                <h3 className='cc-section1-tsm'>TIDAL SHIFTS</h3>
                                <h3 className='cc-section1-tb'>{propers.tidalShift}</h3>
                            </div>
                            <div className='cc-section1-text3'>
                                <h3 className='cc-section1-tsm'>SUNKEN TRESURE</h3>
                                <h3 className='cc-section1-tb'>{propers.sunken}</h3>
                            </div>
                        </div>

                        <div style={{ backgroundColor: `${propers.color1}` }} className="cc-copy-link">
                            <div className="cc-copy-link-img"  style={{backgroundColor:`${propers.bgcolor}`}}>
                                <img src={CopyLink} alt="" />
                            </div>
                            <span onClick={myFunction}>0xbb026d........217c52326</span>
                        </div>
                        <img className='cc-char-img' src={propers.character} alt="" />
                    </div>

                    <div className="cc-section-2">
                        <div className="cc-section-2-1">
                            <h3 className="cc-section-2-11" id='charName' dangerouslySetInnerHTML={{ __html: charName }} ></h3>
                            <h3 className="cc-section-2-12" id='charTag' style={{color:tagcolor}}>{charTag}</h3>
                        </div>
                        <div className="cc-section-2-2">
                            <div className="cc-section-2-21">
                                <div className="cc-section-2-2left">
                                    <div className='cc-item-1'>
                                        <div className="cc-items-img-box" style={{background : `url(${propers.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Mcap} alt="" />
                                        </div>
                                        <div className="cc-items-text">
                                            <span className="cc-items-text1">
                                                TREASURE BOARD
                                            </span>
                                            <span className='cc-items-text2'>
                                               {propers.TresureBoard}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='cc-item-1'>
                                        <div className="cc-items-img-box" style={{background : `url(${propers.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Holders} alt="" />
                                        </div>
                                        <div className="cc-items-text">
                                            <span className="cc-items-text1">
                                                CREW SIZE
                                            </span>
                                            <span className='cc-items-text2'>
                                                ${propers.CrewSize}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cc-section-2-2right">
                                <div className='cc-item-1'>
                                        <div className="cc-items-img-box" style={{background : `url(${propers.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Bars} alt="" />
                                        </div>
                                        <div className="cc-items-text">
                                            <span className="cc-items-text1">
                                            SEA TRADE VOLUME
                                            </span>
                                            <span className='cc-items-text2'>
                                                {propers.SeaTradeVol}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='cc-item-1'>
                                        <div className="cc-items-img-box" style={{background : `url(${propers.rect1}) no-repeat, linear-gradient(338deg, #212b21 0, #334233 100%)`,width:"48px", aspectRatio:"1/1", backgroundSize:"contain" , borderRadius:"8px",display:"flex",boxShadow: "-0.558477px 31.995127px 45.39px 5.61px rgba(25, 33, 44, 0.27)"}}>
                                            <img src={Owner} alt="" />
                                        </div>
                                        <div className="cc-items-text">
                                            <span className="cc-items-text1">
                                            PERSONAL LOOT
                                            </span>
                                            <span className='cc-items-text2'>
                                                {propers.PersonalLoot}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="cc-section-2-22" >
                                    <div className='cc-bottom-box' style={{backgroundImage:`url(${propers.rect2})`}}>
                                                <div className="cc-bottom-left">
                                                    <h3 className="cc-status-text">STATUS</h3>
                                                    <h3 className="cc-alive-text">ALIVE</h3>
                                                </div>
                                                <div className="cc-bottom-right" >
                                                    <button style={{backgroundColor : `${propers.btncolor}`}} className={`cc-animated-button ${isClicked ? 'cc-clicked' : ''} cc-bottom-right-hover${isClicked ? '1' : ''}`} id={``}
      onClick={handleClick}>SWAP</button>
                                                    <button style={{backgroundColor : `${propers.btncolor}`}} className={`cc-animated-button2 ${isClicked2 ? 'cc-clicked2' : ''} cc-bottom-right-hover2${isClicked2 ? '2' : ''}`} id={``}
      onClick={handleClick2}>CHART</button>
                                                </div>
                                    </div>

                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card

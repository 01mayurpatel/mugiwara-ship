import React, { useEffect ,useState} from 'react'
import './style.css'
import Cross from './Assets/cross.png'
import Card from './Cards/Card.jsx'
import Shipicon from './Assets/icon-ship.png'
import Etherum from './Assets/etherum.png'
import TopArrow from './Assets/prev.svg'
import BottomArrow from './Assets/next.svg'

import UssopBack from './Assets/usopp_back.png'
import SanjiBack from './Assets/sanji_back.png'
import ChopperBack from './Assets/chopper_back.png'
import NamiBack from './Assets/nami_back.png'
import ZoroBack from './Assets/zoro_back.png'
import FrankyBack from './Assets/franky_back.png'
import RobinBack from './Assets/robin_back.png'
import JinbeBack from './Assets/jinbe_back.png'
import BrookBack from './Assets/brook_back.png'
import LuffyBack from './Assets/luffy_back.png'


import Ussop from './Assets/usopp.png'
import Sanji from './Assets/sanji.png'
import Chopper from './Assets/chopper.png'
import Nami from './Assets/nami.png'
import Zoro from './Assets/zoro.png'
import Franky from './Assets/franky.png'
import Robin from './Assets/robin.png'
import Jinbe from './Assets/jinbe.png'
import Brook from './Assets/brook.png'
import Luffy from './Assets/luffy.png'


import rect1_Usopp from './Assets/rect1_usopp.png'
import rect1_Sanji from './Assets/rect1_sanji.png'
import rect1_Chopper from './Assets/rect1_chopper.png'
import rect1_Nami from './Assets/rect1_nami.png'
import rect1_Zoro from './Assets/rect1_zoro.png'
import rect1_Franky from './Assets/rect1_franky.png'
import rect1_Robin from './Assets/rect1_robin.png'
import rect1_Jinbe from './Assets/rect1_jinbe.png'
import rect1_Brook from './Assets/rect1_brook.png'
import rect1_Luffy from './Assets/rect1_luffy.png'

import rect2_Usopp from './Assets/rect2_usopp.png'
import rect2_Sanji from './Assets/rect2_sanji.png'
import rect2_Chopper from './Assets/rect2_chopper.png'
import rect2_Nami from './Assets/rect2_nami.png'
import rect2_Zoro from './Assets/rect2_zoro.png'
import rect2_Franky from './Assets/rect2_franky.png'
import rect2_Robin from './Assets/rect2_robin.png'
import rect2_Jinbe from './Assets/rect2_jinbe.png'
import rect2_Brook from './Assets/rect2_brook.png'
import rect2_Luffy from './Assets/rect2_luffy.png'

function Comp() {

  // -------------------------ANIMATIONS ON BUTTON CLICK
  
  function compClose(){
    const popupvis = document.querySelector('#popup-container')
    const collcont = document.querySelector('#collective-container');
    popupvis.style.display = "block";
    collcont.style.display= "none"
  }

  const [isClicked, setIsClicked] = useState(false);
  const [animTime, setanimTime] = useState('0.3');
  
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
        
  // -------------------------ANIMATIONS ON BUTTON CLICK ENDS  


  var count = 1;
  var mobcount =1;
  function navi(e){
    // var compare = count - e;
    // setanimTime('0.1');
    // if(compare>0){
      
      
    //   while(compare!=0){
    //     upperArrow();
        
    //     compare--;
    //   }
    // }else if(compare<0){
      
    //  if(compare==4){
    //   compare++;
    //  } 
    //   while(compare!=0){
    //     downArrow();
        
    //     compare++;
    //   }
    // }
    // setanimTime('0.3');
    
  }

  // -------------------------- ACTIONS ON SCROLL, UP DOWN BUTTONS, TOUCH MOVEMENTS 

  useEffect(() => {
    document.getElementById('App').style.height = window.innerHeight + 'px';
    const handleScroll = (e) => {
      // You can adjust the threshold value as needed
      const threshold = 100;

      if (e.deltaY > threshold) {
        downArrow();
      } else if (e.deltaY < -100) {
        upperArrow();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        upperArrow();
      } else if (e.key === 'ArrowDown') {
        downArrow();
      }
    };
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
  
    const handleTouchMove = (e) => {
      
    e.preventDefault();
  
    };
  
    const handleTouchEnd = (e) => {
      const deltaY = e.changedTouches[0].clientY - startY;
  
      if (deltaY > 50) {
        setTimeout(()=>{
          upperArrow();
        },200)
      }else if(deltaY==0){

      } else if (deltaY < 50) {
        console.log(deltaY);
        setTimeout(()=>{
          downArrow();
         
        },200)
      }
    };

    
  
    let startY = 0;
    window.addEventListener('wheel', handleScroll);
    document.getElementById('card-wrapper').addEventListener('touchstart', handleTouchStart);
    document.getElementById('card-wrapper').addEventListener('touchmove', handleTouchMove);
    document.getElementById('card-wrapper').addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);

    try {
      return () => {
        window.removeEventListener('wheel', handleScroll);
         document.getElementById('card-wrapper').removeEventListener('touchstart', handleTouchStart);
         document.getElementById('card-wrapper').removeEventListener('touchmove', handleTouchMove);
         document.getElementById('card-wrapper').removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('keydown', handleKeyDown);
      };
    } catch (error) {
      
    }
  }, []); 

  // -------------------------- ACTIONS ON SCROLL, UP DOWN BUTTONS, TOUCH MOVEMENTS ENDS

  // --------------------------FUNCTIONALITY FOR sliding up
  
  function upperArrow() {
    document.getElementsByClassName('upper-arrow')[0].style.transform="scale(0.8)";
    setTimeout(()=>{

      document.getElementsByClassName('upper-arrow')[0].style.transform="scale(1)";
    },250)
    if(window.innerWidth>500){
      if(count==1){
        count=5;
      }else{
        count--;
      }
      for(var i=1;i<=5;i++){
        if(i==count){
          document.getElementById(`navigator-${i}`).style.backgroundColor = "white";
        }else{
        document.getElementById(`navigator-${i}`).style.backgroundColor = "transparent";
  
        }
      }
      if(count==5){
        document.getElementById('box-5').style.top="0%";
        document.getElementById('box-1').style.top="100%";
  
        document.getElementById('box-2').style.transition="none";
        document.getElementById('box-2').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-2').style.transition=`top ${animTime}s ease-in-out`;
        },0)
      }
      else if(count==4){
        document.getElementById('box-4').style.top="0%";
        document.getElementById('box-5').style.top="100%";
  
        document.getElementById('box-1').style.transition="none";
        document.getElementById('box-1').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-1').style.transition=`top ${animTime}s ease-in-out`;
        },0)
      }else {
      
        document.getElementById(`box-${count}`).style.top="0%";
        document.getElementById(`box-${count+1}`).style.top="100%";
  
        document.getElementById(`box-${count+2}`).style.transition="none";
        document.getElementById(`box-${count+2}`).style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById(`box-${count+2}`).style.transition=`top ${animTime}s ease-in-out`;
        },0)
      }
    }else{
      if(mobcount==1){
        mobcount=10;
      }else{
        mobcount--;
      }
      if(mobcount==10){
        document.getElementById('box-r-10').style.top="0%";
        document.getElementById('box-r-1').style.top="100%";
  
        document.getElementById('box-r-2').style.transition="none";
        document.getElementById('box-r-2').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-2').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==9){
        document.getElementById('box-r-9').style.top="0%";
        document.getElementById('box-r-10').style.top="100%";
  
        document.getElementById('box-r-1').style.transition="none";
        document.getElementById('box-r-1').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-1').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==8){
        document.getElementById('box-r-8').style.top="0%";
        document.getElementById('box-r-9').style.top="100%";
  
        document.getElementById('box-r-10').style.transition="none";
        document.getElementById('box-r-10').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-10').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==7){
        document.getElementById('box-r-7').style.top="0%";
        document.getElementById('box-r-8').style.top="100%";
  
        document.getElementById('box-r-9').style.transition="none";
        document.getElementById('box-r-9').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-9').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==6){
        document.getElementById('box-r-6').style.top="0%";
        document.getElementById('box-r-7').style.top="100%";
  
        document.getElementById('box-r-8').style.transition="none";
        document.getElementById('box-r-8').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-8').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==5){
        document.getElementById('box-r-5').style.top="0%";
        document.getElementById('box-r-6').style.top="100%";
  
        document.getElementById('box-r-7').style.transition="none";
        document.getElementById('box-r-7').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-7').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==4){
        document.getElementById('box-r-4').style.top="0%";
        document.getElementById('box-r-5').style.top="100%";
  
        document.getElementById('box-r-6').style.transition="none";
        document.getElementById('box-r-6').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-6').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==3){
        document.getElementById('box-r-3').style.top="0%";
        document.getElementById('box-r-4').style.top="100%";
  
        document.getElementById('box-r-5').style.transition="none";
        document.getElementById('box-r-5').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-5').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==2){
        document.getElementById('box-r-2').style.top="0%";
        document.getElementById('box-r-3').style.top="100%";
  
        document.getElementById('box-r-4').style.transition="none";
        document.getElementById('box-r-4').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-4').style.transition="top 0.3s ease-in-out";
        },100)
      }else if(mobcount==1){
        document.getElementById('box-r-1').style.top="0%";
        document.getElementById('box-r-2').style.top="100%";
  
        document.getElementById('box-r-3').style.transition="none";
        document.getElementById('box-r-3').style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById('box-r-3').style.transition="top 0.3s ease-in-out";
        },100)
      }else {
      
        document.getElementById(`box-r-${mobcount}`).style.top="0%";
        document.getElementById(`box-r-${mobcount+1}`).style.top="100%";
  
        document.getElementById(`box-r-${mobcount+2}`).style.transition="none";
        document.getElementById(`box-r-${mobcount+2}`).style.top="-100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-${mobcount+2}`).style.transition="top 0.3s ease-in-out";
        },0)
      }
    }
   
  }

  // --------------------------FUNCTIONALITY FOR sliding up ENDS-----------------------
  

  // --------------------------FUNCTIONALITY FOR sliding down
  function downArrow() {
    document.getElementsByClassName('bottom-arrow')[0].style.transform="scale(0.8)";
    setTimeout(()=>{

      document.getElementsByClassName('bottom-arrow')[0].style.transform="scale(1)";
    },250)
    if(window.innerWidth>500){
      if(count==5){
        count=1;
      }else{
        count++;
      }
      for(var i=1;i<=5;i++){
        if(i==count){
          document.getElementById(`navigator-${i}`).style.backgroundColor = "white";
        }else{
        document.getElementById(`navigator-${i}`).style.backgroundColor = "transparent";
  
        }
      }
      if(count==1){
        document.getElementById('box-5').style.top="-100%";
        document.getElementById('box-1').style.top="0%";
  
        document.getElementById('box-2').style.transition="none";
        document.getElementById('box-2').style.top="100%";
        setTimeout(()=>{
          
          document.getElementById('box-2').style.transition=`top ${animTime}s ease-in-out`;
        },0)
      }else if(count==5){
        document.getElementById('box-4').style.top="-100%";
        document.getElementById('box-5').style.top="0%";
  
        document.getElementById('box-1').style.transition="none";
        document.getElementById('box-1').style.top="100%";
        setTimeout(()=>{
          
          document.getElementById('box-1').style.transition=`top ${animTime}s ease-in-out`;
        },0)
  
  
      } 
      else{
        document.getElementById(`box-${count-1}`).style.top="-100%";
        document.getElementById(`box-${count}`).style.top="0%";
  
        document.getElementById(`box-${count+1}`).style.transition="none";
        document.getElementById(`box-${count+1}`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-${count+1}`).style.transition=`top ${animTime}s ease-in-out`;
        },0)
  
  
      }
    }else{
      if(mobcount==10){
        mobcount=1;
      }else{
        mobcount++;
      }
      if(mobcount==1){
        document.getElementById(`box-r-10`).style.top="-100%";
        document.getElementById(`box-r-1`).style.top="0%";
  
        document.getElementById(`box-r-2`).style.transition="none";
        document.getElementById(`box-r-2`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-2`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==10){
        document.getElementById(`box-r-9`).style.top="-100%";
        document.getElementById(`box-r-10`).style.top="0%";
  
        document.getElementById(`box-r-1`).style.transition="none";
        document.getElementById(`box-r-1`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-1`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==9){
        document.getElementById(`box-r-8`).style.top="-100%";
        document.getElementById(`box-r-9`).style.top="0%";
  
        document.getElementById(`box-r-10`).style.transition="none";
        document.getElementById(`box-r-10`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-10`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==8){
        document.getElementById(`box-r-7`).style.top="-100%";
        document.getElementById(`box-r-8`).style.top="0%";
  
        document.getElementById(`box-r-9`).style.transition="none";
        document.getElementById(`box-r-9`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-9`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==7){
        document.getElementById(`box-r-6`).style.top="-100%";
        document.getElementById(`box-r-7`).style.top="0%";
  
        document.getElementById(`box-r-8`).style.transition="none";
        document.getElementById(`box-r-8`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-8`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==6){
        document.getElementById(`box-r-5`).style.top="-100%";
        document.getElementById(`box-r-6`).style.top="0%";
  
        document.getElementById(`box-r-7`).style.transition="none";
        document.getElementById(`box-r-7`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-7`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==5){
        document.getElementById(`box-r-4`).style.top="-100%";
        document.getElementById(`box-r-5`).style.top="0%";
  
        document.getElementById(`box-r-6`).style.transition="none";
        document.getElementById(`box-r-6`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-6`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==4){
        document.getElementById(`box-r-3`).style.top="-100%";
        document.getElementById(`box-r-4`).style.top="0%";
  
        document.getElementById(`box-r-5`).style.transition="none";
        document.getElementById(`box-r-5`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-5`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==3){
        document.getElementById(`box-r-2`).style.top="-100%";
        document.getElementById(`box-r-3`).style.top="0%";
  
        document.getElementById(`box-r-4`).style.transition="none";
        document.getElementById(`box-r-4`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-4`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else if(mobcount==2){
        document.getElementById(`box-r-1`).style.top="-100%";
        document.getElementById(`box-r-2`).style.top="0%";
  
        document.getElementById(`box-r-3`).style.transition="none";
        document.getElementById(`box-r-3`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-3`).style.transition="top 0.3s ease-in-out";
        },200)
  
      }else{
        document.getElementById(`box-r-${mobcount-1}`).style.top="-100%";
        document.getElementById(`box-r-${mobcount}`).style.top="0%";
  
        document.getElementById(`box-r-${mobcount+1}`).style.transition="none";
        document.getElementById(`box-r-${mobcount+1}`).style.top="100%";
        setTimeout(()=>{
          
          document.getElementById(`box-r-${mobcount+1}`).style.transition="top 0.3s ease-in-out";
        },200)
      }
    }
    
   }

  // --------------------------FUNCTIONALITY FOR sliding down ENDS-------------------------


  
  return (


    // ----------------------TIDE'S RESET TIMER--------------------------------------------
    useEffect(() => {
      setInterval(() => {
       

        
        
        // UPDATE TIME HERE ******************************************
        let hourvalues = 17;
        let minValues = "52";


        document.getElementById('hour-value').innerText = hourvalues;
        document.getElementById('min-value').innerText = minValues;
        let hhh = document.getElementsByTagName('circle')[0];



        hhh.style.setProperty('--animation-progress', (836 - (836 * hourvalues) / 22));

        setTimeout(() => {
          hhh.style.strokeDashoffset = 836 - ((836 * hourvalues) / 22);
        }, 9000)

      }, 1000);

    }, []),

    <div className='App' id='App'>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>


        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nexa:wght@800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas Neue:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=MADE TOMMY:wght@700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400&display=swap"
        />
      </head>
      <div className="left-box-wrapper">

        <div className='left-box    '>
          <div className="entire-fleet">
            ENTIRE FLEET
            <img className='ship-icon' src={Shipicon} />

          </div>
          <div className='navigator'>
            <div id='navigator-1' onClick={() => navi(1)}></div>
            <div id='navigator-2'onClick={() => navi(2)}></div>
            <div id='navigator-3' onClick={() => navi(3)}></div>
            <div id='navigator-4' onClick={() => navi(4)}></div>
            <div id='navigator-5' onClick={() => navi(5)}></div>
          </div>
        </div>


      </div>



      {/*---------------------------------------CARDS-------------------------------------*/}



      <div className="middle-box-wrapper" id='middle-box-wrapper'>
        <div className='upper-arrow'  onClick={upperArrow} >
          <img src={TopArrow} alt="" />
        </div>

        <div className='card-wrapper' id='card-wrapper'>
          <div className="box-stat">
            <div className="card-box" id='box-1'>
              <div className='card-box1' id='box-r-1'>
                
                <Card
                  ids ={1} 
                  backimg={LuffyBack}
                  character={Luffy}
                  color1="#d8bf87"
                  bgcolor="#19212c"
                  btncolor="#bfa874"

                  scndcolor = "#ebd091"

                  rect1={rect1_Luffy}
                  rect2={rect2_Luffy}


                  doubloonValue="$0.00000143"
                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"
                />
              </div>
              <div className='card-box2' id='box-r-2'>
              <Card
                  ids ={2}
                  backimg={SanjiBack}
                  character={Sanji}
                  color1="#d9b686"
                  bgcolor="#261f1b"
                  btncolor="#ddab64"
                  scndcolor = "#ffc87a"
                  doubloonValue="$0.00000143"
                  rect1={rect1_Sanji}
                  rect2={rect2_Sanji}

                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"

                />
              </div>
            </div>
            <div className="card-box" id='box-2'>
              <div className='card-box1' id='box-r-3'>
                <Card
                ids ={3}
                  backimg={NamiBack}
                  character={Nami}
                  color1="#d9b086"
                  bgcolor="#222226"
                  btncolor="#dc9653" 
                  scndcolor = "#fff"
                  
                  doubloonValue="$0.00000143"
                  rect1={rect1_Nami}
                  rect2={rect2_Nami}

                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"

                />
              </div>
              <div className='card-box2' id='box-r-4'>
                <Card
                ids ={4}
                  backimg={ChopperBack}
                  character={Chopper}
                  color1="#d99186"
                  bgcolor="#2b1c1c"
                  btncolor="#db8980"
                  scndcolor = "#ff9082"
                  rect1={rect1_Chopper}
                  rect2={rect2_Chopper}


                  doubloonValue="$0.00000143"
                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"
                />
              </div>
            </div>
            <div className="card-box" id='box-3'>
              <div className='card-box1' id='box-r-5'>
                <Card
                ids ={5}
                  backimg={ZoroBack}
                  character={Zoro}
                  color1="#86d9bc"
                  bgcolor="#19192b"
                  btncolor ="#6cd2ac"
                  scndcolor = "#18ffba"
                  doubloonValue="$0.00000143"
                  rect1={rect1_Zoro}
                  rect2={rect2_Zoro}

                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"

                />
              </div>
              <div className='card-box2' id='box-r-6'>
                <Card
                ids ={6}
                  backimg={FrankyBack}
                  character={Franky}
                  color1="#86c4d9"
                  bgcolor="#17251f"
                  rect1={rect1_Franky}
                  rect2={rect2_Franky}
                  btncolor="#63bbd8"
                  scndcolor = "#6edbff"

                  doubloonValue="$0.00000143"
                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"
                />
              </div>
            </div>
            <div className="card-box" id='box-4'>
              <div className='card-box1' id='box-r-7'>
                <Card
                ids ={7}
                  backimg={RobinBack}
                  character={Robin}
                  color1="#a086d9"
                  bgcolor="#191e2b"
                  btncolor="#a57efc"
                  scndcolor = "#ebd091"
                  doubloonValue="$0.00000143"
                  rect1={rect1_Robin}
                  rect2={rect2_Robin}

                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"

                />
              </div>
              <div className='card-box2' id='box-r-8'>
                <Card
                ids ={8}
                  backimg={JinbeBack}
                  character={Jinbe}
                  color1="#86a2d9"
                  bgcolor="#2b271e"
                  btncolor="#658ad2"
                  scndcolor = "#ebd091"
                  rect1={rect1_Jinbe}
                  rect2={rect2_Jinbe}


                  doubloonValue="$0.00000143"
                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"
                />
              </div>
            </div>
            <div className="card-box" id='box-5' >
              <div className='card-box1' id='box-r-9'>
                <Card
                ids ={9}
                  backimg={BrookBack}
                  character={Brook}
                  color1="#d9d386"
                  bgcolor="#2b2b29"
                  btncolor="#d0ca81"
                  scndcolor = "#ebd091"
                  doubloonValue="$0.00000143"
                  rect1={rect1_Brook}
                  rect2={rect2_Brook}

                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"

                />
              </div>
              <div className='card-box2' id='box-r-10'>
                <Card
                ids ={10}
                  backimg={UssopBack}
                  character={Ussop}
                  color1="#d9cb86"
                  bgcolor="#222c22"
                  btncolor="#b29f47"
                  rect1={rect1_Usopp}
                  rect2={rect2_Usopp}
                  scndcolor = "#ebd091"

                  doubloonValue="$0.00000143"
                  tidalShift="0.00%"
                  sunken="0.13 ETH"
                  TresureBoard="$1,047,303"
                  CrewSize="1,245"
                  SeaTradeVol="$2,504,374"
                  PersonalLoot="3,058,351"
                />
              </div>
            </div>
            
          </div>

        </div>

        <div className='bottom-arrow'  onClick={downArrow}>
          <img src={BottomArrow} alt="" />
        </div>
      </div>












      <div className="right-box-wrapper">

        <div className='right-box' >
        <div className='cross-box' onClick={compClose}>
            <img src={Cross} alt="" />
        </div>
          <div className="skill-wrapper">
            <div className="skill">
              <div className="outer">
                <div className="inner">
                  <div className="progress-inside">
                    <span>TIDE'S RESET</span>
                    <div className='time-wrapper2'>
            <div className="time-box">
              <div className="time-box-1">
                <div className="time-box-11">
                  <div id="hour-value">17</div>
                  <div>:</div>
                  <div id="min-value">52</div>
                </div>
                <div className="time-box-2">
                  <div id="hour-sym">HRS</div>
                  <div></div>
                  <div id="min-sym">MINS</div>
                </div>
              </div>

            </div>
          </div>
                  </div>
                </div>
              </div>
              <svg className='progress-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px" overflow="visible">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="rgb(132,16,255)" />
                    <stop offset="100%" stop-color="rgb(15,77,255)" />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="133" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <div className='time-wrapper'>
            <div className="time-box">
              <div className="time-box-1">
                <div className="time-box-11">
                  <div id="hour-value">17</div>
                  <div>:</div>
                  <div id="min-value">52</div>
                </div>
                <div className="time-box-2">
                  <div id="hour-sym">HRS</div>
                  <div></div>
                  <div id="min-sym">MINS</div>
                </div>
              </div>

            </div>
          </div>

          <div className="crew-share-wrapper">
            <div className="crew-share-box">

              <div className="crew-share">
                <div id="crew-share-name">CREW'S SHARE</div>
                <div id="crew-share-value">1,234,567</div>


              </div>
              <div className="bounty-harvest">
                <div id="bounty-harvest-name">BOUNTY HARVEST</div>
                <div id="bounty-harvest-value">
                  0.17
                  <img src={Etherum} alt="" />
                </div>

              </div>

            </div>


          </div>
          <div className="right-two-buttons-wrapper">
            <div className="two-button-box">
              <div  className={`animated-button ${isClicked ? 'clicked' : ''} two-btn-b1 two-btn-b11${isClicked ? '1' : ''}`} onClick={handleClick}>
                CLAIM
                <br />
                YER BOOTY
              </div>
              <div  className={`animated-button2 ${isClicked2 ? 'clicked2' : ''} two-btn-b2 two-btn-b22${isClicked2 ? '2' : ''}`} id={``}
      onClick={handleClick2}>
                BOOSTED CLAIM
                <br />
                +33% TRESURE
              </div>

            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Comp

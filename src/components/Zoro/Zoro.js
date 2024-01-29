import React, { useEffect,useState } from 'react'
import Chart from 'chart.js/auto';
import Comp from '../../Collective/Comp'
// import Exit from './Assets/img/exit.png'
import './Assets/css/index.css'
import etherum from './Assets/img/etherum.png'
import shipTop from './Assets/img/ship-top.png'
import main_image from './Assets/img/main_image.png'
import luffy_icon from './Assets/img/luffy_icon.png'

import holders from './Assets/img/holders.png'
import owner from './Assets/img/owner.png'
import mcap from './Assets/img/mcap.png'
import Exitlink from './Assets/img/ext_link.png'
import LastBox from './Assets/img/lastbox.png'
function Luffy() {
  
  // document.getElementById('z-collective-section').style.display="none";
  
  
  
  const openCollective = () => {
    const popupvis = document.querySelector('#popup-container');
    const collcont = document.querySelector('#collective-container');
    popupvis.style.display = 'none';
    collcont.style.display = 'block';
  };

  const closeHandler = () => {
    const popupvis = document.querySelector('#popup-container');
    popupvis.style.display = 'none';
  };

  useEffect(() => {
    setInterval(() => {
      // ... Your interval logic

      // UPDATE TIME HERE ******************************************
      
    //   let z_hour_value = 17;
    //   let z_min_value  = 12;
    //   // ************************************************************
      
    //   let z_hourPoint = document.getElementById('z-hour_point');
    //   let z_min_point = document.getElementById('z-min_point');
    //  if(z_hour_value<10){
    //   z_hourPoint.innerText='0'+z_hour_value;
    //  }else{
    //   z_hourPoint.innerText=z_hour_value;
    //  }
    //  if(z_min_value<10){
    //   z_min_point.innerText='0'+z_min_value;
    //  }else{
    //   z_min_point.innerText=z_min_value;
    //  }
      
      

    //   let zhh = document.getElementById('z-hh');

    //   let hr_dot = document.querySelector('.hr_dot');
      
    //   zhh.style.strokeDashoffset = 616 - ((616 * z_hour_value) / 22);
      
    //   hr_dot.style.transform = `rotate(${z_hour_value * 16.3636}deg)`;

      // mayur = mayur+1;
      

    },1000);

    // Get the SVG element
    const svg = document.getElementById("z-clockSvg");

    // Create a linear emn
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", "strokeGradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "0%");

    // Add gradient stops
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.style.stopColor = "rgb(248,174,253)";

    const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "50%");
    stop3.style.stopColor = "rgb(198,136,227)";

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.style.stopColor = "rgb(118,71,182)";

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);

    // Append the gradient to the SVG
    svg.appendChild(gradient);

    // Apply the gradient to the stroke
    const circle = svg.querySelector("circle:nth-child(2)");
    circle.style.stroke = "url(#strokeGradient)";
    circle.style.strokeWidth = "6";
    circle.style.strokeDasharray = "616";
  }, []);
  Chart.defaults.plugins.legend.display = false;

  function myFunction() {
    var copyText = '0xbb02647c4ed460d08df6254d69f11217c52ad326';
    navigator.clipboard.writeText(copyText);
    // Additional logic for your myFunction, if needed
  }
  useEffect(() => {


    const xValues = [1, 1, 1, 1, 2, 2, 2, 2, 3, 15, 3, 4, 4, 4];
    const yValues = [null, 2, 2.2, 2.5, 3, 2.7, 3.5, 4, 3.8, 4.7, 3.5, 3.6, 2.5, 2, 3, 2.2, null, null, null];
    const pointRadius = xValues.map((value) => (value === 15 ? 5 : 0));
    let  count = 0;
    // var count = 0;
    // var vals = 0;
    // Find the index where y is 5
    const yIndex = yValues.indexOf(5);
    const xValueAtIndex = xValues[yIndex];
    console.log(xValueAtIndex);
    const existingChart = Chart.getChart("myChart");
    if (existingChart) {
      existingChart.destroy();
    }

    // Create the new chart


    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          data: yValues,
          // backgroundColor: "rgba(255,255,255,0.1)", // Color of the shadow
          borderColor: "#8181c6",
          backgroundColor: "white",

          // Color of the line
          borderWidth: 3,
          pointRadius: pointRadius,
        }, {
          labels: 'Shadowing',
          data: yValues.map(() => 0),
          backgroundColor: (context) => {
            if (!context.chart.chartArea) {
              return;
            }
            const { ctx, data, chartArea: { top, bottom } } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, '#8181c6')
            gradientBg.addColorStop(0.2, '#8181c6a1')
            gradientBg.addColorStop(0.5, '#8181c666')
            gradientBg.addColorStop(0.9, 'transparent')
            gradientBg.addColorStop(1, 'transparent')
            return gradientBg;
          },
          borderColor: 'red',
          borderWidth: 1,
          fill: 0,
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          x: {
            gridLines: {
              display: false,
              borderWidth: 1,
            },
            ticks: {
              stepSize: 1,
              callback: function (value, index, values) {
                if(count>=4){
                  count=0;
                }
                if ((index+1) % 3 !== 0) {
                  return "";
                }
                else {
                  count++
                  // count = count + 1;
                  return 'T' + count;
                }
                
              }
            },
          },
          y: {
            gridLines: {

              borderDash: [15, 5],
            },
            min: 1,
            max: 5,
            ticks: {

              stepSize: 1,
              callback: function (value, index, values) {
                return 'P' + value;
              }
            },
          },
        }
      },
      plugins: [{

        beforeDraw: function (chart) {
          const xScale = chart.scales['x'];
          const yScale = chart.scales['y'];

          if (xScale && yScale) {
            const xValueAtIndexPixel = xScale.getPixelForValue(xValueAtIndex);
            const yValueFivePixel = yScale.getPixelForValue(5);
            var ctx = chart.ctx;  // Use 'chart.ctx' instead of 'chart.chart.ctx'
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chart.scales['x'].getPixelForValue(9), chart.scales['y'].getPixelForValue(2));
            // console.log(chart.scales['x'].getPixelForValue(15))
            ctx.strokeStyle = 'rgb(130, 130, 201)';
            ctx.lineWidth = 3;
            ctx.lineTo(chart.scales['x'].getPixelForValue(9), chart.scales['y'].getPixelForValue(4.7));
            ctx.stroke();
            ctx.restore();
          }
        }

      }]
    });

    // Call myFunction when the component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts



  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* BOOTSTRAP LINKS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      {/* FONT AWESOME LINK */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      {/* css */}

      
    
      <div id='z-individual-one' className='z-main-box-padd'>
        <div className="z-container-fluid ">
                    
        <button className='z-top-cross-responsive'>
                    <i class="fa-regular fa-circle-xmark"></i>
                    
                    </button>
          <div className="z-main-flexing">
            <div className="z-main-box z-flexing-1">
              <div className="z-main-box1">
                <div className="d-flex z-left-buttons justify-content-around">
                  <button className="z-left-btn px-5">SWAP </button>
                  <button className="z-left-btn px-5">CHART</button>
                </div>
                <div style={{ height: "93%" }}>
                  <div style={{ height: "100%", borderBottomLeftRadius: "14px", borderBottomRightRadius: "14px", overflow: "hidden" }}>
                    <div className=" z-left-down-main pb-2">
                      <div className='z-left-down-main-hidd'>
                        <div className="z-left-down-1 d-flex">
                          <div className="z-left-img-1-box">
                            <h2 className="z-zoro_text"></h2>
                          </div>
                          <img className="z-left-img-1" src={main_image} alt="true" />
                        </div>
                      </div>
                      <div className="z-left-down-2   p-1 row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3 z-img-2-box">
                          <img className=" z-left-img-2" src={luffy_icon} alt="true" />
                        </div>
                        <div className="col-lg-9 col-sm-9  col-md-9  z-two-img text-start pl-4">
                          <h5 id="z-monkey-d">RORONOA ZORO</h5>
                          <p className="pb-0 pt-0 pb-0 mb-0" id="z-TheRubberBanded">The Sword-weilding sleepwalker</p>
                          <h1 id="z-alive-text">ALIVE</h1>
                          {/* Set styling of dead-text from display:none to display:block */}
                          <h1 id="z-dead-text">DEAD</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  mt-2 z-right-side   z-flexing-2 " style={{ height: "100%", paddingBottom: "0px", paddingRight: "0", paddingTop: "0", paddingLeft: "0" }}>
              <div style={{ height: "100%" }} className="z-right-side-box">
                <div className=" z-right-div-top" style={{ height: "10%" }}>
                  <h1 id="z-metricData1" className="py-2">METRIC DATA</h1>
                  <h3 id="z-metricData2" className="py-2">METRIC DATA</h3>
                  <div className='d-flex z-top-ship-box'>
                    <button className='z-top-ship'  onClick={openCollective}>
                    <span >
                      <img src={shipTop} /> ENTIRE FLEET
                    </span>
                    </button>
                    <button onClick={closeHandler} className='z-top-ship-cross'>
                    
                    <i class="fa-regular fa-circle-xmark"></i>
               
                    </button>
                  </div>
                </div>
                <div style={{ height: "80%" }} className="z-bb-1">
                  <div className="z-boxright1" style={{ height: "100%" }}>
                    <div className="z-right-flexing mt-2" style={{ height: "100%" }}>
                      <div className="z-right-flexing-1">
                        <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                          <div className="z-right-div-1 ">
                            <div className="z-right-div-11 mx-3 z-under">
                              <p className="mb-0 pb-2 z-right-p z-right-p-w">DOUBLOONS VALUE</p>
                              <h4 className="mt-0 pt-0  z-right-h z-right-h-top">$ 0.00000143</h4>
                            </div>
                            <div className="z-right-div-12 mx-3 mt-2">
                              <p className="mb-0 pb-2 z-right-p z-right-p-w ">TIDAL SHIFTS</p>
                              <h4 className="mt-0 pt-0 z-right-h z-right-h-top">0.00%</h4>
                            </div>
                            <div className="z-link-box mt-2">
                              <div className="d-flex z-link-main justify-content-between" style={{ maxWidth: "100%", overflow: "hidden" }} onClick={myFunction}>
                                <p id="z-link-copy" className=" py-1 ">0xbb02647c4ed.....217cc52ad326</p>
                                <span style={{ borderLeft: "1px solid white" }}>
                                  <a href="#"> <img id="z-copy-icon" src={Exitlink} />
                                  </a>
                                </span>
                              </div>
                            </div>

                          </div>
                          <div className="z-right-div-2 z-impp mt-1 z-right-ligth-bg-div p-1 d-flex z-glow-background justify-content-between ">
                            <div className=" px-2 pl-3 " style={{paddingBottom:"0.3rem"}}>
                              <p className="mb-0 pb-1 mt-1 z-right-p">SUNKEN TRESURE</p>
                              <h4 className="mt-0 pt-0 pb-0 z-right-h">0.13 <span>ETH</span></h4>
                            </div>
                            <img style={{ width: "20px",opacity:"0.8" }} className="z-right-div-2-img my-auto mr-3" src={etherum} alt="true" />
                          </div>
                          <div id="z-time" className="w-100 ">
                            <div className="z-circle mx-auto my-auto" >
                              <div className="z-dots hr_dot" />
                              <svg id="z-clockSvg">
                                <circle cx={75} cy={75} r={98} />
                                <circle cx={75} cy={75} r={98} id="z-hh" />
                              </svg>
                              <div id="z-hours">
                                <div className="z-clock-text">
                                  <p className="z-tides-rest">TIDE'S RESET</p>
                                  <div className="d-flex">
                                    <h2 id="z-hour_point">00</h2>
                                    <h2 className="px-2">:</h2>
                                    <h2 id="z-min_point">00</h2>
                                  </div>
                                  <div className="d-flex">
                                    <h6 id="z-HRS">HRS</h6>
                                    <h2 className="px-3" />
                                    <h6 id="z-MIN">MIN</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className=" z-right-div-pad z-right-flexing-2">
                        <div className="d-flex flex-column z-line-box" style={{ height: "44%", maxHeight: "300pxw" }}>
                          <div className="z-line-chart">
                            <canvas id="myChart" />
                          </div>

                        </div>
                        <div className='z-right-bottom-position'>
                          <div className="row z-right-div-pad pl-3">

                            <div className="col-6 " style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                              <div className="z-right-div-2 z-rightdivtype2 mb-2 z-right-ligth-bg-div z-glow-background px-2 mt-3 d-flex justify-content-between ">
                                <div className="z-padding-3l">
                                  <p className="mb-0 pb-1 z-right-p ">TRESURE BOARD</p>

                                  <h4 className="mt-0 pt-0 pb-0 z-right-h">$1,047,303</h4>


                                </div>
                                <img className="z-right-botom-2-img1  my-auto" src={mcap} alt="true" />
                              </div>
                            </div>
                            <div className="col-6 " style={{ paddingLeft: "0px" }}>
                              <div className="z-right-div-2 z-rightdivtype2 mb-2 z-right-ligth-bg-div z-glow-background px-2 mt-3 d-flex justify-content-between ">
                                <div className="z-padding-3l">
                                  <p className="mb-0 pb-1 z-right-p ">CREW SIZE</p>

                                  <h4 className="mt-0 pt-0 pb-0 z-right-h">1,245</h4>


                                </div>
                                <img className="z-right-botom-2-img2  my-auto" src={holders} alt="true" />
                              </div>
                            </div>
                            <div className="col-6 mb-2" style={{ paddingRight: "0px", paddingLeft: "0" }}>
                              <div className="z-right-div-2 z-rightdivtype2 z-right-ligth-bg-div px-2 z-glow-background d-flex justify-content-between">
                                <div className=" z-padding-3l">
                                  <p className="mb-0 pb-1 z-right-p">PERSONAL LOOT</p>
                                  {/* <div className="d-flex justify-content-between"> */}
                                  <h4 className="mt-0 pt-0 pb-0 z-right-h">3,058,351</h4>
                                  {/* </div> */}
                                </div>
                                <img className=" z-right-botom-2-img3  my-auto" src={owner} alt="true" />
                              </div>
                            </div>
                            <div className="col-6 " style={{ paddingLeft: "0px" }}>
                              <div className="z-right-div-2 z-rightdivtype2 mb-2 z-right-ligth-bg-div z-glow-background px-2  d-flex justify-content-between ">
                                <div className="z-padding-3l">
                                  <p className="mb-0 pb-1 z-right-p " >SEA TRADE VOLUME</p>

                                  <h4 className="mt-0 pt-0 pb-0 z-right-h">$2,504,374</h4>


                                </div>
                                <img className="z-right-botom-2-img4  my-auto" src={LastBox} alt="true" />
                              </div>
                            </div>
                          </div>
                          <div className=" mt-2" style={{width:"100%"}}>

                         
                            <button style={{width:"inherit"}}>
                               
                              <div className=''>
                              <div className="z-right-bottom-div-box   " >
                              
                                <div className="z-right-bottom-div px-2  z-onclickeffect row " style={{  marginLeft: "auto", marginRight: "auto" }}>
                               
                                  <div className="z-bottom-div-left p-2 col-4">
                                    <div className="text-center">
                                      <p className="mb-0 pb-1 z-right-p z-right-p-w text-center">Crew's Share</p>
                                      <div >
                                        <h4 style={{marginTop:"4px"}} className=" pt-0 pb-0  z-right-h z-bottom-moddle-h ">1,234,567
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="z-bottom-div-center col-4">
                                    {/* <a href="#" target="_blank"> */}
                                    <div className="py-2">
                                      <div className="justify-content-between text-center  pt-1">
                                        <h4 className="mt-0 pt-0 pb-0 z-right-h z-right-h-1  z-bottom-moddlle-h ">
                                          ClAIMABLE</h4>
                                        <h4 className="mt-0 pt-0 pb-0 z-right-h pl-2 z-bottom-moddlle-h">BOOTY
                                        </h4>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </div>
                                  <div className="z-bottom-div-right col-4">
                                    <div className="  py-2">
                                      <p className="mb-0 pb-1 z-right-p z-right-p-w text-center">Bounty Harvest</p>
                                      <div className="d-flex justify-content-center">
                                        <h4 style={{marginTop:"4px"}} className=" pt-0 pb-0 z-bottom-moddle-h z-right-h pr-3">
                                          0.174</h4>
                                        <img style={{ width: "10px" }} className="z-right-botom-2-img my-auto " src={etherum} alt="true" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </button>
                          </div>
                          <div className="z-bottom-div-main  " style={{ marginTop: "15px" }}>
                            <div style={{width:"100%"}}>
                              <button style={{width:"inherit"}}>
                              <div className="z-right-bottom-div-box1  z-right-div-pad  pl-4" >
                                <div className="z-right-bottom-div1 z-onclickeffect   row " >

                                  <div className="z-bottom-div-center col-12">
                                    {/* <a href="#" target="_blank"> */}
                                    <div className="p-2">
                                      <div className="justify-content-between text-center  " >
                                        <h4 className="mt-0 pt-0 pb-0 z-right-h z-bottom-moddlle-h  ml-auto" >
                                          BOOSTED CLAIM :</h4>
                                        <h4 className=" pt-0 pb-0 z-right-h z-bottom-moddlle-h z-bottom-moddlle-h2">+33% BOUNTY HARVEST
                                        </h4>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </div>

                                </div>
                              </div>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Luffy

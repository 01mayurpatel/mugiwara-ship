import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';
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
function Usopp() {

  const openCollective1 = () => {
    const popupvis = document.querySelector('#popup-container');
    const collcont = document.querySelector('#collective-container');
    popupvis.style.display = 'none';
    collcont.style.display = 'block';
  };

  const closeHandler1 = () => {
    const popupvis = document.querySelector('#popup-container');
    popupvis.style.display = 'none';
  };
  useEffect(() => {
    
      // ... Your interval logic

      // UPDATE TIME HERE ******************************************
      
      let hour_value = 21;
      let min_value  = 12;
      // ************************************************************
      
      let hourPoint = document.getElementById('hour_point');
      let min_point = document.getElementById('min_point');
     if(hour_value<10){
      hourPoint.innerText='0'+hour_value;
     }else{
      hourPoint.innerText=hour_value;
     }
     if(min_value<10){
      min_point.innerText='0'+min_value;
     }else{
      min_point.innerText=min_value;
     }
      
      

      let hh = document.getElementById('hh');

      let hr_dot = document.querySelector('.hr_dot');
      
      hh.style.strokeDashoffset = 616 - ((616 * hour_value) / 22);
      
      hr_dot.style.transform = `rotate(${hour_value * 16.3636}deg)`;

      // mayur = mayur+1;
      


    // Get the SVG element
    const svg = document.getElementById("clockSvg");

    // Create a linear gradient
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", "strokeGradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "0%");

    // Add gradient stops
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.style.stopColor = "rgb(74,161,73)";

    const stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "50%");
    stop3.style.stopColor = "rgb(88,169,88)";

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.style.stopColor = "rgb(103,179,104)";

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
          borderColor: "rgb(182,252,159)",
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
            gradientBg.addColorStop(0, 'rgb(182,252,159,0.8)')
            gradientBg.addColorStop(0.2, 'rgb(182,252,159,0.5)')
            gradientBg.addColorStop(0.5, 'rgb(182,252,159,0.4)')
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
            ctx.strokeStyle = 'rgb(182,252,159)';
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

      

      <div className='main-box-padd'>
        <div className="container-fluid ">
                    
        <button className='top-cross-responsive'>
                    <i class="fa-regular fa-circle-xmark"></i>
                    
                    </button>
          <div className="main-flexing">
            <div className="main-box flexing-1">
              <div className="main-box1">
                <div className="d-flex left-buttons justify-content-around">
                  <button className="left-btn px-5">SWAP </button>
                  <button className="left-btn px-5">CHART</button>
                </div>
                <div style={{ height: "93%" }}>
                  <div style={{ height: "100%", borderBottomLeftRadius: "14px", borderBottomRightRadius: "14px", overflow: "hidden" }}>
                    <div className=" left-down-main pb-2">
                      <div className='left-down-main-hidd'>
                        <div className="left-down-1 d-flex">
                          <div className="left-img-1-box">
                            <h2 className="zoro_text"></h2>
                          </div>
                          <img className="left-img-1" src={main_image} alt="true" />
                        </div>
                      </div>
                      <div className="left-down-2   p-1 row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3 img-2-box">
                          <img className=" left-img-2" src={luffy_icon} alt="true" />
                        </div>
                        <div className="col-lg-9 col-sm-9  col-md-9  two-img text-start pl-4">
                          <h5 id="monkey-d">USOPP</h5>
                          <p className="pb-0 pt-0 pb-0 mb-0" id="TheRubberBanded">The long nosed sniper king</p>
                          <h1 id="alive-text">ALIVE</h1>
                          {/* Set styling of dead-text from display:none to display:block */}
                          <h1 id="dead-text">DEAD</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  mt-2 right-side   flexing-2 " style={{ height: "100%", paddingBottom: "0px", paddingRight: "0", paddingTop: "0", paddingLeft: "0" }}>
              <div style={{ height: "100%" }} className="right-side-box">
                <div className=" right-div-top" style={{ height: "10%" }}>
                  <h1 id="metricData1" className="py-2">METRIC DATA</h1>
                  <h3 id="metricData2" className="py-2">METRIC DATA</h3>
                  <div className='d-flex top-ship-box'>
                    <button className='top-ship' onClick={openCollective1}>
                    <span >
                      <img src={shipTop} /> ENTIRE FLEET
                    </span>
                    </button>
                    <button className='top-ship-cross' onClick={closeHandler1}>
                    
                    <i class="fa-regular fa-circle-xmark"></i>
               
                    </button>
                  </div>
                </div>
                <div style={{ height: "80%" }} className="bb-1">
                  <div className="boxright1" style={{ height: "100%" }}>
                    <div className="right-flexing mt-2" style={{ height: "100%" }}>
                      <div className="right-flexing-1">
                        <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                          <div className="right-div-1 ">
                            <div className="right-div-11 mx-3 under">
                              <p className="mb-0 pb-2 right-p right-p-w">DOUBLOONS VALUE</p>
                              <h4 className="mt-0 pt-0  right-h right-h-top">$ 0.00000143</h4>
                            </div>
                            <div className="right-div-12 mx-3 mt-2">
                              <p className="mb-0 pb-2 right-p right-p-w ">TIDAL SHIFTS</p>
                              <h4 className="mt-0 pt-0 right-h right-h-top">0.00%</h4>
                            </div>
                            <div className="link-box mt-2">
                              <div className="d-flex link-main justify-content-between" style={{ maxWidth: "100%", overflow: "hidden" }} onClick={myFunction}>
                                <p id="link-copy" className=" py-1 ">0xbb02647c4ed.....217cc52ad326</p>
                                <span style={{ borderLeft: "1px solid white" }}>
                                  <a href="#"> <img id="copy-icon" src={Exitlink} />
                                  </a>
                                </span>
                              </div>
                            </div>

                          </div>
                          <div className="right-div-2 impp mt-1 right-ligth-bg-div p-1 d-flex glow-background justify-content-between ">
                            <div className=" px-2 pl-3 " style={{paddingBottom:"0.3rem"}}>
                              <p className="mb-0 pb-1 mt-1 right-p">SUNKEN TRESURE</p>
                              <h4 className="mt-0 pt-0 pb-0 right-h">0.13 <span>ETH</span></h4>
                            </div>
                            <img style={{ width: "20px",opacity:"0.8" }} className="right-div-2-img my-auto mr-3" src={etherum} alt="true" />
                          </div>
                          <div id="time" className="w-100 ">
                            <div className="circle mx-auto my-auto" >
                              <div className="dots hr_dot" />
                              <svg id="clockSvg">
                                <circle cx={75} cy={75} r={98} />
                                <circle cx={75} cy={75} r={98} id="hh" />
                              </svg>
                              <div id="hours">
                                <div className="clock-text">
                                  <p className="tides-rest">TIDE'S RESET</p>
                                  <div className="d-flex">
                                    <h2 id="hour_point">17</h2>
                                    <h2 className="px-2">:</h2>
                                    <h2 id="min_point">52</h2>
                                  </div>
                                  <div className="d-flex">
                                    <h6 id="HRS">HRS</h6>
                                    <h2 className="px-3" />
                                    <h6 id="MIN">MIN</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className=" right-div-pad right-flexing-2">
                        <div className="d-flex flex-column line-box" style={{ height: "44%", maxHeight: "300pxw" }}>
                          <div className="line-chart">
                            <canvas id="myChart" />
                          </div>

                        </div>
                        <div className='right-bottom-position'>
                          <div className="row right-div-pad pl-3">

                            <div className="col-6 " style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                              <div className="right-div-2 rightdivtype2 mb-2 right-ligth-bg-div glow-background px-2 mt-3 d-flex justify-content-between ">
                                <div className="padding-3l">
                                  <p className="mb-0 pb-1 right-p ">TRESURE BOARD</p>

                                  <h4 className="mt-0 pt-0 pb-0 right-h">$1,047,303</h4>


                                </div>
                                <img className="right-botom-2-img1  my-auto" src={mcap} alt="true" />
                              </div>
                            </div>
                            <div className="col-6 " style={{ paddingLeft: "0px" }}>
                              <div className="right-div-2 rightdivtype2 mb-2 right-ligth-bg-div glow-background px-2 mt-3 d-flex justify-content-between ">
                                <div className="padding-3l">
                                  <p className="mb-0 pb-1 right-p ">CREW SIZE</p>

                                  <h4 className="mt-0 pt-0 pb-0 right-h">1,245</h4>


                                </div>
                                <img className="right-botom-2-img2  my-auto" src={holders} alt="true" />
                              </div>
                            </div>
                            <div className="col-6 mb-2" style={{ paddingRight: "0px", paddingLeft: "0" }}>
                              <div className="right-div-2 rightdivtype2 right-ligth-bg-div px-2 glow-background d-flex justify-content-between">
                                <div className=" padding-3l">
                                  <p className="mb-0 pb-1 right-p">PERSONAL LOOT</p>
                                  {/* <div className="d-flex justify-content-between"> */}
                                  <h4 className="mt-0 pt-0 pb-0 right-h">3,058,351</h4>
                                  {/* </div> */}
                                </div>
                                <img className=" right-botom-2-img3  my-auto" src={owner} alt="true" />
                              </div>
                            </div>
                            <div className="col-6 " style={{ paddingLeft: "0px" }}>
                              <div className="right-div-2 rightdivtype2 mb-2 right-ligth-bg-div glow-background px-2  d-flex justify-content-between ">
                                <div className="padding-3l">
                                  <p className="mb-0 pb-1 right-p " >SEA TRADE VOLUME</p>

                                  <h4 className="mt-0 pt-0 pb-0 right-h">$2,504,374</h4>


                                </div>
                                <img className="right-botom-2-img4  my-auto" src={LastBox} alt="true" />
                              </div>
                            </div>
                          </div>
                          <div className=" mt-2" style={{width:"100%"}}>
                            <button style={{width:"inherit"}}>
                              <div className=''>
                              <div className="right-bottom-div-box   " >
                                <div className="right-bottom-div px-2 onclickeffect row " style={{  marginLeft: "auto", marginRight: "auto" }}>
                                  <div className="bottom-div-left p-2 col-4">
                                    <div className="text-center">
                                      <p className="mb-0 pb-1 right-p right-p-w text-center">Crew's Share</p>
                                      <div >
                                        <h4 style={{marginTop:"4px"}} className=" pt-0 pb-0  right-h bottom-moddle-h ">1,234,567
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bottom-div-center col-4">
                                    {/* <a href="#" target="_blank"> */}
                                    <div className="py-2">
                                      <div className="justify-content-between text-center  pt-1">
                                        <h4 className="mt-0 pt-0 pb-0 right-h right-h-1  bottom-moddlle-h ">
                                          ClAIMABLE</h4>
                                        <h4 className="mt-0 pt-0 pb-0 right-h pl-2 bottom-moddlle-h">BOOTY
                                        </h4>
                                      </div>
                                    </div>
                                    {/* </a> */}
                                  </div>
                                  <div className="bottom-div-right col-4">
                                    <div className="  py-2">
                                      <p className="mb-0 pb-1 right-p right-p-w text-center">Bounty Harvest</p>
                                      <div className="d-flex justify-content-center">
                                        <h4 style={{marginTop:"4px"}} className=" pt-0 pb-0 bottom-moddle-h right-h pr-3">
                                          0.174</h4>
                                        <img style={{ width: "10px" }} className="right-botom-2-img my-auto " src={etherum} alt="true" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </button>
                          </div>
                          <div className="bottom-div-main  " style={{ marginTop: "15px" }}>
                            <div style={{width:"100%"}}>
                              <button style={{width:"inherit"}}>
                              <div className="right-bottom-div-box1  right-div-pad  pl-4" >
                                <div className="right-bottom-div1 onclickeffect   row " >

                                  <div className="bottom-div-center col-12">
                                    {/* <a href="#" target="_blank"> */}
                                    <div className="p-2">
                                      <div className="justify-content-between text-center  " >
                                        <h4 className="mt-0 pt-0 pb-0 right-h bottom-moddlle-h  ml-auto" >
                                          BOOSTED CLAIM :</h4>
                                        <h4 className=" pt-0 pb-0 right-h bottom-moddlle-h bottom-moddlle-h2">+33% BOUNTY HARVEST
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

export default Usopp

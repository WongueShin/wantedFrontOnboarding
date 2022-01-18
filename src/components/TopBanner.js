import { useEffect, useState, useRef } from "react";
import "./TopBanner.css"

function Banners(props){
    const contentList = props.content;
    const containerRef = props.refs;
    return(
        <div className="not-slick-slider">
            <div className="not-slick-list" >
                <div className="track" ref={containerRef}>
                <div key={-2} className="container last-idx">
                            <div>
                                <div className="imgDiv">
                                <img className="bannerImg" src={contentList[contentList.length - 2].imgpath}/>
                                </div>
                                <div className='Information'>
                                    <h2>{contentList[contentList.length - 2].h2}</h2>
                                    <h3>{contentList[contentList.length - 2].h3}</h3>
                                    <a className='button_Information'>
                                        <span className='button_span'>바로가기
                                        <span className="Button_Button__endIcon__MpDfc">
                                            <span className='SvgIcon_SvgIcon__root__8vwon'>
                                                <svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'>
                                                    <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'/>
                                                </svg>
                                            </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div key={-1} className="container last-idx">
                            <div>
                                <div className="imgDiv">
                                <img className="bannerImg" src={contentList[contentList.length - 1].imgpath}/>
                                </div>
                                <div className='Information'>
                                    <h2>{contentList[contentList.length - 1].h2}</h2>
                                    <h3>{contentList[contentList.length - 1].h3}</h3>
                                    <a className='button_Information'>
                                        <span className='button_span'>바로가기
                                        <span className="Button_Button__endIcon__MpDfc">
                                            <span className='SvgIcon_SvgIcon__root__8vwon'>
                                                <svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'>
                                                    <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'/>
                                                </svg>
                                            </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                    </div>        
                    {contentList.map((content, index)=>
                        <div key={index} className={"container"}>
                            <div>
                                <div className="imgDiv">
                                <img className="bannerImg" src={content.imgpath}/>
                                </div>
                                <div className='Information'>
                                    <h2>{content.h2}</h2>
                                    <h3>{content.h3}</h3>
                                    <a className='button_Information'>
                                        <span className='button_span'>바로가기
                                        <span className="Button_Button__endIcon__MpDfc">
                                            <span className='SvgIcon_SvgIcon__root__8vwon'>
                                                <svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'>
                                                    <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'/>
                                                </svg>
                                            </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    <div key={contentList.length} className="container first-idx">
                            <div>
                                <div className="imgDiv">
                                <img className="bannerImg" src={contentList[0].imgpath}/>
                                </div>
                                <div className='Information'>
                                    <h2>{contentList[0].h2}</h2>
                                    <h3>{contentList[0].h3}</h3>
                                    <a className='button_Information'>
                                        <span className='button_span'>바로가기
                                        <span className="Button_Button__endIcon__MpDfc">
                                            <span className='SvgIcon_SvgIcon__root__8vwon'>
                                                <svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'>
                                                    <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'/>
                                                </svg>
                                            </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div key={contentList.length + 1} className="container first-idx">
                            <div>
                                <div className="imgDiv">
                                <img className="bannerImg" src={contentList[1].imgpath}/>
                                </div>
                                <div className='Information'>
                                    <h2>{contentList[1].h2}</h2>
                                    <h3>{contentList[1].h3}</h3>
                                    <a className='button_Information'>
                                        <span className='button_span'>바로가기
                                        <span className="Button_Button__endIcon__MpDfc">
                                            <span className='SvgIcon_SvgIcon__root__8vwon'>
                                                <svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'>
                                                    <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'/>
                                                </svg>
                                            </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                    </div>           
                </div>
            </div>
        </div>
    )
}



function TopBanner(props) {
    const [cnt, setCnt, touchPosion ,setTouchPosition] = props.state;
    const containerRef = props.refer;
    const contentList = require('./bannerContent.json').content;
    let timer = 0;
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    useEffect(() => {
        const containerWidth = window.getComputedStyle(containerRef.current.querySelector('.container')).width.slice(0,-2);
        containerRef.current.style.transition = 'all 0.35s ease-in-out 0s';
        containerRef.current.style.transform = `translateX(calc(-${containerWidth}* ${cnt + 1}px - (${containerWidth}px - (100vw - ${containerWidth}px)/2)))`;
    }, [cnt])
    
    const [count, setCount] = useState(0);
    useInterval(() => {
        NextSlide();
        setCount(count + 1);
      }, 4000);

    const NextSlide = () => {
        const containerWidth = window.getComputedStyle(containerRef.current.querySelector('.container')).width.slice(0,-2);  
        if(cnt === contentList.length - 1){
            containerRef.current.style.transition = 'none';
            containerRef.current.style.transform =`translateX(calc(-${containerWidth}* ${0}px - (${containerWidth}px - (100vw - ${containerWidth}px)/2)))`
            setCnt(0);
            return
        }
        setCnt(cnt + 1);
        return
    }

    const PrevSlide = () => {
        if (cnt === 0){
            const containerWidth = window.getComputedStyle(containerRef.current.querySelector('.container')).width.slice(0,-2);
            containerRef.current.style.transition = 'none';
            containerRef.current.style.transform =`translateX(calc(-${containerWidth}* ${contentList.length + 1}px - (${containerWidth}px - (100vw - ${containerWidth}px)/2)))`
            setCnt(contentList.length - 1);
            return
        }
        setCnt(cnt - 1);
    }

    const touchEnd = (e) => {
        const distanceX = Math.abs(touchPosion.x - e.changedTouches[0].pageX);
        if(distanceX > 50){
            if(e.changedTouches[0].pageX - touchPosion.x > 0){
                PrevSlide();
                return
            }
            NextSlide();
            return
        }
        return
    }
    const mouseEnd = (e) => {
        const distanceX = Math.abs(touchPosion.x - e.pageX);
        console.log(touchPosion.x, e.pageX);
        if(distanceX > 50){
            if((touchPosion.x - e.pageX) > 0){
                NextSlide();
                return
            }
            PrevSlide();
            return
        }
        return
    }
    return(
        <div className="TopBanner" 
        onMouseDown={(e) => {setTouchPosition({
            x: e.pageX,
        })}} 
        onTouchStart={(e) => {setTouchPosition({
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
        })}}
        onTouchEnd={touchEnd}
        onMouseUp={mouseEnd}>
            <Banners content = {contentList} refs = {containerRef}/>
            <button onClick={NextSlide} className="TopBanner_next_Arrow TopBanner_Arrow">
                <span className="SvgIcon_SvgIcon__root__8vwon" >
                <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"/>
                </svg>
                </span>
            </button>
            <button onClick={PrevSlide} className="TopBanner_prevArrow TopBanner_Arrow">
                <span className="SvgIcon_SvgIcon__root__8vwon">
                    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"/>
                    </svg>
                </span>
            </button>
        </div>
    );
}


export default TopBanner
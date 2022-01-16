import "./TopBanner.css"

function Banners(){
    let contentList = require('./bannerContent.json').content;
    contentList.forEach(e => console.log(e))
    
    return(
        <div className="not-slick-list" style={{"padding": "0px 40px"}}>
            <div className="track">        
                {contentList.map((content, index)=>
                    <div key={index} className="container">
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
                                        <spqn className='SvgIcon_SvgIcon__root__8vwon'>
                                            <svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'>
                                                <path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'/>
                                            </svg>
                                        </spqn>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


function TopBanner() {
    
    return(
        <div className="TopBanner">
             <Banners/>
        </div>
    );
}


export default TopBanner

function TopBanner() {
    let contentList = require('./bannerContent.json').content;
    contentList.forEach(e => console.log(e))
    
    return(
        <div className="TopBanner">
            <div className="slick-list" style={{"padding": "0px 40px"}}>
                {contentList.map((content, index)=>
                    <div>
                        <img  src={content.imgpath}/>
                        <div>
                            <h2>{content.h2}</h2>
                            <h3>{content.h3}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopBanner
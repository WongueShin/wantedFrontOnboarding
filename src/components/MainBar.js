import './MainBar.css'
function MainBar() {
    return(
        <nav>
            <div role='presentation' className="MainBar_className">
                <button type="button" className="MainBar_hamberger">
                    <img src="https://static.wanted.co.kr/images/icon-menu.png"
                        style={{width:"17px", heigth:"14px", objectFit:"contain"}}/>
                </button>
                <a>
                    <i className='icon_new'></i>
                </a>
            </div>
        </nav>
    )
}

export default MainBar

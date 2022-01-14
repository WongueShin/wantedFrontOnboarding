import './MainBar.css'
function MainBar() {
    return(
        <div role='presentation' className="MainBar_className">
            <div className='MainBar_margin'>
                <nav className='MainBar_nav'>
                    <div className='MainBar_nav_top'>
                        <div className='MainBar_nav_topLogo'>
                            <button type="button" className="MainBar_hamberger">
                                <img src="./images/icon-menu.png"
                                    style={{width:"17px", heigth:"14px", objectFit:"contain"}}/>
                            </button>
                            <a>
                                <i className='icon_new'></i>
                            </a>
                        </div>
                        <button className='SignUpButton'>회원가입하기</button>
                    </div>
                    <ul className='MainBar_Menu'></ul>
                    <aside className='Aside_className'></aside>
                </nav>
            </div>
        </div>
    )
}

export default MainBar

import './MainBar.css'
function MainBar() {
    return(
        <div role='presentation' className="MainBar_className">
            <nav className='MainBar_nav'>
                <div className='MainBar_nav_top'>
                    <button type="button" className="MainBar_hamberger">
                        <img src="https://static.wanted.co.kr/images/icon-menu.png"
                            style={{width:"17px", heigth:"14px", objectFit:"contain"}}/>
                    </button>
                    <a>
                        <i className='icon_new'></i>
                    </a>
                </div>
                <ul className='MainBar_Menu'></ul>
                <aside className='Aside_className'></aside>
            </nav>
        </div>
    )
}

export default MainBar

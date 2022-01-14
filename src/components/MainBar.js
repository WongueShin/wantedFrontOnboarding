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
                    <ul className='MainBar_Menu'>
                        <li className='HomeButton menu_classname'>
                            <a>홈</a>
                        </li>
                        <li className='menu_classname'>
                            <a>채용</a>
                        </li>
                        <li className='menu_classname'>
                            <a>이벤트</a>
                        </li>
                        <li className='smMoreVisible menu_classname'>
                            <a>직군별 연봉</a>
                        </li>
                        <li className='smMoreVisible menu_classname'>
                            <a>이력서</a>
                        </li>
                        <li className='smMoreVisible menu_classname'>
                            <a>커뮤니티
                                <em>
                                    <svg 
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={18}
                                        height={11}
                                        viewBox='0 0 18 11'
                                    >
                                        <g 
                                            fill='none'
                                            fillRule='evenodd'
                                            fontFamily='AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo'
                                            fontSize={9}
                                            fontWeight={500}>
                                            <g fill='#36F'>
                                                <text transform='translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)'>
                                                    <tspan x={0} y={8}>New</tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </em>
                            </a>
                        </li>
                        <li className='smMoreVisible menu_classname'>
                            <a>
                                프리랜서
                            </a>
                        </li>
                        <li className='smMoreVisible menu_classname'>
                            <a>
                                AI 합격예측
                                <span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={18}
                                        height={11}
                                        viewBox='0 0 18 11'    
                                    >
                                        <g
                                            fill='none'
                                            fillRule='evenoodd'
                                            fontFamily='AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo'
                                            fontSize={9}
                                            fontWeight={500}
                                        >
                                            <g fill='#36F'>
                                                <text
                                                    transform='translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)'
                                                >
                                                    <tspan x={0} y={8}>Beta</tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </li>

                    </ul>
                    <aside className='Aside_className'></aside>
                </nav>
            </div>
        </div>
    )
}

export default MainBar

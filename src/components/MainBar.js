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
                                    style={{
                                        width: '17px',
                                        height: '14px',
                                        objectFit: 'contain'
                                    }}/>
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
                    <aside className='Aside_className'>
                        <ul>
                            <li>
                                <button className='searchButton'>
                                    <svg 
                                        xmlns='https://www.w3.org/2000/svg'
                                        xmlnsXlink='https://www.w3.org/1999/xlink'
                                        width={18} height={18} viewBox='0 0 18 18'>
                                        <defs>
                                            <path id='qt2dnsql4a' d='M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z'/>
                                        </defs>
                                        <g fill='none' fillRule='evenodd'>
                                            <use fill='#333' fillRule='nonzero' stroke='#333' strokeWidth={.3} xlinkHref='#qt2dnsql4a'></use>
                                        </g>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button className='signUpButton'>회원가입/로그인</button>
                            </li>
                            <li className='mdMoreVisible leftDivision'>
                                <a className='dashboardButton'>기업 서비스</a>
                            </li>
                            <li className='Aside_visibleMenu'>
                                <button className='menuButton'>
                                    <svg width={18} height={18}
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <defs>
                                            <path d='M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z' id='a'/>
                                        </defs>
                                        <g fill='none' fillRule='evenodd'>
                                            <mask id='b' fill='#fff'>
                                                <use xlinkHref='#a'></use>
                                            </mask>
                                            <use fill='#333' xlinkHref='#a'></use>
                                            <g mask='url(#b)' fill='#333'>
                                                <path d='M0 0h18v18H0z'></path>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    )
}

export default MainBar

import React, {useState, useEffect, useRef} from 'react'
import * as FaIcons from 'react-icons/fa'
import {Nav, Navbar} from "react-bootstrap"
import {IoIosRefresh} from "react-icons/io"
import {PAGE_DETAILS} from "../../assests/page"
import {AiFillHome} from "react-icons/ai"
import {RiLogoutBoxRLine} from "react-icons/ri"


function useOutsideClick(ref, callback, when) {
    const savedCallback = useRef(callback)

    useEffect(() => {
        savedCallback.current = callback
    })

    function handler(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            savedCallback.current()
        }
    }

    useEffect(() => {
        if (when) {
            document.addEventListener("click", handler)
            return () => document.removeEventListener("click", handler)
        }
    }, [when])
}

const NavBarComponent = () => {

    const [sidebar, setSidebar] = useState(false)
    const sidebarRef = useRef()
    const showSidebar = () => setSidebar(!sidebar)

    useOutsideClick(sidebarRef, showSidebar, sidebar)
    return (
        <>
                <Navbar className={"navbar-dark sticky-top"} expand="lg" style={{
                    backgroundColor: "#3E46B3",
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    paddingRight:'15px'
                }}>

                    <Navbar.Brand href="/" className={'nav-bran'}>NeoMentors Dashboard</Navbar.Brand>


                    <Nav className={'open-sidebar flex_end'} ref={sidebarRef} >
                        <a href='#' className={'menu-bars'}>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </a>
                    </Nav>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className={'nav-menu-items'} onClick={showSidebar} style={{position: "relative"}}>
                            <li className={'nav-text'}>
                                <a href="/">< AiFillHome
                                    style={{width: '40px', height: '40px', paddingRight: '10px'}}/>Home</a>
                            </li>
                            {Object.keys(PAGE_DETAILS).map((key, i) => {
                                const details = PAGE_DETAILS[key]
                                    return (
                                        <li className={'nav-text'} key={i}>
                                            <a href={details.link}
                                               style={{color: details.color}}>{details.navicon} {details.heading}</a>
                                        </li>
                                    )

                            })}
                            <div style={{position: "absolute", bottom: 80, width: "100%"}}>
                                <hr/>
                                <li className={'nav-text pt-0 pb-0'}>
                                    <a href={"/logout"}> < RiLogoutBoxRLine
                                        style={{width: '40px', height: '40px', paddingRight: '10px'}}/> Logout</a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </Navbar>
        </>
    )
}

export default NavBarComponent;
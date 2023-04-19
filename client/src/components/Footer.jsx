import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Footer =()=>{

    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(()=>{
        let lastScrollPos = window.pageYOffset;
        const handleScroll = ()=>{
            const currentScrollPos = window.pageYOffset;
            if(currentScrollPos > lastScrollPos){
                setScrollDirection('down')
             } else{
                setScrollDirection('up');
             }
            lastScrollPos= currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll);
        return()=>window.addEventListener('scroll', handleScroll);
    },[])
    return(
        <nav className={` fixed bottom-0 right-0 left-0 z-10 bg-slate-100 ${scrollDirection==='down' ? ' translate-y-full' : 'translate-y-0'}`}>
            <div className="flex justify-evenly text-center mb-1">
                <div>
                    <NavLink to='/'>
                        <i className="fa fa-home"></i>
                        <p className="-my-1 text-xs">Home</p>
                    </NavLink>
                </div>  
                <div>
                    <NavLink to='/saved'>
                        <i className="fa fa-bookmark"></i>
                        <p className="-my-1 text-xs">Saved</p>
                    </NavLink>
                </div> 
                <div className="">
                    <NavLink to='/sell'>
                        <i className="fa fa-plus-square"></i>
                        <p className="-my-1 text-xs">Sell</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/messages'>
                        <i className="fa fa-comments"></i>
                        <p className="-my-1 text-xs">Messages</p>
                    </NavLink>
                </div>    
                <div>
                    <NavLink to='/dashboard'>
                        <i className="fa fa-user"></i>
                        <p className="-my-1 text-xs">Profile</p>
                    </NavLink>
                </div>   
            </div>
        </nav>
    )
}

export default Footer;
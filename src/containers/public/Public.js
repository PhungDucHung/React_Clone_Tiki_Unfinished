import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft , Header  } from "../../components";
import './Public.scss';

const Public = () => {
    return(
        <div className="Main">
            <div className="Header">  
                <div >       
                    <Header/>
                </div>   
            </div>
            <div className="SideLeft">
                <SidebarLeft/>
            </div>
            <div >              
                <Outlet/>
            </div>

        </div>
    )
}
export default Public
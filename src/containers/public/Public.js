import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft  } from "../../components";
import '../../assets/CSS/Container/Public.scss';

const Public = () => {
    return(
        <div className="Setup" >
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
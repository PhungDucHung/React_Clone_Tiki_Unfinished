import React from 'react'
import { sidebarMenu } from '../ultis/sidebarMenu'
import { NavLink } from 'react-router-dom'
import './SidebarLeft.scss' 

const SidebarLeft = () => {
  return (
    <div className='sidebar'>
      <div className='ps-2'> <b> Danh mục </b></div>
      {sidebarMenu.map(item => (
        <NavLink
          to={item.path}
          key={item.path}
          className='navItem'
        > 
          <button className='bt'>
            <div className='row'>
              <div className='col-md-2'>
                  <img src={item.image} alt={item.text} className='navImage' width={50}/>
              </div>

              <div className='col-md-10'>
                  <span className='ps-3'>{item.text}</span>
              </div>
            </div>
          </button>
        </NavLink>
      ))}
    </div>
  )
}

export default SidebarLeft

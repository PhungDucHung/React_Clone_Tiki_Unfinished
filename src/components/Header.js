import React from 'react'
import logo from '../assets/IMG/logo.png'
import './Header.scss'
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaRegSmileWink } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <>
    <div className='container white'>
        <div className='row pt-3'>
 {/* -----------------------------Menu -----------------------------          */}
            <div className='col-md-2'>
                <img src={logo} alt="Logo" />
                <div className='text-logo '>Tốt & Nhanh</div>
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className="input-group mb-3 menu col-12">        
                    <span className='icon'><FaSearch/></span>
                    <input type="text" class="form-control ps-5" placeholder="100% Giao đúng hàng" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">Tìm kiếm</span>
                  </div>  

                  <div className='col-12 menu2'>
                      <a>điện gia dụng</a>
                      <a>xe cộ</a>   
                      <a>mẹ & bé</a>   
                      <a>khỏe đẹp</a>
                      <a>nhà cửa</a>   
                      <a>sách</a>   
                      <a>thể thao</a>   
                    </div>              
                </div>
            </div>
            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-5'>
                      <button className='TC px-2 py-2'>
                          <span className='home'> <IoHome /></span> 
                          <span className='ps-2'>Trang chủ</span> 
                      </button>
                    </div>

                    <div className='col-5'>
                      <button className='TK px-2 py-2'>
                          <span className='icontk'> <FaRegSmileWink /></span> 
                          <span className='ps-2'>Tài khoản</span> 
                      </button>
                    </div>

                    <div className='col-2'>
                      <button className='Cart py-2'>
                          <span className='iconCart'> <FaShoppingCart/></span> 
                      </button>
                    </div>

                    <div className='col-12 text '>
                          <span className='pe-2'><CiLocationOn /></span>
                          Giao đến: <a  href='#'> <span className='location'> Q. 1, P. Bến Nghé, Hồ Chí Minh </span> </a>

                    </div>
                </div>
            </div>   
{/* -----------------------------cam kết----------------------- */}
         
        </div>
    </div>
    <hr/> 
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                Cam kết
            </div>
        </div>
      </div>
      <hr/>
    </>
  )
}

export default Header

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuList } from '../../APIRequest/APIRequest';

const NavBar = (props) => {

  let [list, setList] = useState([])
  
      useEffect(()=>{
  
          (async()=>{
              let res = await menuList()
              console.log(res);
              
              setList(res)
          })()
      },
  [])




    return (
        <div>
            <div>
                <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
      {list.map((item)=>{
        return  <li key={item.id}><NavLink to= {"/"+ item['name']} >{item.name}</NavLink></li>
      })}
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list.map((item)=>{
        return  <li key={item.id}><NavLink to= {"/"+ item['name']} >{item.name}</NavLink></li>
      })}
      
    </ul>
  </div>
  
</div>
            </div>
     {props.children}
        </div>
    );
};

export default NavBar;
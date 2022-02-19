import React from 'react';
import "./navbar.css";
//import "../bootstrap.css";

export default function Navbar(){
  return(
    <nav>
      <div id="logo"><a href="#"></a></div>
      <Items/>
    </nav>
  );
}

function Items(){
  return(
    <ul>
      <li className='items'><a href="#">DESTEK OL</a></li>
      <li className='items'><a href="#">İLETİŞİME GEÇ</a></li>
      <li className='items'><a href="#">GALERİ</a></li>
      <li className='items'><a href="#">HAKKIMIZDA</a></li>
    </ul>
  );
}
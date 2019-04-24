import React, { Fragment } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	return (
		<div className="nav">					
		<nav className="nav-first">
		    <li><Link to = "/solutions">Решения в сфере DS</Link></li>
		        <ul className="sub-menu">
                     <li><span className="circle"></span><Link to = "/solutions/page-1">Интерактивная коммуникация</Link></li>
                     <li><span className="square"></span><Link to = "/solutions/page-2">Визуальная коммуникация</Link></li>
                     <li><span className="triangle"></span><Link to = "/solutions/page-3">Корпоративная коммуникация</Link></li>
                </ul>
		<li><Link to = "/about">О нас</Link></li>
		<li><Link to = "/news">Новости</Link></li>
		<li><Link to = "/contacts">Контакты</Link></li>			
		</nav>
		<nav className="nav-second">
         <ul>
            <li><span className="circle-second"></span><a href="#Russion">Русский</a></li>
            <li><span className="circle-second"></span><a href="#Ukraine">Українский</a></li>
            <li><span className="circle-second"></span><a href="#English">English</a></li>
         </ul>
         </nav>
         <div className="input-search">
            <input type="text" placeholder="Поиск" action=""/>
         </div>     
		</div>
		
	)
}
export default Navigation;
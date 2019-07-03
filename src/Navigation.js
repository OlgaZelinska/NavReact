import React, { Fragment } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	return (
		<div className="nav">			
      <h1 className="logo"><a href="#"><img src={require('./icon/Logo.png')} alt="Logo" /></a></h1>
		<nav className="nav-first">
         <ul>
		    <li><Link to = "/solutions"><b>Решения</b>в сфере DS</Link></li>
               <ul className="sub-menu">
                  <span className="circle"></span><li><Link to = "/solutions/page-1"><b>Интерактивная</b><br/> коммуникация</Link></li><br/>
                  <span className="square"></span><li><Link to = "/solutions/page-2"><b>Визуальная</b><br/>коммуникация</Link></li><br/>
                  <span className="triangle"></span><li><Link to = "/solutions/page-3"><b>Корпоративная</b><br/>коммуникация</Link></li><br/>
               </ul>
		<li><Link to = "/about">О нас</Link></li>
		<li><Link to = "/news">Новости</Link></li>
		<li><Link to = "/contacts">Контакты</Link></li>		
      </ul>	
		</nav>
		<nav className="nav-second">
         <ul>
            <li><span className="circle-second"></span><a href="#Russion">Русский</a></li>
            <li><span className="circle-second"></span><a href="#Ukraine">Українский</a></li>
            <li><span className="circle-second"></span><a href="#English">English</a></li>
         </ul>
         </nav>
         <div className="input-search">
             <img src={require('./icon/Search.png')} />
         </div>     
		</div>
		
	)
}
export default Navigation;
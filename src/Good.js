import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Good = ({ item }) => {
	return(	
        <div className="item-menu">
            <div className="item-menu-line">
                <span><Link to = {`/solutions/page-${item.id}`}>{item.num}</Link></span>
                <h2><Link to = {`/solutions/page-${item.id}`}>{item.name}</Link></h2>
                <p><Link to = {`/page-${item.id}`}>{item.description}</Link></p>
            </div>
            <ul>
                <li><Link to = {`/solutions/page-${item.id}`}>{item.list1}</Link></li>
                <li><Link to = {`/solutions/page-${item.id}`}>{item.list2}</Link></li>
                <li><Link to = {`/solutions/page-${item.id}`}>{item.list3}</Link></li>
				<li><Link to = {`/solutions/page-${item.id}`}>{item.list4}</Link></li>
				<li><Link to = {`/solutions/page-${item.id}`}>{item.list5}</Link></li>
            </ul>
        </div>   
    )
}
export default Good;
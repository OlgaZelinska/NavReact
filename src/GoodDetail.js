import React from 'react';
import './index.css';

const GoodDetail = ({ item })=>{	
	return(
		<div>
			<span>{item.num}</span>
			<h2>{item.name}</h2>
			<p>{item.description}</p>
			<ul>
                <li>{item.list1}</li>
                <li>{item.list2}</li>
                <li>{item.list3}</li>
				<li>{item.list4}</li>
				<li>{item.list5}</li>
            </ul>
		</div>
	)
}
export default GoodDetail;
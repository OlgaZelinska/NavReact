import React, {Component} from 'react';
import './index.css';
import Good from './Good';
import GoodDetail from './GoodDetail';


export default class Solutions extends Component {
	state = {
		goods:[
			{
				id: 1,
				num: '01',
				name: 'Интерактивные',
				description: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem natus pariatur porro quod! A delectus dolore eius explicabo libero magni quia quis sapiente, sequi voluptatibus! Maiores nulla quod reprehenderit voluptas!\n',
				list1: 'Lorem ipsum11',
				list2: 'Lorem ipsum12',
				list3: 'Lorem ipsum13',
				list4: 'Lorem ipsum14',
				list5: 'Lorem ipsum15'
			},
			{
				id: 2,
				num: '02',
				name: 'Визуальные',
				description: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem natus pariatur porro quod! A delectus dolore eius explicabo libero magni quia quis sapiente, sequi voluptatibus! Maiores nulla quod reprehenderit voluptas!\n',
				list1: 'Lorem ipsum21',
				list2: 'Lorem ipsum22',
				list3: 'Lorem ipsum23',
				list4: 'Lorem ipsum24',
				list5: 'Lorem ipsum25'
			},
			{
				id: 3,
				num: '03',
				name: 'Корпоративные',
				description: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem natus pariatur porro quod! A delectus dolore eius explicabo libero magni quia quis sapiente, sequi voluptatibus! Maiores nulla quod reprehenderit voluptas!\n',
				list1: 'Lorem ipsum31',
				list2: 'Lorem ipsum32',
				list3: 'Lorem ipsum33',
				list4: 'Lorem ipsum34',
				list5: 'Lorem ipsum35'
			}
		]
	}
	renderGood() {
		let flag = false;
		let good;
		this.state.goods.forEach(item => {
			if(item.id+'' === this.props.match.params.idsss){
				flag = true;
				good = <GoodDetail key = {item.id} item = {item}/>
			}
		})		
		if (!flag) {
			return <h1>404: Page not found</h1>
		}else {
			return good;
		}
	}
	render() {
		return (
			<div className="wrapper"> 
				{this.props.match.params.idsss === undefined ?
					this.state.goods.map(item => <Good key = {item.id} item = {item}/>) :
					this.renderGood()
				}
			
			</div>
		)
	}
}
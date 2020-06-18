import React from 'react'
import axios from 'axios'

export default function ListOfTreatsContainer(props){
	console.log(props.treats);
	const listOfTreats = props.treats.map(({_id, price, name, imgOfTreat, description})=> {
		const getImg = async (someExp) => {
			const imgResponse = await axios.get(process.env.REACT_APP_API_URI + `image/treat/${_id}`)
			.then(
				res => {
					return res.data
				}
				)
		};
		console.log(getImg);

		return(
				<div key={_id}>
					<img className='image' src={process.env.REACT_APP_API_URI + `image/treat/${_id}`}/>
					<h3 className='name-of-treat'>{name}</h3>
					<p className='description'>{description}</p>
					<span className='price'>${price}</span>
					<button className='order-button'>Order</button>
				</div>
			)
	})
	return(
		<React.Fragment>
			{listOfTreats}
		</React.Fragment>
		)
}
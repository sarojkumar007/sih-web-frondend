import React from 'react'
import M from 'materialize-css'
import { useEffect } from 'react';

const SelectCategory = ({cat}) => {
	const categories = ['Ok', 'Spam', 'Hatred content', 'Adult content', 'Removed by owner', 'Request deletion','False content'];

	useEffect(() => {
		var elems = document.querySelectorAll('select');
		var instances = M.FormSelect.init(elems);

		return () => {
		}
	}, [])

	return (
		<select name="" id="" defaultValue="">
			{
				cat === "" ? (
				<>
					<option value="">----</option>
					{categories.map((el, i) => {
						return(<option key={i} value={el}>{el}</option>)
					})}
				</>) : (<>
				{
					categories.map((el,i) => {
						if(cat === el){
							return(<option value={el} selected>{el}</option>)
						}
						else{
							return(<option value={el}>{el}</option>)
						}
					})
				}
				</>)
			}
		</select>
	)
}

export default SelectCategory

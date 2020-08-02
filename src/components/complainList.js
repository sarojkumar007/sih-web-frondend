import React from 'react'
import { navigate } from 'gatsby';
import { isAuthenticated } from '../helpers/apicalls';
import { checkStat, formatDate } from '../helpers/utils';

const ComplainList = ({data}) => {
		const goToDetails = (e) => {
			e.persist();
			if (isAuthenticated()) {
				navigate(`/complaint?com_id=${e.currentTarget.dataset.id}`)
			}
		}
		return data.map((e, i) => {
			return (
				<tr key={i}>
					<td data-id={i + 1} onClick={goToDetails} className={isAuthenticated() ? "complaint_item" : ""} >{e.text}</td>
					<td className="center">{`+${e.number_of_up_votes} / -${e.number_of_down_votes}`}</td>
					<td className="center">{checkStat(e.category)}</td>
					<td className="center">{e.number_of_evidences}</td>
					<td className="center">{e.number_of_comments}</td>
					<td className="center">{e.user.first_name ? e.user.first_name : "Anonymous" }</td>
					<td >{formatDate(e.creation_timestamp)}</td>
				</tr>
			)
		})
}

export default ComplainList

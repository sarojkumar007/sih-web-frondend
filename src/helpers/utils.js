import React from 'react'

export const getName = () => {
	if (typeof window !== `undefined`) {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData && userData.first_name) {
			return userData.first_name
		}
		else {
			return "Anonymous"
		}
	}
}

export const checkStat = (stat) => {
	if (stat === 'Hatred content') {
		return (<span className="orange white-text badge">
			<i className="material-icons i-b left">report</i>Hatred
		</span>)
	}
	else if (stat === 'Ok') {
		return (<span className="green white-text badge">
			<i className="material-icons i-b left">verified</i> OK
		</span>)
	}
	else if (stat === 'Spam') {
		return (<span className="red white-text badge">
			<i className="material-icons i-b left">privacy_tip</i>
			Spam</span>)
	}
	else if (stat === 'Adult content') {
		return (<span className="red white-text badge">
			<i className="material-icons i-b left">block</i>Adult
		</span>)
	}
}

export const formatDate = (dateUTC) => {
	const dateStr = new Date(dateUTC);
	const date = dateStr.toDateString();
	const timeArr = dateStr.toLocaleTimeString().split(':');
	const time = `${timeArr[0]}:${timeArr[1]}`
	return `${date}, ${time}`;
}
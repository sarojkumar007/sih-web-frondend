const API = process.env.GATSBY_BACKEND_API;

export const isAuthenticated = () => {
	if(typeof window !== undefined){
		const authData = JSON.parse(localStorage.getItem('userData'));
		if(authData && authData.token){
			return true;
		}
	}
	return false;
}

export const signin = (data) => {
	return fetch(`${API}/accounts/admin_login/`,{
		method: 'POST',
		headers: {
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams(data).toString()
	})
	.then(data => {
		return data.json()
	})
	.catch(err => console.log(err))
}

export const getComplaintsList = () => {
	return fetch(`${API}/api/list_complaints/`,{
		method: "GET",
		headers:{
			"Content-Type": "application/json"
		}
	})
	.then(data => {
		console.log(data);
		return data.json()
	})
	.catch(err => console.log(err))
}

export const getComplaintDetails = (id) => {
	return fetch(`${API}/api/retrieve_complaint/${id}/`,{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(res => res.json())
	.catch(err => console.log("ERR_IN_COM_DETAILS_FECTH", err))
}

export const getEvidenceList = (id) => {
	return fetch(`${API}/api/list_evidences_for_complaint/?complaint_id=${id}`,{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then(
		res => {
			console.log("RES from helper",res);
			return res.json()
		}
	)
	.catch(err => console.log(err))
}
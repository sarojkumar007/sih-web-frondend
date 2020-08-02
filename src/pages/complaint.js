import React, { useEffect } from "react"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { isAuthenticated, getComplaintDetails, getEvidenceList } from "../helpers/apicalls"
import { useState } from "react"
import SEO from "../components/seo"
import Loader from "../components/loader"
import { formatDate, checkStat } from "../helpers/utils"
import EvidenceList from "../components/evidenceList"

const Complaint = ({ search }) => {
	// extract query param
	const { com_id } = search

	const [comdata, setComdata] = useState({});
	const [loading, setLoading] = useState(false);
	const [evData, setEvData] = useState([]);
	const [evLoading, setEvLoading] = useState(false);

	useEffect(() => {
		if(!isAuthenticated()){
			navigate("/");
		}
		else{
			setLoading(true);
			const getComplaintData = async () => {
				await getComplaintDetails(com_id)
					.then(res => {
						console.log(res)
						if(res.detail){
							navigate("/404")
						}
						else {
							setTimeout(() => {
								setComdata(res);
								setLoading(false);								
							}, 2000);
						}
					})
					.catch(err => console.log(err))
			}
			getComplaintData()
		}
		return () => {
		}
	}, [])

	const showEvidences = () => {
		console.log('showing evidences...');
		setEvLoading(true);
		getEvidenceList(com_id)
		.then(res => {
			console.log("DATA from Component", res);
			setTimeout(() => {
				setEvData(res);
				setEvLoading(false);
			}, 1500);
		})
		.catch(err => console.log(err))
	}

	return loading ? (
		<Layout>
			<SEO title="Loading..." />
			<Loader />
		</Layout>
	) : (
		<Layout>
			<SEO title={comdata.text ? comdata.text : "Loading..."} />
			<h4 className="black-text lighhten-1">{comdata.text}</h4>
			<div className="divider"></div>
			<div className="section">
				<span className="grey-text text-darken-1"><span className="grey-text text-darken-3">
					<i className="material-icons left i-s purple-text">event</i> </span>{formatDate(comdata.creation_timestamp)}</span>
				<span>{checkStat(comdata.category)}</span>
			</div>
			<div className="divider"></div>
			<div className="section">
				<span>
					<i className="material-icons left i-s">thumbs_up_down</i>
					<span>+{comdata.number_of_up_votes}&nbsp;/&nbsp;-{comdata.number_of_down_votes} Votes</span>
				</span>
			</div>
			<div className="section">
					<span>
						<i className="material-icons left i-s indigo-text">insert_comment_line</i>
						<span>{comdata.number_of_comments} Comment(s)</span>
					</span>
			</div>
			<div className="section">
					<span>
						<i className="material-icons left i-s red-text">description</i> <span>{comdata.number_of_evidences} Evidence(s)</span>
					</span>
			</div>
			<div className="divider"></div>
			<div className="section">
					<span className="grey-text text-darken-3"><strong>Posted By:</strong> {comdata.first_name ? comdata.first_name : "Anonymous"}</span>
			</div>
			<div className="divider"></div>
			<div className="section">
				<h5 className="grey-text text-darken-4">Evidences 
				{comdata && comdata.number_of_evidences > 0 ? (
					<button className="waves-effect waves-light btn" onClick={showEvidences} style={{ 'marginLeft': "1rem" }}>
						<i className="material-icons i-s left">list_alt</i> See Evidences
					</button>) : ("")}
				</h5>
				<div className="section">
						{evLoading ? (
							<Loader />
						): (
							<div className="row">
								<EvidenceList data = { evData } />
							</div>
						)}
				</div>
			</div>
		</Layout>
	)
}

Complaint.propTypes = {
	search: PropTypes.object,
}

export default withLocation(Complaint)
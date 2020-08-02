import React from 'react'
import { formatDate, checkStat } from '../helpers/utils'

const EvidenceList = ({data}) => {
	return data.map((item,i) => {
		return (
			<div className="col s12 m4 row" key={i}>
					<div className="card">
						<div className="card-image">
							<img src={item.image}  loading="lazy" />
        		</div>
						<div className="card-content">
							<span className="card-title">{item.text}</span>
							<div className="divider"></div>
							<div className="grey-text text-darken-2" style={{'marginTop': '8px'}}>
							<div className="section row" style={{'padding':'3px'}}>
								<span className="col s7 valign-wrapper">
									<i className="material-icons black-text left i-sm">thumbs_up_down</i>
									<span>+{item.number_of_up_votes}&nbsp;/&nbsp;-{item.number_of_down_votes} Votes</span>
								</span>
								<span className="col s5">{checkStat(item.category)}</span> 
							</div>
							<div className="section" style={{ 'padding': '3px' }}>
								<span className="grey-text text-darken-1"><span className="grey-text text-darken-3">
									<i className="material-icons left i-sm purple-text">event</i> </span>{formatDate(item.creation_timestamp)}</span>
							</div>
							</div>
						</div>
						<div className="card-action valign-wrapper">
							<button className="col s6 btn btn-small waves-effect red" style={{ "marginRight": 	"3px" }}>Wrong</button>
							<button className="col s6 btn btn-small waves-effect blue" style={{"marginLeft":"3px"}}>Correct</button>
						</div>
					</div>
			</div>
		)
	})
}

export default EvidenceList;

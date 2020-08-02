import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getComplaintsList, isAuthenticated } from "../helpers/apicalls"
import ComplainList from "../components/complainList"
import { getName } from "../helpers/utils"

const IndexPage = () => {
  const [comList, setComList] = useState([]);

  useEffect(() => {
    getComplaintsList()
    .then(res => {
      console.log(res);
      setComList(res);
    })
    return () => {
    }
  }, [])

  return (
  <Layout>
    <SEO title="Home" />
    <h2>Hi {getName()}!</h2>
    <p>Welcome to new Bribery and Justice Restoration System.</p>

    <div className="section">
      <div className="table-actions">
        <h5 className="grey white-text" style={{'padding':'1rem'}}>Complaints List</h5>
      </div>
      <table className="highlight responsive-table">
        <thead className="">
          <tr>
            <th scope="col">Complaint</th>
            <th scope="col" className="center">Up/Down Votes</th>
            <th scope="col" className="center" style={{ 'width': '8rem' }}>Categories</th>
            {isAuthenticated() ? (
              <th scope="col" className="center" style={{ 'width': '8rem' }}>My voted Categories</th>) : (<></>)}
            <th scope="col" className="center">No. of Evidences</th>
            <th scope="col" className="center">No. of Comments</th>
            <th scope="col" className="center">Reported By</th>
            <th scope="col" style={{'width': '9rem'}}>Report Date</th>
          </tr>
        </thead>
        <tbody>
          <ComplainList data={comList} />
        </tbody>
      </table>
    </div>
  </Layout>
)}

export default IndexPage

import React, { useEffect } from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getName } from '../helpers/utils';
import { isAuthenticated } from '../helpers/apicalls';
import { navigate } from 'gatsby';

const AdminDashboard = () => {
	useEffect(() => {
		if(!isAuthenticated()){
			navigate("/auth/")
		}
		return () => {
		}
	}, [])

	return (
		<Layout>
			<SEO title="Admin Dashboard"/>
			<h2>Welcome {getName()}!</h2>
			<p>Your activities will show here.</p>
		</Layout>
	)
}

export default AdminDashboard;

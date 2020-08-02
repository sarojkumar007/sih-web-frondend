import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getName } from '../helpers/utils';

const AdminDashboard = () => {
	return (
		<Layout>
			<SEO title="Admin Dashboard"/>
			<h2>Welcome {getName()}!</h2>
			<p>Your activities will show here.</p>
		</Layout>
	)
}

export default AdminDashboard;

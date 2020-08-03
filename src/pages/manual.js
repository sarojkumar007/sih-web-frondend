import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo';

const Manual = () => {
	return (
		<Layout>
			<SEO title="Manual" />
			<h2>Know more about the System</h2>
			<div className="divider"></div>
			<div className="section">
				<p>Here are some resources where you can know more about the System</p>
			</div>
			<div className="section">
				<h4>Articles / Blogs</h4>
				<div className="divider"></div>
				<table className="highlight">
					<tbody className="">
						<tr>
							<td><a href="https://www.skillcast.com/blog/10-ways-to-reduce-the-risk-of-bribery-and-corruption">10 Ways to Reduce the Risk of Bribery & Corruption</a></td>
						</tr>
						<tr>
							<td><a href="https://www.businessinsider.in/india/news/8-charts-that-show-that-corruption-is-still-a-way-of-life-in-india/amp_articleshow/72260521.cms">8 charts that show that corruption is still a way of life in India</a></td>
						</tr>
						<tr>
							<td><a href="https://www.businesstoday.in/current/economy-politics/51-per-cent-indians-paid-bribe-in-the-last-12-months-survey/story/391129.html">51 per cent Indians paid bribe in the last 12 months: survey</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		</Layout>
	)
}

export default Manual

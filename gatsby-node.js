// exports.onCreatePage = async ({ page, actions }) => {
// 	const { createPage } = actions
// 	// Only update the `/app` page.
// 	if (page.path.match(/^\/complaint/)) {
// 		// page.matchPath is a special key that's used for matching pages
// 		// with corresponding routes only on the client.
// 		page.matchPath = "/complaint/*"
// 		// Update the page.
// 		createPage(page)
// 	}
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /materialize-css/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}
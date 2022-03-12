export default {
  projectLink: 'https://github.com/crubier/react-openlayers-fiber', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/crubier/react-openlayers-fiber/blob/master/packages/website', // base URL for the docs repository
  titleSuffix: ' – React Openlayers Fiber',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Vincent Lecrubier.`,
  footerEditLink: `Edit this page on GitHub`,
  unstable_flexsearch: true,
  floatTOC: true,
  logo: (
    <>
      <span>React OpenLayers Fiber</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="React OpenLayers Fiber" />
      <meta name="og:title" content="React OpenLayers Fiber" />
    </>
  ),
}
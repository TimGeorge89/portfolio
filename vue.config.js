var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
 configureWebpack: config => {
   return {
     plugins: [
       new PrerenderSpaPlugin(
         // Absolute path to compiled SPA
         path.resolve(__dirname, 'dist'),
         // List of routes to prerender
         [ '/' ],
       ),
     ]
   }
 }
}
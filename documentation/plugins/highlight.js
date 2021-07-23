import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';

// Highlight.js languages (Only required languages)
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import vue from 'vue-highlight.js/lib/languages/vue';

/*
* Highlight.js theme imported in nuxt.config.js to preserve style order.
* Find more: https://highlightjs.org/static/demo/
*/
// import 'highlight.js/styles/default.css';
// import 'highlight.js/styles/a11y-light.css';
// import 'highlight.js/styles/monokai-sublime.css'

/*
* Use Vue Highlight.js
*/
Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		javascript,
		vue,
		bash
	},
	tabReplace: ' ',
}); 
const page = require('page');
const empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signup',function(ctx,ntx){
	title('platzigram - signup');
	var main = document.getElementById('main-container');
	var el = template;
	empty(main).appendChild(el);
});

page.start();
const page = require('page');
const empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signin',function(ctx,ntx){
	//main.innerHTML ='Signup: <a href="/">Home</a>'
	title('Platzigram - Signin');
	var main = document.getElementById('main-container');
	var el = template;
	empty(main).appendChild(el);
});

page.start();
const page = require('page');
const empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/',function(ctx,ntx){
	//main.innerHTML ='Signup: <a href="/">Home</a>'
	title('Photogram');
	var main = document.getElementById('main-container');
	var pictures = [
		{
			user:{
				username:'edwight delgado',
				avatar:'https://image.flaticon.com/icons/png/512/147/147144.png'
			},
			url:'http://iwantic.com/wp-content/uploads/2017/06/junior-java-developer.png',
			like:1024,
			liked:true,
			createdAtt:new Date()
	},
	{
			user:{
				username:'natasha',
				avatar:'https://image.flaticon.com/icons/svg/219/219984.svg'
			},
			url:'http://cantejuandavid.github.io/images/developer_me3.png',
			like:800,
			liked:true,
			createdAt:new Date().setDate(new Date().getDate() - 10)
	},
	{
			user:{
				username:'natasha',
				avatar:'https://image.flaticon.com/icons/svg/219/219984.svg'
			},
			url:'http://www.cercalia.com/portal/sites/default/files/developer.png',
			like:800,
			liked:true,
			createdAt:new Date().setDate(new Date().getDate() - 1)
	},
	];
	empty(main).appendChild(template(pictures));
});

page.start();
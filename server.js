var express = require('express');
var app = express();

//para indicarles 
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index',{'title':'Platzigram'})
});
app.get('/signup',function(req,res){
	res.render('index',{'title':'Platzigram - Signup'})
});
app.get('/signin',function(req,res){
	res.render('index',{'title':'Platzigram - Signin'})
});

app.listen(3000,function(err){
	if(err) return console.log('hubo un error:'), process.exit(1);
	console.log('platzigram escuchando en el puerto 3000');
})
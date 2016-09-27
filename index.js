
var express=require('express')
var app = express();

app.get('/hel', function (req, res) {
  console.log('hello ')
})

app.get('/ppp', function (req, res) {
  console.log('cat cat')
})

app.listen(3000,function(){
  console.log('running on port 3000 ... plz visit http://localhost:3000')
})

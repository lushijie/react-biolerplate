/* 
* @Author: lushijie
* @Date:   2016-06-16 18:21:14
* @Last Modified by:   lushijie
* @Last Modified time: 2016-06-17 09:32:38
*/
var express = require('express')
var path = require('path')
// var compression = require('compression')

var app = express()

//app.use(compression())
// serve our static stuff like index.css
// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'src/build/')))

app.use('/build', express.static(path.join(__dirname, 'src/build/')))


// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
	console.log('get *');
  res.sendFile(path.join(__dirname, 'main.html'))
})

var PORT = process.env.PORT || 8360
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
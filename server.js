/*
 * @Author: lushijie
 * @Date:   2016-06-16 18:21:14
 * @Last Modified by:   lushijie
 * @Last Modified time: 2017-02-09 16:13:02
 */
var express = require('express')
var path = require('path')
// var compression = require('compression')
var app = express()

//app.use(compression())
// serve our static stuff like index.css
// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.use('/story', express.static(path.join(__dirname, 'storybook-static/')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '/src/app/index.html'))
})

var PORT = process.env.PORT || 3001
app.listen(PORT, function() {
	console.log('Production Express server running at localhost:' + PORT)
})

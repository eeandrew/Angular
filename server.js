var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Bear = require('./app/models/bear');
	
app = express();


app.use(express.static(__dirname + '/other'));

mongoose.connect('mongodb://localhost:27017/test');

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/',function(req,res){
	res.json({msg:'welcome to our api'});
});

router.route('/bears')
	  .post(function(req,res){
		var bear = new Bear();
		bear.name = req.body.name;
		console.log(req.body);
		bear.save(function(err){
			if(err)
			 res.send(err);
			res.json({msg:'bear created'});
		});
	  })
	  .get(function(req,res){
		Bear.find(function(err,bears){
			if(err)
				res.send(err);
			res.json(bears);
		})
	  })

app.use('/api',router);

app.listen(port);


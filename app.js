var express = require('express');
var app = express();
var bodyParser = require('body-parser');
router=express.Router();
var request = require("request");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/getweather',function(req,res,next){
   			console.log("the req", req.body);

		var options = { method: 'GET',
		  url: 'http://api.openweathermap.org/data/2.5/forecast',
		  qs: 
		   { q: req.body.city+',in',
		     units: 'metric',
		     APPID: 'fc58ba73fc193a3d2fdf7f1e0f35d074' },
		  headers: 
		   { 'postman-token': 'a1a2f891-909b-7444-3cac-ff29a422551d',
		     'cache-control': 'no-cache',
		     authorization: 'OAuth oauth_consumer_key=\\"QXeMRsHOso4yA45N0ekPpzpYR\\", oauth_nonce=\\"f80b1c9e26db9d804393fb34330d3198\\", oauth_signature=\\"w0sF097sNMjl9ij9dTuHV4EkghM%3D\\", oauth_signature_method=\\"HMAC-SHA1\\", oauth_timestamp=\\"1472548859\\", oauth_token=\\"1665562615-zd497Rcc1vePlWGfxIUaIbxBZ8XeOaDR1Bm0ncO\\", oauth_version=\\"1.0\\"' },
		  form: { track: 'twitter' } };

		request(options, function (error, response, body) {
		  if (error){ 
		  	res.send(error);
		  	throw new Error(error);
		  }

		  res.send(body);
		  console.log(body);
		});
    // NewsHighlight.createLevel(req.body,req.body.NLid, function(err,data){
    //     if(data){
    //         res.send({ status: "UPDATE_SUCCESS"});
    //     }else{
    //         res.send({ status: "UPDATE_ERR"});
    //     }
    // })
});
module.exports = router;
module.exports = app;

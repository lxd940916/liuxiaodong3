var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'baobei'
})
router.post('/detail',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
  pool.query('SELECT uid,title,time,zuozhe FROM news',function(err,rows){
  	res.send(rows)
  })
})
/* GET home page. */
router.post('/list', function(req, res, next) {
	var uid = req.body.uid;
	var title = req.body.title;
	var neirong = req.body.neirong;
	var time = req.body.time;
	var zuozhe = req.body.zuozhe;
  res.header('Access-Control-Allow-Origin','*')
  pool.query('INSERT INTO news(uid,title,neirong,time,zuozhe) VALUES('+uid+','+title+','+neirong+','+time+','+zuozhe+')',function(err,rows){
  	res.send(rows)
  })
});

module.exports = router;

/**
 * Created by boykov on 9/18/2016.
 */

var express=require('express');
var app=express();

app.use(express.static('public'));

app.listen(5000,function(){
   console.log("Server start on 5000 port");
});
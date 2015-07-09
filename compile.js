var fs = require("fs");
var markdown = require("markdown").markdown;
var pinyin = require("pinyin");
var _ = require("underscore");

var mds = fs.readdirSync("markdowns");
var template = fs.readFileSync("assets/article.html").toString();
var compiled = _.template(template);
mds.forEach(function(item){
	var title = item.substr(0,item.length-3);
	var py = pinyin(title,{
		style: pinyin.STYLE_NORMAL,
		heteronym: false
	}).reduce(function(prev,next){
		return prev.concat(next)
	},[]).join("_");
	var html = markdown.toHTML(fs.readFileSync("markdowns/"+item).toString());
	fs.writeFileSync("archives/"+py+".html",compiled({
		title: title,
		html: html
	}));
})
console.log("done!");
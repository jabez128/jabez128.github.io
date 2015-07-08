riot.tag('articles', '<div class="articles"> <div class="article" each="{opts.articles}"> <span class="title"><a href="javascript: void 0">{title}</a></span> <div class="appendix"> <span class="date">{date}</span> <span each="{tags}"> <span class="tag" riot-style="background-color:{bgcolor};color:{fontcolor}">{name}</span> </span> <div class="clear"></div> </div> </div> </div>', function(opts) {

});

riot.tag('profile', '<div class="profile"> <p class="center"> <img class="profile-photo" src="assets/flash.png"></img> </p> <div class="fatter-type"> <p>张小俊128 就职于百度，专注于前端开发，勤于写作，乐于分享。</p> <p>张小俊128 的项目有 <a href="https://github.com/jabez128/stream-handbook">stream-handbook中文版</a>。张小俊128 翻译出版有 <a href="http://book.douban.com/subject/25874874/">《Sass 与 Compass实战》</a> 一书， 以及<a href="http://www.html-js.com/card/414">其他文章</a>。</p> <p>你可以通过 <a href="mailto:jabez128@163.com">邮箱</a> 和 <a href="http://weibo.com/u/2426203420">微博</a> 找到张小俊128，也可以在Github上查看 <a href="https://github.com/jabez128">他的项目</a>。</p> </div> </div>', function(opts) {

});

riot.tag('shadow', '<div class="shadow"></div>', function(opts) {

});

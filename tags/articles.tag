<articles>
  <div class="articles">
    <div class="article" each={opts.articles}>
      <span class="title"><a href="{link}">{title}</a></span>
      <div class="appendix">
      	<span class="date">{date}</span>
      	<span each={tags}>
      		<span class="tag" style="background-color:{bgcolor};color:{fontcolor}">{name}</span>
      	</span>
      	<div class="clear"></div>
      </div>
    </div>
  </div>
</articles>

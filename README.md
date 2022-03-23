# Tabs

Example:
```html
<div class="tabs">
	<ul class="tab-list">
		<!-- The data-tab has to be unique in this tab group -->
		<li data-tab="tab-1"><a>Tab 1</a></li>
		<li data-tab="tab-2"><a>Tab 2</a></li>
		<li data-tab="tab-3"><a>Tab 3</a></li>
	</ul>

	<!-- use the same data-tab as one of the li elements above -->
	<div class="tab-content" data-tab="tab-1">
		This is tab 1
	</div>

	<div class="tab-content" data-tab="tab-2">
		This is tab 2
	</div>

	<div class="tab-content" data-tab="tab-3">
		This is tab 3
	</div>
</div>
```

when a list element is pressed we find the divs with the same `data-tab` attribute.
/*
 * accordion_defaults.js
 */

var accordion_defaults = {
	active: 0,
	animated: false,
	collapsible: false,
	disabled: false,
	event: "click",
	header: "> li > :first-child,> :not(li):even",
	heightStyle: "auto",
	icons: {
		"header": "ui-icon-triangle-1-e",
		"activeHeader": "ui-icon-triangle-1-s"
	}
};

commonWidgetTests( "accordion", { defaults: accordion_defaults } );

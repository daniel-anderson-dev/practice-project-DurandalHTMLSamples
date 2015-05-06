requirejs.config({
	paths: {
		/* Copy-paste */
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.1.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
        /* //Copy-paste// */
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'jQuery'
		}
	}
});


define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {

	system.debug(true);

	app.title = 'Durandal Samples';

	app.configurePlugins({
		router: true,
		dialog: true,
		widget: {
				kinds: ['expander']
		}
	});

	app.start().then(function () {
		viewLocator.useConvention();
		app.setRoot('shell');
	});

});
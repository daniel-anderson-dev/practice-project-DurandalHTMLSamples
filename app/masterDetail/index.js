define(['./project', 'durandal/activator', 'knockout'], function (Project, activator, ko) {
	var projects = ko.observableArray([
			new Project('Durandal', '(Description 1)'),
			new Project('UnityDatabinding', '(Description 2)'),
			new Project('Caliburn.Micro', '(Description 3)')
		]);

	return {
		projects: projects,
		activeProject: activator.create().forItems(projects)
	};

});
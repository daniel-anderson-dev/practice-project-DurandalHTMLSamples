define(['./project', 'plugins/widget', 'knockout'], function (Project, widget, ko) {
	return {
		projects: ko.observableArray([
				new Project('Durandal', '(Insert Description Here ...)'),
				new Project('UnityDatabinding', '(Second Description ...)'),
				new Project('Caliburn.Micro', '(Third Description ...)')
			]),
		addNewProject: function(value) {
			this.projects.push(new Project('New Project', 'A test project?'));
		}
	};
});
import './company.html';
import { Template } from 'meteor/templating';

Template.company.helpers({
	selected: function () {
		return Session.equals("selectedPlayer", this._id) ? "selected" : '';
	}
});

Template.company.events({
	'click': function () {
		Session.set("selectedPlayer", this._id);
	}
});

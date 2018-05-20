import './leaderboard.html';
import '../companies/company.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { EasySearch } from 'meteor/easy:search';
import { Companies } from '../../../api/companies/companies.js';
import { CompaniesIndex } from '../../../api/companies/companies_index.js';
import { $ } from 'meteor/jquery';

Template.leaderboard.helpers({
	inputAttributes: function () {
		return { 'class': 'easy-search-input', 'placeholder': 'Start searching...' };
	},
	companies: function () {
		return Companies.find({}, { sort: { dateCreated: -1, name: 1 } });
	},
	selectedName: function () {
		var company = CompaniesIndex.config.mongoCollection.findOne({ _id: Session.get("selectedPlayer") });
		return company;
	},
	index: function () {
		return CompaniesIndex;
	},
	resultsCount: function () {
		return CompaniesIndex.getComponentDict().get('count');
	},
	showMore: function () {
		return false;
	},
	renderTmpl: () => Template.renderTemplate
});

Template.leaderboard.events({
	'click .inc': function () {
		// Meteor.call('updateScore', Session.get("selectedPlayer"));
	},
	'change .category-filter': function (e) {
		CompaniesIndex.getComponentMethods()
			.addProps('categoryFilter', $(e.target).val())
		;
	}
});

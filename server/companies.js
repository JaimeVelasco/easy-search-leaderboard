import { Meteor } from 'meteor/meteor';
import { Companies } from '../imports/api/companies/companies.js';
import { check } from 'meteor/check';

Meteor.methods({
  updateScore: function (company) {
    check(company, Object);
    Companies.update(company, {})
  }
});

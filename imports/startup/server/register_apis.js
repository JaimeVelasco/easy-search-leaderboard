import { CompaniesIndex } from '../../api/companies/companies_index.js';

Meteor.publish('test-search', function (searchTerm) {
  const { name } = this;

  return CompaniesIndex.search(searchTerm, { name }).mongoCursor;
});

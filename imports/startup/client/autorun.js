import { CompaniesIndex } from '../../api/companies/companies_index.js';

Tracker.autorun(() => {
  console.log(CompaniesIndex.search('Dent', { limit: 20 }).fetch());
});

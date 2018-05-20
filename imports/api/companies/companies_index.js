import { Companies } from './companies.js';
import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

export const CompaniesIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return {};
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        categoryFilter = options.search.props.categoryFilter;

      // if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
      //   selector.name = categoryFilter;
      // }

      return selector;
    }
  }),
  collection: Companies,
  fields: ['name'],
  defaultSearchOptions: {
    limit: 5
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});

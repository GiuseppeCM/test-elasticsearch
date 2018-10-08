var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-elasticsearch',

  modules: {


    'apostrophe-templates': {
      viewsFolderFallback: path.join(__dirname, 'views')
    },

    'apostrophe-elasticsearch': {
      baseName: 'test-elasticsearch',
      elasticsearchOptions: {
        host: 'localhost:9200'
      },
      //if you uncomment this line and run reindex, the search work
      // fields: ['title', 'description', 'lowSearchText', 'highSearchText', 'type'],
      fields: ['title', 'description', 'lowSearchText', 'highSearchText'],
      boosts: {
        description: 100,
        title: 80,
        highSearchText: 1,
        lowSearchText: 1
      }
    },
    'apostrophe-search': {
      types: [
        'type0',
        'type1',
        'type2'
      ]
    },
    'apostrophe-pages': {
      park: [{
        title: 'Search',
        slug: '/search',
        type: 'apostrophe-search',
        label: 'Search',
        parkedId: 'search',
        published: true
      }]
    },
    'type0': {},
    'type1': {},
    'type2': {}

  }
});
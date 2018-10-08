module.exports = {
  extend: 'apostrophe-pieces',
  name: 'type1',
  label: 'type1',
  permissionsFields: true,
  addFields: [{
      name: 'description',
      label: 'Description',
      type: 'string',
      textarea: true,
      required: true
    }, {
      name: 'title',
      label: 'Title',
      type: 'string',
      textarea: true,
      required: true
    }
  ],
  arrangeFields: [{
      name: 'info',
      label: 'Informazioni',
      fields: ['description', 'title',]
    },
    {
      name: 'admin',
      label: 'Administrative',
      fields: ['slug', 'published', 'tags']
    }

  ],
};
module.exports = {
    extend: 'apostrophe-pieces',
    name: 'statoChiusuta',
    label: 'Stato Chiusura',
    pluralLabel: 'Stati Chiusura',
    addFields: [
      {
        name: 'title',
        label: 'Stato apertura',
        type: 'string',
        required: true
      }
    ]
  };
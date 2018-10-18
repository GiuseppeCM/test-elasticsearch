module.exports = {
    extend: 'apostrophe-pieces',
    name: 'amministrazioni',
    label: 'Amministrazione',
    pluralLabel: 'Amministrazioni',
    addFields: [{
            name: 'title',
            label: 'Titolo',
            type: 'string',
            required: true
        },
        {
            name: 'description',
            label: 'Abstract Sfida',
            type: 'string',
            required: true
        },
        {
            name: 'descrizioneGara',
            label: 'Descrizione Gara',
            type: 'area',
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: ['Styles', 'Bold', 'Italic', 'Link', 'Unlink', 'Anchor', 'Table', 'BulletedList', 'NumberedList', 'Blockquote', 'Strike', 'Subscript', 'Superscript', 'Split'],
                        styles: [{
                                name: 'Heading',
                                element: 'h3'
                            },
                            {
                                name: 'Subheading',
                                element: 'h4'
                            },
                            {
                                name: 'Paragraph',
                                element: 'p'
                            }
                        ]
                    }
                }
            }
        },
        {
            name: 'stati',
            label: 'stati',
            type: 'object',
            schema: [{
                    label:'apertura',
                    name: '_statoApertura',
                    withType: 'statoApertura',
                    type: 'joinByOne',
                    required: true,
                    filters: {
                        projection: {
                            title: 1,
                            slug: 1,
                            type: 1
                        }
                    }

                },
                {
                    label:'chiusura',
                    name: '_statoChiusuta',
                    withType: 'statoApertura',
                    type: 'joinByOne',
                    required: true,
                    filters: {
                        projection: {
                            title: 1,
                            slug: 1,
                            type: 1
                        }
                    }

                }
            ]
        }

    ],
    arrangeFields: [{
            name: 'informazioni',
            label: 'Informazioni generali',
            fields: [
                'title',
                'description',
                'descrizioneGara',
                '_statoApertura',
                'stati'
            ]
        },
        {
            name: 'amministrative',
            label: 'Amministrative',
            fields: ['slug', 'tags', 'published', 'tash']
        }
    ]
};
module.exports = {
  extend: '@apostrophecms/piece-type',
  init (self) {
    console.log({self});
  },
  options: {
    label: 'Blog Posting'
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      authorName: {
        label: 'Author name',
        type: 'string'
      },
      body: {
        label: 'Blog post body',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      }
    },
    group: {
      blogFields: [ 'authorName', 'body']
    }
  }
};
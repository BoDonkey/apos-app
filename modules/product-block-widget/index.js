module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Product Block Widget'
  },
  fields: {
    add: {
      topImage: {
        type: 'area',
        label: 'Product Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      productTitle: {
        type: 'string',
        label: 'Product Title'
      },
      productDescription: {
        type: 'string',
        label: 'Product Description'
      },
      productPrice: {
        type: 'string',
        label: 'Product Price'
      },
      productButton: {
        type: 'string',
        label: 'Product Button'
      }
    }
  }
};

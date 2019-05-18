module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-font-magician')({
      variants: {
        'Open Sans': {
          '300': [],
          '400': [],
        }
      }
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        customProperties: false,
        calc: false,
      }
    })
  ]
}
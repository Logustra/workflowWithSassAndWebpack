module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 6 versions'],
      cascade: false
    })
  ]
};

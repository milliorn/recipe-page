const React = require('react')

const GatsbyImage = ({ image, alt, ...rest }) =>
  React.createElement('img', { ...rest, alt, src: image?.src ?? '' })

module.exports = {
  GatsbyImage,
  getImage: image => image,
  StaticImage: GatsbyImage
}

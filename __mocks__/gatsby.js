const React = require('react')

const Link = React.forwardRef(({ to, ...rest }, ref) =>
  React.createElement('a', { ...rest, href: to, ref })
)
Link.displayName = 'Link'

module.exports = {
  Link,
  graphql: jest.fn(),
  useStaticQuery: jest.fn()
}

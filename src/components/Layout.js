import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { Container, Navbar, Nav } from 'react-bootstrap'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children, twitter, eventbriteProfile, mailingList } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const linkStyle = {
      color: '#eee',
      textDecoration: 'underline',
      fontSize: '1.3em',
      boxShadow: 'none'
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>{ title }</title>
        </Helmet>
        <Navbar collapseOnSelect expand='md' variant='dark' style={{ background: '#0e4749' }}>
          <Navbar.Brand href="/" style={{ fontSize: '1.8em', boxShadow: 'none', }}>
            Scrumpy Games
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav variant='pills' className='ml-auto'>
              <Nav.Link href='/events' style={ linkStyle }>Events</Nav.Link>
              <Nav.Link href={ mailingList } style={ linkStyle }>Mailing list</Nav.Link>
              <Nav.Link href={ `https://twitter.com/${ twitter }` } style={ linkStyle }>Twitter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
          <footer>
            © 2019-{new Date().getFullYear()}, Scrumpy Games/Sean DMR
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout

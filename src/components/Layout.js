import React from 'react'
import { Link } from 'gatsby'
import { Container, Navbar, Nav } from 'react-bootstrap'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children, twitter, eventbriteProfile, mailingList } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Brand href="/" style={{ fontSize: '2.4em', boxShadow: 'none' }}>
            Scrumpy Games
          </Navbar.Brand>
          <Nav variant='pills'>
            <Nav.Link href='/events' style={{ fontSize: '1.3em', boxShadow: 'none' }}>Events</Nav.Link>
            <Nav.Link href={ mailingList } style={{ fontSize: '1.3em', boxShadow: 'none' }}>Mailing list</Nav.Link>
            <Nav.Link href={ twitter } style={{ fontSize: '1.3em', boxShadow: 'none' }}>Twitter</Nav.Link>
          </Nav>
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

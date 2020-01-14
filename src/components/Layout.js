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
          <Navbar.Brand style={{ fontSize: '2.4em' }}>
            Scrumpy Games
          </Navbar.Brand>
          <Container className='justify-content-end' fluid>
            <Nav>
              <Nav.Item><Nav.Link href={ eventbriteProfile }>Events</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href={ mailingList }>Mailing list</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href={ twitter }>Twitter</Nav.Link></Nav.Item>
            </Nav>
          </Container>
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

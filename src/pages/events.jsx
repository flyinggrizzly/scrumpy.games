import React from 'react'
import { graphql } from 'gatsby'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
import { Card, Button } from 'react-bootstrap'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Events = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const { twitter, eventbriteProfile, mailingList } = data.site.siteMetadata.social
  const events = data.allEventbriteEvent.edges

  const futureEvents = events.filter(event => dayjs.utc(event.node.start.utc).isAfter(dayjs.utc()))
  const pastEvents = events.filter(event => dayjs.utc(event.node.start.utc).isBefore(dayjs.utc()))

  return (
    <Layout
      location={ location }
      title={ `Events - ${ siteTitle }` }
      twitter={ twitter }
      eventbriteProfile={ eventbriteProfile }
      mailingList={ mailingList }
    >
      <h3>Upcoming Events</h3>
      <ul style={{ marginLeft: 0 }}>
        {
          futureEvents.map(event => {
            return <Event key={ event.node.id } upcoming event={ event } />
          })
        }
      </ul>
      <h3>Past Events</h3>
      <ul style={{ marginLeft: 0 }}>
        {
          pastEvents.map(event => {
            return <Event event={ event } key={ event.node.id } />
          })
        }
      </ul>
    </Layout>
  )
}

const Event = ({ event, upcoming }) => {
  let {
    node: {
      name: { text },
      description: { text: description },
      url,
      start,
      end,
      venue: {
        name: locationName,
        address: {
          localized_address_display: location
        }
      }
    }
  } = event

  let startTime = dayjs(start.local).format('dddd, MMM D YYYY, h:mm A')
  let endTime = dayjs(end.local).format('h:mm A')

  let mapsUrl = `https://www.google.com/maps/place/${ location.replace(/ /g, '+') }`

  let masksBackgroundImageSrc = '/event-images/masks.jpg'
  let monsterOfTheWeekBackgroundImageSrc = '/event-images/monster-of-the-week.jpg'
  let honeyHeistBackgroundImageSrc = '/event-images/honey-heist.png'
  let beamSaberBackgroundImageSrc = '/event-images/beam-saber.png'

  let backgroundImageSrc
  if (text.includes("Masks"))
    backgroundImageSrc = masksBackgroundImageSrc

  if (text.includes("Monster of the Week"))
    backgroundImageSrc = monsterOfTheWeekBackgroundImageSrc

  if (text.includes("Single Session"))
    backgroundImageSrc = honeyHeistBackgroundImageSrc
  
  if (text.includes("Beam Saber"))
    backgroundImageSrc = beamSaberBackgroundImageSrc

  return (
    <li style={{ display: 'block', listStyle: 'none', padding: '5px' }}>
      <Card>
        <Card.Img variant='top' src={ backgroundImageSrc } />
        <Card.Body>
          <Card.Title>{ text }</Card.Title>
          <Card.Text>
            <em>{ startTime } - { endTime }</em>
          </Card.Text>
          <Card.Text style={{ fontSize: '1.2em' }}>
            { description }
          </Card.Text>
          <Card.Text>
            <em>at <a href={ mapsUrl }>{ locationName }, { location }</a></em>
          </Card.Text>
          <Button variant='primary' href={ url }>
            { upcoming ? 'RSVP' : 'Check it out' }
          </Button>
        </Card.Body>
      </Card>
    </li>
  )
}

export default Events

export const pageQuery = graphql`
 query {
  site {
    siteMetadata {
      title,
      social {
        twitter,
        eventbriteProfile,
        mailingList
      }
    }
  },
  allEventbriteEvent {
    edges {
      node {
        id,
        name { text },
        description { text },
        url,
        start {
          timezone,
          local,
          utc,
        },
        end {
          timezone,
          local,
          utc,
        },
        venue {
          id,
          name,
          address {
            localized_address_display
          }
        }
      }
    }
  }
}
`

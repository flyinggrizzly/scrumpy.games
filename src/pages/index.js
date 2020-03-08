import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

import Layout from '../components/Layout'
import SEO from '../components/seo'

function dateForEvent(event) {
  let start = dayjs(_.get(event, 'node.start.local'))

  let startDay = start.format('dddd')
  let startDate = start.format('MMM D YYYY')
  let startTime = start.format('h:mm A')

  return `${ startDay }, ${ startDate }, at ${ startTime }`
}

function urlForEvent(event) {
  return _.get(event, 'node.url', '#')
}

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { twitter, eventbriteProfile, mailingList } = data.site.siteMetadata.social

  const events = data.allEventbriteEvent.edges
  const nextSingleSessionEvent = _(events)
    // Filter to future events
    .filter(event => {
      let start = _.get(event, 'node.start.utc')

      return dayjs.utc(start).isAfter(dayjs.utc())
    })
    // Filter to SSG events
    .filter(event => {
      let title = _.get(event, 'node.name.text', '')

      return title.includes("Single Session Games")
    })
    // Get next SSG event
    .minBy(event => {
      let utc = _.get(event, 'node.start.utc', '2999-12-31T23:59:59Z')

      return utc
    })

  return (
    <Layout
      location={ location }
      title={ siteTitle }
      twitter={ twitter }
      eventbriteProfile={ eventbriteProfile }
      mailingList={ mailingList }
    >
      <SEO
        title="Scrumpy Games"
        keywords={[ `roleplaying-game`, `rpg`, `Frome`, `Southwest UK`, `tabletop games`, `ttrpg`, `trpg`, `LARP` ]}
      />

      <Section>
        <h2>
          Welcome to Scrumpy Games!
        </h2>
        <p>
          We are a group of roleplayers in the Southwest of England, mostly centered in/around Frome.
        </p>
        <p>
          We are open to everyone, regardless of skill-level/experience with roleplaying games. All that we require
          of participants is that everyone be welcoming to everyone else and that we all work together to create a safe
          and fun environment for everyone.
        </p>
        <p>
          You can keep up with our events on by <a href={ mailingList }>joining our mailing list</a>, or keep an eye on <a href={ eventbriteProfile }>our Eventbrite profile</a>, or on our (nascent...) <a href={ `https://twitter.com/${ twitter }` }>Twitter</a>.
        </p>
      </Section>

      <Section>
        <h3>
          Ongoing Drop-in Games
        </h3>
        <img src="/event-images/masks.jpg" alt="Cover image for Masks: A New Generation, showing young teenage superheroes of different ethnicities, genders, backgrounds, and with different superpowers, representing the different game playbooks." />
        <p>
          We also run (roughly) monthly games with a rotating cast of characters. Currently we are playing <a href="https://www.magpiegames.com/masks/"><i>Masks: A New Generation</i></a> by Brendan Conway.
        </p>
      </Section>

      <Section>
        <h3>
          Single Session Saturdays
        </h3>
        <p>
          We regularly run <strong>Single Session Saturdays</strong> (about once a month) to meet new people and try out new games.
          We've played <a href="https://bullypulpitgames.com/games/fiasco/"><i>Fiasco</i></a> by Jason
          Morningstar, <a href="https://gshowitt.itch.io/honey-heist"><i>Honey Heist</i></a> by Grant Howitt, and <a href="https://bladesinthedark.com/"><i>Blades in the Dark</i></a> by John Harper to name a few!
        </p>
        <p>
          Our next Single Session Game event will be on <strong>{ dateForEvent(nextSingleSessionEvent) }</strong>, and we'd <a href={ urlForEvent(nextSingleSessionEvent) }>love for you to join us!</a>
        </p>
    </Section>
    </Layout>
  )
}

const Section = ({ children }) => (
  <section style={{ borderBottom: "2px solid #ccc", marginBottom: '2em' }}>
    { children }
  </section>
)

export default Index

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
      }
    }
  }
}
`

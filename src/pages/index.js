import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { twitter, eventbriteProfile, mailingList } = data.site.siteMetadata.social

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

      <h3>
        Single Session Saturdays
      </h3>
      <p>
        We regularly run <strong>Single Session Saturdays</strong> (about once a month) to meet new people and try out new games.
        We've played <a href="https://bullypulpitgames.com/games/fiasco/"><i>Fiasco</i></a> by Jason
        Morningstar, <a href="https://gshowitt.itch.io/honey-heist"><i>Honey Heist</i></a> by Grant Howitt, and <a href="https://bladesinthedark.com/"><i>Blades in the Dark</i></a> by John Harper to name a few!
      </p>
      <p>
        Our next Saturday event will be on <strong>Saturday February 8 in Frome</strong>, and we'd <a href="https://www.eventbrite.com/e/single-session-games-at-the-griffin-tickets-85672391429">love for you to join us!</a>
      </p>

      <h3>
        Ongoing Drop-in Games
      </h3>
      <p>
        We also run (roughly) monthly games with a rotating cast of characters. Currently we are playing <a href="https://www.magpiegames.com/masks/"><i>Masks: A New Generation</i></a> by Brendan Conway.
      </p>

    </Layout>
  )
}

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
    }
  }
`

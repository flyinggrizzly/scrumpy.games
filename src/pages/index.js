import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={ location } title={ siteTitle }>
      <SEO
        title="Scrumpy Games"
        keywords={[ `roleplaying-game`, `rpg`, `Frome`, `Southwest UK`, `tabletop games`, `ttrpg`, `trpg`, `LARP` ]}
      />
      <div>
        Welcome to Scrumpy Games!
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

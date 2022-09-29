import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ a }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{a} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo
import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/common/layout'
import { List } from '../components/news'
import { Seo } from '../components/common/seo'

const NewsPage = data => {
  const edges = data.data.pages.edges
  return (
    <Layout className='page-news'>
      <Seo title='博客' />
      <div className='container'>
        <div className='layout-basic'>
          <div className='title-news page-title'>
            <h1>博客</h1>
          </div>
          <div className='news-list'>
            <List items={edges} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const articleQuery = graphql`
  query {
    pages: allMarkdownRemark(
      filter: { fields: { hash: { eq: "news" } } }
      sort: { fields: fileAbsolutePath, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
            category
            date
            external
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default NewsPage

import * as React from "react"
import { graphql } from 'gatsby'


// markup
const IndexPage = ({ data }) => {
  return (
    <section>
      <h1>Hej</h1>
      {
        data.allContentfulBlog.nodes.map(node => (
          <p>{node.title}</p>
        ))
      }

    </section>
    
  )
}

export default IndexPage


// lägg till från graphql nedan
export const query = graphql `
query MyQuery {
  allContentfulBlog {
    nodes {
			title
      description {
        description
      }
      image {
				title
      file {
        url
      }
      }
    }
    
  }
}
`

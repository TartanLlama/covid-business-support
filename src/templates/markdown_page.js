import React from "react"
import { graphql } from "gatsby"
import BaseTemplate from "./base"

export default function Template({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) {
  return (
    <BaseTemplate meta={{ title }}>
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </BaseTemplate>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
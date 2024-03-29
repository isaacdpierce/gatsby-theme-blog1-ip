import { useStaticQuery, graphql } from "gatsby"
export default () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            url
            headline
          }
        }
      }
    `
  )
  return site.siteMetadata
}

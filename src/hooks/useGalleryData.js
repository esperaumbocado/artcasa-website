import { useStaticQuery, graphql } from 'gatsby'

export const useGalleryData = () => {
  const data = useStaticQuery(graphql`
    query GalleryDataQuery {
      allGalleryData {
        nodes {
          category
          items {
            name
            description
            images
            projectInfo {
              location
              year
              area
              style
            }
          }
        }
      }
    }
  `)

  // Transform the data into an easier-to-use format
  const galleryData = {}
  
  data.allGalleryData.nodes.forEach(node => {
    galleryData[node.category] = node.items
  })

  return galleryData
}

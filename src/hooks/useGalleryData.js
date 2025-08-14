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
            localImages {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
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
    galleryData[node.category] = node.items.map(item => ({
      ...item,
      // Prefer local images (downloaded and cached) over remote URLs
      processedImages: item.localImages && item.localImages.length > 0 
        ? item.localImages.map(img => img.publicURL || img.childImageSharp?.gatsbyImageData)
        : item.images // Fallback to original URLs for external images
    }))
  })

  return galleryData
}

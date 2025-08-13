const { getNotionGalleryData } = require('./src/utils/notion')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type GalleryDataItems {
      name: String!
      description: String!
      images: [String!]!
      projectInfo: ProjectInfo
    }

    type ProjectInfo {
      location: String!
      year: Int!
      area: String!
      style: String!
    }

    type GalleryData implements Node {
      category: String!
      items: [GalleryDataItems!]!
    }
  `

  createTypes(typeDefs)
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  try {
    // Fetch gallery data from Notion
    const galleryData = await getNotionGalleryData()

    // Create nodes for each category
    Object.entries(galleryData).forEach(([category, items]) => {
      const nodeData = {
        category,
        items,
      }

      const node = {
        ...nodeData,
        id: createNodeId(`gallery-${category}`),
        parent: null,
        children: [],
        internal: {
          type: 'GalleryData',
          content: JSON.stringify(nodeData),
          contentDigest: createContentDigest(nodeData),
        },
      }

      createNode(node)
    })

    console.log('✅ Successfully created gallery nodes from Notion data')
  } catch (error) {
    console.error('❌ Error creating gallery nodes:', error)
    // Create fallback nodes if Notion fails
    const fallbackData = {
      'estores-exterior': [],
      'estores-interior': [],
      'texteis-lar': [],
      'estofos': [],
      'papel-parede': [],
      'tapetes': [],
      'projects': []
    }

    Object.entries(fallbackData).forEach(([category, items]) => {
      const nodeData = {
        category,
        items,
      }

      const node = {
        ...nodeData,
        id: createNodeId(`gallery-${category}`),
        parent: null,
        children: [],
        internal: {
          type: 'GalleryData',
          content: JSON.stringify(nodeData),
          contentDigest: createContentDigest(nodeData),
        },
      }

      createNode(node)
    })
  }
}

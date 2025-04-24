import type { CollectionConfig } from 'payload'

export const Themes: CollectionConfig = {
  slug: 'themes',
  // orderable: true, // uncomment me after adding data
  admin: {
    useAsTitle: 'title'
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300
      }
    }
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    }
  ]
}

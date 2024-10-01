import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {singletonTools} from 'sanity-plugin-singleton-tools'
import {structure} from './structure/structure'

export default defineConfig({
  name: 'default',
  title: 'Macroprint',

  projectId: 'gtsnokwt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: structure
    }),
    visionTool(),
    singletonTools()
  ],

  schema: {
    types: schemaTypes,
  },
})

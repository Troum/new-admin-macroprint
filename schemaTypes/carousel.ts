import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const carousel = defineType({
  name: 'carousel',
  title: 'Слайдер главной страницы',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'slides',
      title: 'Слайды карусели',
      type: 'array',
      of: [{type: 'image'}]
    })
  ],
  options: {
    singleton: true
  }
})
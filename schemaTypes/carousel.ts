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
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'description',
            title: 'Описание слайда',
            type: 'array',
            of: [{
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'H5', value: 'h5'},
                {title: 'H6', value: 'h6'},
                {title: 'Quote', value: 'blockquote'}
              ],
              lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Numbered', value: 'number'}
              ]
            }]
          }),
          defineField({
            name: 'slide',
            title: 'Изображение',
            type: 'image',
            options: {
              hotspot: true
            }
          }),
        ]
      }]
    }),
  ],
  options: {
    singleton: true
  }
})
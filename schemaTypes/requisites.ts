import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'
import {generateTimes} from '../utils/generateTimes'


export const requisites = defineType({
  name: 'requisites',
  title: 'Страница реквизитов',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'info',
      title: 'Реквизиты и иная информация',
      type: 'array',
      of: [
        {
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
        }, {
          type: 'image'
        }
      ]
    })
  ],
  options: {
    singleton: true
  }
})
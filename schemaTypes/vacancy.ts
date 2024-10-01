import {defineField, defineType} from 'sanity'
import {slugify} from 'transliteration'
import {StackIcon} from '@sanity/icons'

export const vacancy = defineType({
  name: 'vacancy',
  title: 'Вакансия',
  type: 'document',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Заголовок',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Описание вакансии',
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
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Слаг (человеку понятный URL)',
      options: {
        source: 'label',
        slugify: input =>
          slugify(input, { lowercase: true, separator: '-' })
            .slice(0, 200)
      }
    })
  ]
})
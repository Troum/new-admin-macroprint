import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'
import {slugify} from 'transliteration'

export const requirements = defineType({
  name: 'requirements',
  title: 'Технически требования',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'commonRequirements',
      title: 'Общие требования к макетам',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'outsideRequirements',
      title: 'Требования к наружной рекламе',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Заголовок',
              type: 'string'
            }),
            defineField({
              name: 'preview_content',
              title: 'Текст для превью',
              type: 'string'
            }),
            defineField({
              name: 'main_content',
              title: 'Контент',
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
                source: 'title',
                slugify: input =>
                  slugify(input, {lowercase: true, separator: '-'})
                    .slice(0, 200)
              }
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'files',
      title: 'Библиотека файлов',
      type: 'array',
      of: [{
        type: 'object', fields: [
          defineField({
            name: 'title',
            title: 'Название файла дял сайта',
            type: 'string'
          }),
          defineField({
            name: 'file',
            type: 'file'
          })
        ]
      }]
    })
  ],
  options: {
    singleton: true
  }
})
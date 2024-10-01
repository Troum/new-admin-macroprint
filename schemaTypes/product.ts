import {defineField, defineType} from 'sanity'
import {slugify} from 'transliteration'
import {PresentationIcon} from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Продукция',
  type: 'document',
  icon: PresentationIcon,
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
      name: 'icon',
      title: 'Иконка',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'preview_image',
      title: 'Превью',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'main_images',
      title: 'Слайдшоу для страницы просмотра',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'materials',
      title: 'Материалы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'materialTitle',
            type: 'string',
            title: 'Название материала'
          }),
          defineField({
            name: 'materialImage',
            title: 'Изображение',
            type: 'image',
            options: {
              hotspot: true
            }
          }),
          defineField({
            name: 'materialDescription',
            title: 'Описание',
            type: 'array',
            of: [{type: 'block'}]
          }),
        ]
      }]
    }),
    defineField({
      name: 'examples',
      title: 'Примеры',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'exampleTitle',
            type: 'string',
            title: 'Название примера'
          }),
          defineField({
            name: 'exampleMaterial',
            type: 'string',
            title: 'Название материала'
          }),
          defineField({
            name: 'exampleImage',
            title: 'Изображение',
            type: 'image',
            options: {
              hotspot: true
            }
          }),
          defineField({
            name: 'exampleDescription',
            title: 'Описание',
            type: 'array',
            of: [{type: 'block'}]
          }),
        ]
      }]
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
})
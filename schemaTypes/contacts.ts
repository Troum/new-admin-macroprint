import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'
import {generateTimes} from '../utils/generateTimes'


export const contacts = defineType({
  name: 'contacts',
  title: 'Страница контактов',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'info',
      title: 'Как нас найти',
      type: 'array',
      of: [{
        type: 'block'
      }]
    }),
    defineField({
      name: 'address',
      title: 'Адрес',
      type: 'object',
      fields: [
        defineField({
          name: 'address_text', type: 'string', title: 'Адрес'
        }),
        defineField({
          name: 'address_link', type: 'string', title: 'Ссылка из Яндекс.Карты'
        })
      ]
    }),
    defineField({
      name: 'schedule',
      title: 'Время работы',
      type: 'object',
      fields: [
        defineField({
          name: 'start', type: 'string', title: 'Начало работы', options: {
            list: generateTimes(),
            layout: 'dropdown'
          }
        }),
        defineField({
          name: 'end', type: 'string', title: 'Конец работы', options: {
            list: generateTimes(),
            layout: 'dropdown'
          }
        }),
        defineField({
          name: 'weekend', type: 'string', title: 'Выходные'
        }),
        defineField({
          name: 'factory', type: 'string', title: 'Производство'
        })
      ]
    }),
    defineField({
      name: 'contacts',
      title: 'Контакты',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'contact',
            title: 'Контакт',
            type: 'string'
          }),
          defineField({
            name: 'href',
            title: 'Ссылка',
            type: 'string'
          })
        ]
      }]
    })
  ],
  options: {
    singleton: true
  }
})
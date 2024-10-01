import {
  singletonDocumentListItems,
  filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...singletonDocumentListItems({ S, context }),
      S.divider(),
      ...filteredDocumentListItems({ S, context }),
    ]);
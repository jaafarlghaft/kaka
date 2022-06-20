export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "en_title",
      title: "Title",
      type: "string",
    },
    {
      name: "fr_title",
      title: "Titre",
      type: "string",
    },
    {
      name: "es_title",
      title: "Título",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

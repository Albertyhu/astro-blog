import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      publish_mode: "editorial_workflow",
      media_folder: "src/assets",
      public_folder: "/assets/uploads", 
      collections: [{
        name: "posts",
        label: "Blog Posts",
        folder: "src/pages/posts",
        create: true,
        delete: true,
        fields: [{
          name: "layout",
          widget: "hidden",
          label: "Layout",
          default: '../../layouts/MarkdownPostLayout.astro',

        }, {
          name: "title",
          widget: 'string',
          label: "Title"
        }, {
          name: "pubDate",
          widget: 'datetime',
          label: "Published date"
        }, {
          name: "description",
          widget: 'string',
          label: "Description"
        }, {
          name: "author",
          widget: 'string',
          label: "Author"
        }, {
          name: "images",
          widget: 'list',
          label: "Images",
          fields: [{
            name: "image",
            widget: 'image',
            label: "Image"
          }]
        }, {
          name: "tags",
          widget: 'list',
          label: "tags",
          fields:[{
            name: "tag",
            widget: "string",
            label: "Tag",             
          }]
        }, {
          name: "body",
          widget: 'markdown',
          label: "Body"
        },
      ]
      }],
    }
  }), 
  preact()]
});
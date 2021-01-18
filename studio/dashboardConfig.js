export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6005458f71e7dfdd9cc979fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-is4eh2c6',
                  apiId: '3abc6554-e8e4-4183-9c4d-628d143e9285'
                },
                {
                  buildHookId: '6005458f685d264658d726d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-943zj9n2',
                  apiId: 'd031a3d0-c4e3-47da-9baf-5eaa03d33575'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dennyhong96/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-943zj9n2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

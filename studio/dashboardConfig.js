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
                  buildHookId: '610a80ef5af654bd0dc8b14c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3bceb7xe',
                  apiId: '66c100f9-4873-4a82-8cdb-6e3274bc2b91'
                },
                {
                  buildHookId: '610a80efc43d2cd494e03895',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e8rzbser',
                  apiId: 'a8181e31-c596-442a-84ba-43c9c9a460c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/monfortbrian/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e8rzbser.netlify.app', category: 'apps'}
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

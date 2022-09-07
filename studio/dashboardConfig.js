export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6318700dc6afe7170436fe6c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tutctzrf',
                  apiId: '0f2ed357-0c4d-44b9-98ab-9ceedaf694b1'
                },
                {
                  buildHookId: '6318700e1c52741379f74cc1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-45onj3pa',
                  apiId: '45f78861-2da1-4902-843c-4e0b331e8f38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hostgsr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-45onj3pa.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

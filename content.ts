export const home = {
  draft: {
    hero: {
      title: 'Hmm, need something clever here',
      body: 'blah blah blah, our product is the best!',
    },
    features: [
      { title: 'Feature 1', body: 'something dope about feature 1 here soon.', image: '/' },

      { title: 'Feature 2', body: 'something dope about feature 2 here soon.', image: '/' },
    ],
  },
  published: {
    hero: {
      title: 'You next knowledge base.',
      body: 'High performing editor to document and record everything.',
    },
    features: [
      {
        title: 'Next Gen Editor',
        body: 'Forget about markdown and rich text. Our minimum design editor is superchared to handle any content.',
        image: '/editor.png',
      },
      {
        title: 'Stay Organized',
        body: 'Use folders to put your docs right where you need them when you need them.',
        image: '/docs.png',
      },
    ],
  },
}

export const posts = {
  draft: [
    `---
title: "We're hiring"
summary: 'Will come up with summary later'
slug: 'we-are-hiring'
publsihedOn: ''
---

## nice post, who dis
`,
    `---
title: Why you should write down everything
summary: Will come up with summary later
slug: why-you-should-write-down-everything
publsihedOn: ''
---
## Writing is fun`,
  ],
  published: [
    `---
title: "We're not hiring"
summary: Come work at a really nice company.
slug: we-are-hiring
publsihedOn: '12-03-2020'
---
## Come with with us
`,
    `---
title: Why you should write down everything
summary: If you write it down, you won't forget.
slug: why-you-should-write-down-everything
publsihedOn: '3-20-2020'
---
## Alen Poe writes`,
  ],
}

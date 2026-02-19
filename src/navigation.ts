import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      links: [
      {
        text: 'Overview',
        href: getPermalink('/about'),
      },
      {
        text: 'Resume',
        href: getPermalink('/resume'),
      },
      {
        text: 'GitHub Profile',
        href: getPermalink('portfolio'),
      },
      ],
    },
    {
      text: 'Weekly Status Updates',
      links: [
        {
          text: 'Week 2',
          href: getPermalink('/homes/week_2'),
        },
        {
          text: 'Week 3',
          href: getPermalink('/homes/week3'),
        },
        {
          text: 'Week 4',
          href: getPermalink('/homes/week4'),
        },
        {
          text: 'Week 5',
          href: getPermalink('/homes/week5'),
        },
      ],
    },
    {
      text: 'Research Updates',
      links: [
        {
          text: 'GitHub and GitLab',
          href: getPermalink('/landing/week2research'),
        },
        {
          text: 'CI/CD Pipelines',
          href: getPermalink('/landing/CI-CD'),
        },
        {
          text: 'Configuration Files',
        },
        {
          text: 'Flake8',
        },
        {
          text: 'cppcheck/cpplint',
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};

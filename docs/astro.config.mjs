// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
  site: 'https://factenginecommunity.github.io',
  base: '/NexQL/',
  integrations: [starlight({
    title: 'NexQL',
    description: 'The query language for AI agents. Natural-language readability. Deterministic queries. SQL and Cypher through FactEngine.',
    customCss: ['./src/styles/nexql.css'],
    components: { Hero: './src/components/Landing.astro', ThemeProvider: './src/components/ThemeProvider.astro' },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/FactEngineCommunity/NexQL' }],
    sidebar: [
      { label: 'Learn NexQL', items: [
        {label: 'Your first query', slug: 'guides/example'},
        {label: 'Choose what comes back', slug: 'guides/results'},
        {label: 'Follow relationships & filter', slug: 'guides/relationships'},
        {label: 'Aggregate and analyse', slug: 'guides/analytics'},
      ]},
      { label: 'Build with AI', items: [{label: 'NexQL for agents', slug: 'guides/agents'}]},
      { label: 'Explore', items: [
        {label: 'Query examples', slug: 'reference/examples'},
        {label: 'Language essentials', slug: 'reference/example'},
        {label: 'Concepts & FAQ', slug: 'reference/concepts'},
      ]},
    ],
  })],
});

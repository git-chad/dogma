import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'
import { Connection } from './types'

export const clients = [...new Array(10)].map((client, idx) => ({
  href: `/${idx + 1}.png`,
}));

export const products = [
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p1.png",
  },
  {
    title: "Dogma",
    link: "https://github.com/git-chad",
    thumbnail: "/p2.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p3.png",
  },

  {
    title: "by",
    link: "https://github.com/git-chad",
    thumbnail: "/p4.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p5.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p6.png",
  },

  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p1.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p2.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p3.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p4.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p5.png",
  },

  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p6.png",
  },
  {
    title: "@git-chad",
    link: "https://github.com/git-chad",
    thumbnail: "/p1.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p2.png",
  },
  {
    title: "",
    link: "https://github.com/git-chad",
    thumbnail: "/p3.png",
  },
];

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]

export const CONNECTIONS: Connection[] = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/googleDrive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.png',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]
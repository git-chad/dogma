import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'


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
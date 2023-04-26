export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "ScheduleGPT",
  description:
    "ScheduleGPT is a scheduling tool that uses GPT-3 to find the best time for a group to meet.",
  url: "https://tx.yeabu369.com",
  ogImage: "https://tx.yeabu369.com/og.jpg",
  links: {
    twitter: "https://twitter.com/yeabu369",
    github: "https://github.com/yeabu369/escrow-gpt",
  },
}

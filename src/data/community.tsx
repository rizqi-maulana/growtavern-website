// Definisikan antarmuka untuk CommunityData
interface CommunityItem {
  title: string;
  src: string;
  desc: string;
  link: string;
  color: string;
}

export const CommunityData: CommunityItem[] = [
  {
    title: 'Discord',
    src: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022038/discord_bzonuf.webp',
    desc: 'Growtavern Discord Server',
    link: 'https://discord.gg/5JnqV5g',
    color: '7289DA'
  },
  {
    title: 'WhatsApp',
    src: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022042/whatsapp_xwdh8w.webp',
    desc: 'Growtavern Whatsapp Group',
    link: 'https://discord.gg/5JnqV5g',
    color: '25D366'
  }
]

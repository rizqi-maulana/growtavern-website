import Reseller from '@/assets/image/bitcoin.png'
import SDeveloper from '@/assets/image/sdev.png'
import Developer from '@/assets/image/dev.png'
import Mod from '@/assets/image/mod.png'
import Vip from '@/assets/image/vip.png'
import { StaticImageData } from 'next/image'

interface Item {
  title: string;
  image: string;
  desc: string;
  href: string;
  special?: string[]
  price: number
}

interface Role {
  roles: string;
  color: string;
  icon: string | StaticImageData;
  image: string;
  desc: string;
  href: string;
  price: number
}

interface Title {
  roles: string;
  color: string;
  desc: string;
  image: string;
  href: string;
}

interface Other {
  roles: string;
  color: string;
  desc: string;
  image: string;
  href: string;
}

interface StoreData {
  items: Item[];
  roles: Role[];
  level: number;
  titles: Title[];
  other: Other[];
}

export const StoreData: StoreData = {
  items: [
    {
      title: "Diamond Pickaxe of Celestial Might",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726074579/Untitled-2_v9rabv.webp",
      desc: "Eclipsebane, the Diamond Pickaxe of Celestial Might Forged in a dying star's heart, Eclipsebane glows with celestial radiance. This enchanted pickaxe cleaves stone and ore with a single strike and mines blocks from two paces away, bending reality itself. Its legendary origins whisper of a blacksmith who channeled the heavens' power into mortal hands. Now, that power is yours to wield.",
      href: "Diamond Pickaxe of Celestial Might",
      special: [
        "Bisa Terbang",
        "bisa mandi",
        "bisa makan"
      ],
      price: 500000
    },
    {
      title: "Diamond Pickaxe of Celestial Mights",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726074579/Untitled-2_v9rabv.webp",
      desc: "Eclipsebane, the Diamond Pickaxe of Celestial Might Forged in a dying star's heart, Eclipsebane glows with celestial radiance. This enchanted pickaxe cleaves stone and ore with a single strike and mines blocks from two paces away, bending reality itself. Its legendary origins whisper of a blacksmith who channeled the heavens' power into mortal hands. Now, that power is yours to wield.",
      href: "Diamond Pickaxe of Celestial Might",
      price: 500000
    }
  ],
  roles: [
    {
      roles: "Reseller",
      color: "#F7931A",
      icon: Reseller,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726062431/Screenshot_2024-09-11_214648_oyi5s8.webp",
      desc: "maulana",
      href: "#",
      price: 500000
    },
    {
      roles: "Super Developer",
      color: "#7E00FA",
      icon: SDeveloper,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061664/Screenshot_2024-09-11_205340_a3yqb4.webp",
      desc: "The highest authority in the game, responsible for full control over the server, including server maintenance, critical updates, game mechanics, and administrative decisions. They have unlimited access to all systems, tools, and in-game commands.",
      href: "super developer",
      price: 250000
    },
    {
      roles: "Developer",
      color: "#00BEFA",
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061664/Screenshot_2024-09-11_205252_f5sfpn.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      href: "Developer",
      price: 200000
    },
    {
      roles: "Moderator",
      color: "#FB047B",
      icon: Mod,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061663/Screenshot_2024-09-11_205221_tfygys.webp",
      desc: "A community overseer tasked with enforcing server rules, managing player behavior, and handling disputes. They can mute, ban, and kick players to maintain a fair and safe gaming environment, with limited administrative access.",
      href: "Moderator",
      price: 100000
    },
    {
      roles: "Vip",
      color: "#04CFFB",
      icon: Vip,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061367/Screenshot_2024-09-11_205121_tsapaz.webp",
      desc: "A privileged role granted to special players, offering exclusive perks like access to unique items, commands, or areas in the game. VIPs do not have administrative power but enjoy benefits unavailable to regular players.",
      href: "Vip",
      price: 50000
    },
  ],
  level: 5,
  titles: [
    {
      roles: "Dr.Title",
      color: "#F71A1A",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205604_k8hvvv.webp",
      href: "/DrTitle"
    },
    {
      roles: "Grow4Good",
      color: "#108E24",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205802_jrgb4a.webp",
      href: "/Grow4Good"
    },
    {
      roles: "Legendary of Legend",
      color: "#E3B43E",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205843_srcj8w.webp",
      href: "/LegendaryofLegend"
    },
    {
      roles: "Mentor",
      color: "#04CEFB",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205818_dz3zaw.webp",
      href: "/SuperSupporter"
    },
  ],
  other: [
    {
      roles: "Super Supporter",
      color: "#b758e0",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726062105/Screenshot_2024-09-11_210715_cdtetr.webp",
      href: "/DrTitle"
    },
  ]
}
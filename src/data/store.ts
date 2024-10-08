// import Reseller from '@/assets/image/bitcoin.png'
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
  price: number,
  category: string
}

interface Role {
  roles: string;
  color: string;
  icon: string | StaticImageData;
  image: string;
  desc: string;
  commands: string;
  href: string;
  price: number
  category: string

}

interface Title {
  title: string;
  color: string;
  desc: string;
  image: string;
  href: string;
  price: number
  category: string


}

interface Level {
  image: string;
  desc: string;
  level: number;
  price: number
}

interface Other {
  name: string;
  color: string;
  desc: string;
  image: string;
  href: string;
  price: number
  category: string
}


interface StoreData {
  items: Item[];
  roles: Role[];
  level: Level;
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
      price: 500000,
      category: "items"
    },
    {
      title: "Diamond Pickaxe of Celestial Mights",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726074579/Untitled-2_v9rabv.webp",
      desc: "Eclipsebane, the Diamond Pickaxe of Celestial Might Forged in a dying star's heart, Eclipsebane glows with celestial radiance. This enchanted pickaxe cleaves stone and ore with a single strike and mines blocks from two paces away, bending reality itself. Its legendary origins whisper of a blacksmith who channeled the heavens' power into mortal hands. Now, that power is yours to wield.",
      href: "Diamond Pickaxe of Celestial Might",
      price: 500000,
      category: "items"

    }
  ],
  roles: [
    // {
    //   roles: "Reseller",
    //   color: "#F7931A",
    //   icon: Reseller,
    //   image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726062431/Screenshot_2024-09-11_214648_oyi5s8.webp",
    //   desc: "maulana",
    //   href: "#",
    //   price: 500000,
    //   category: "roles"
    // },
    {
      roles: "Super Developer",
      color: "#7E00FA",
      icon: SDeveloper,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061664/Screenshot_2024-09-11_205340_a3yqb4.webp",
      desc: "The highest authority in the game, responsible for full control over the server, including server maintenance, critical updates, game mechanics, and administrative decisions. They have unlimited access to all systems, tools, and in-game commands.",
      commands: "help,proxy,pay,troll,cheer,freezeworld,msb,dsb,stream,tapeworld,news,modfly,reloadworld,resetworld,trashall,skin,onehit,mute,curse,unmute,uncurse,rainbow,info,summon,ghost,hide,unequip,nuke,warpto,invis,mc,nick,valentine,v,vsb,surgerys,warp,inventory,rwarp,chatcolor,search,find,kickall,syncroles,hidestatus,online,msg,status,mods,sb,sdb,top,ignore,cheats,time,home,sethome,gethome,who,me,radio,mods,uba,r,go,hub,rgo,pull,kick,ban,wave,dance,love,sleep,facepalm,fp,smh,yes,no,omg,idk,shrug,trade,furious,rolleyes,unaccess,report,rate,foldarms,fa,stubborn,fold,fc,gc,gwarp,guild",
      href: "Super Developer",
      price: 200000,
      category: "roles"

    },
    {
      roles: "Developer",
      color: "#00BEFA",
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061664/Screenshot_2024-09-11_205252_f5sfpn.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      commands: "help,proxy,pay,troll,kit,cheer,skin,onehit,msb,dsb,stream,mute,news,curse,unmute,uncurse,rainbow,info,summon,ghost,hide,unequip,nuke,warpto,invis,mc,nick,valentine,v,vsb,surgerys,warp,inventory,rwarp,chatcolor,search,find,kickall,syncroles,hidestatus,online,msg,status,mods,sb,sdb,top,ignore,cheats,time,home,sethome,gethome,who,me,radio,mods,uba,r,go,hub,rgo,pull,kick,ban,wave,dance,love,sleep,facepalm,fp,smh,yes,no,omg,idk,shrug,trade,furious,rolleyes,unaccess,report,rate,foldarms,fa,stubborn,fold,fc,gc,gwarp,guild",
      href: "Developer",
      price: 150000,
      category: "roles"

    },
    {
      roles: "Moderator",
      color: "#FB047B",
      icon: Mod,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061663/Screenshot_2024-09-11_205221_tfygys.webp",
      desc: "A community overseer tasked with enforcing server rules, managing player behavior, and handling disputes. They can mute, ban, and kick players to maintain a fair and safe gaming environment, with limited administrative access.",
      commands: "help,proxy,pay,kit,troll,cheer,rainbow,stream,msb,info,news,summon,ghost,hide,unequip,nuke,warpto,invis,mc,nick,valentine,v,vsb,surgerys,warp,inventory,rwarp,chatcolor,search,find,kickall,syncroles,hidestatus,online,msg,status,mods,sb,sdb,top,ignore,cheats,time,home,sethome,gethome,who,me,radio,mods,uba,r,go,hub,rgo,pull,kick,ban,wave,dance,love,sleep,facepalm,fp,smh,yes,no,omg,idk,shrug,trade,furious,rolleyes,unaccess,report,rate,foldarms,fa,stubborn,fold,fc,gc,gwarp,guild",
      href: "Moderator",
      price: 50000,
      category: "roles"

    },
    {
      roles: "Vip",
      color: "#04CFFB",
      icon: Vip,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061367/Screenshot_2024-09-11_205121_tsapaz.webp",
      desc: "A privileged role granted to special players, offering exclusive perks like access to unique items, commands, or areas in the game. VIPs do not have administrative power but enjoy benefits unavailable to regular players.",
      commands: "help,proxy,pay,kit,troll,cheer,rainbow,stream,valentine,news,v,vsb,surgerys,warp,inventory,rwarp,chatcolor,search,find,kickall,syncroles,hidestatus,online,msg,status,mods,sb,sdb,top,ignore,cheats,time,home,sethome,gethome,who,me,radio,mods,uba,r,go,hub,rgo,pull,kick,ban,wave,dance,love,sleep,facepalm,fp,smh,yes,no,omg,idk,shrug,trade,furious,rolleyes,unaccess,report,rate,foldarms,fa,stubborn,fold,fc,gc,gwarp,guild",
      href: "Vip",
      price: 50000,
      category: "roles"

    },
  ],
  level: {
    image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1728216865/Screenshot_2024-10-06_201407_lpwqgt.webp",
    desc: "In GrowTavern, players can accelerate their progress by purchasing levels directly from our official website. This feature allows players to enhance their gaming experience without spending as much time grinding for experience points (XP). By purchasing levels, you can unlock new rewards, gain access to exclusive content, and stand out in the community.",
    level: 5,
    price: 5000
  },
  titles: [
    {
      title: "DrTitle",
      color: "#F71A1A",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205604_k8hvvv.webp",
      href: "DrTitle",
      price: 500000,
      category: "titles"
    },
    {
      title: "Grow4Good",
      color: "#108E24",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205802_jrgb4a.webp",
      href: "Grow4Good",
      price: 500000,
      category: "titles"


    },
    {
      title: "Legendary of Legend",
      color: "#E3B43E",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205843_srcj8w.webp",
      href: "Legendary of Legend",
      price: 500000,
      category: "titles"


    },
    {
      title: "Mentor",
      color: "#04CEFB",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205818_dz3zaw.webp",
      href: "Mentor",
      price: 500000,
      category: "titles"


    },
  ],
  other: [
    {
      name: "Super Supporter",
      color: "#b758e0",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726062105/Screenshot_2024-09-11_210715_cdtetr.webp",
      href: "Super Supporter",
      price: 500000,
      category: "other"
    },
  ]
}
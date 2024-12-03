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
  special?: string[]
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

// interface Level {
//   image: string;
//   desc: string;
//   level: number;
//   price: number
// }

interface Other {
  name: string;
  color: string;
  level?: number;
  desc: string;
  image: string;
  href: string;
  price?: number
  items?: {
    image: string;
    price: number;
    amount: number
  }[]
  category: string
}


interface StoreData {
  items: Item[];
  roles: Role[];
  // level: Level;
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
    {
      roles: "Developer",
      color: "#7E00FA",
      icon: SDeveloper,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063962/developer-banner_liqn5v.webp",
      desc: "The highest authority in the game, responsible for full control over the server, including server maintenance, critical updates, game mechanics, and administrative decisions. They have unlimited access to all systems, tools, and in-game commands.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban,color,checkid,find,nick,freezeall,ghost,fakeban,fakewarn,fl,banall,1hit,pullall,dsummon,logs,setmag,setmagseed,scan,gsm,setvend,clearvend,clearmag,clearmagseed,blacklist,ggems,glevel,online,saveworld,spk,asb,removedrop,spl,rpl,growall,infoex,banrid,banip",
      href: "Developer",
      price: 250000,
      category: "roles",
      special: [
        "Bisa Terbang",
        "bisa mandi",
        "bisa makan"
      ],
    },
    {
      roles: "Admin",
      color: "#00BEFA",
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063964/admin-banner_jjbhqh.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban,color,checkid,find,nick,freezeall,ghost,fakeban,fakewarn,fl,banall,1hit,pullall,dsummon,logs,setmag,setmagseed,scan",
      href: "Admin",
      price: 150000,
      category: "roles"
    },
    {
      roles: "Owner",
      color: "#00BEFA",
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/owner-banner_cjqgs5.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban,color,checkid,find,nick,freezeall,ghost,fakeban,fakewarn,fl,banall,1hit,pullall,dsummon,logs,setmag,setmagseed,scan,gsm,setvend,clearvend,clearmag,clearmagseed,blacklist,ggems,glevel,online,saveworld,spk,asb,removedrop,spl,rpl,growall,infoex,banrid,banip,reset,takeworld,osb,unsafeedit,weather,clearworld,spawnevent,ggxp,gtoken,gseal,reset_rolequest,verifycsn,removereqcsn,ipcheck,removelogs",
      href: "Owner",
      price: 350000,
      category: "roles"
    },
    {
      roles: "Cheater",
      color: "#00BEFA",
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063964/cheater-banner_h4cvpu.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      commands: "/cheats /c <cheater chat>",
      href: "Cheater",
      price: 15000,
      category: "roles"
    },
    {
      roles: "Moderator",
      color: "#FB047B",
      icon: Mod,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063962/moderator-banner_tqixei.webp",
      desc: "A community overseer tasked with enforcing server rules, managing player behavior, and handling disputes. They can mute, ban, and kick players to maintain a fair and safe gaming environment, with limited administrative access.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban",
      href: "Moderator",
      price: 50000,
      category: "roles"

    },
    {
      roles: "VIP",
      color: "#04CFFB",
      icon: Vip,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063962/vip-banner_zb4a6c.webp",
      desc: "A privileged role granted to special players, offering exclusive perks like access to unique items, commands, or areas in the game. VIPs do not have administrative power but enjoy benefits unavailable to regular players.",
      commands: "help,proxy,pay,kit,troll,cheer,rainbow,stream,valentine,news,v,vsb,surgerys,warp,inventory,rwarp,chatcolor,search,find,kickall,syncroles,hidestatus,online,msg,status,mods,sb,sdb,top,ignore,cheats,time,home,sethome,gethome,who,me,radio,mods,uba,r,go,hub,rgo,pull,kick,ban,wave,dance,love,sleep,facepalm,fp,smh,yes,no,omg,idk,shrug,trade,furious,rolleyes,unaccess,report,rate,foldarms,fa,stubborn,fold,fc,gc,gwarp,guild",
      href: "VIP",
      price: 15000,
      category: "roles"
    },
  ],
  // level: {
  //   image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063964/level-banner_zjzjly.webp",
  //   desc: "In GrowTavern, players can accelerate their progress by purchasing levels directly from our official website. This feature allows players to enhance their gaming experience without spending as much time grinding for experience points (XP). By purchasing levels, you can unlock new rewards, gain access to exclusive content, and stand out in the community.",
  //   level: 5,
  //   price: 5000
  // },
  titles: [
    {
      title: "DrTitle",
      color: "#F71A1A",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205604_k8hvvv.webp",
      href: "DrTitle",
      price: 20000,
      category: "titles"
    },
    {
      title: "Grow4Good",
      color: "#108E24",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205802_jrgb4a.webp",
      href: "Grow4Good",
      price: 15000,
      category: "titles"


    },
    {
      title: "Legendary of Legend",
      color: "#E3B43E",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205843_srcj8w.webp",
      href: "Legendary of Legend",
      price: 25000,
      category: "titles"


    },
    {
      title: "Mentor",
      color: "#04CEFB",
      desc: "maulana",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205818_dz3zaw.webp",
      href: "Mentor",
      price: 20000,
      category: "titles"


    },
  ],
  other: [
    {
      name: "Level",
      color: "#b758e0",
      desc: "In GrowTavern, players can accelerate their progress by purchasing levels directly from our official website. This feature allows players to enhance their gaming experience without spending as much time grinding for experience points (XP). By purchasing levels, you can unlock new rewards, gain access to exclusive content, and stand out in the community.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063964/level-banner_zjzjly.webp",
      href: "Level",
      price: 5000,
      level: 5,
      category: "other"
    },
    {
      name: "Gems",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/hems-banner_djz36n.webp",
      href: "Gems",
      items: [
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067978/gems-5k_znlxz4.webp",
          price: 500,
          amount: 5000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067915/gems-10k_zl48bt.webp",
          price: 1000,
          amount: 10000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067918/gems-50k_thutas.webp",
          price: 5000,
          amount: 50000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067914/gems-100k_iahvsz.webp",
          price: 10000,
          amount: 100000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067917/gems-500k_utrf6y.webp",
          price: 50000,
          amount: 500000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067918/gems-1jt_zjv1n6.webp",
          price: 100000,
          amount: 1000000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067922/gems-500jt_pdye7h.webp",
          price: 500000,
          amount: 5000000
        },
      ],
      category: "other"
    },
    {
      name: "GrowToken",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/hems-banner_djz36n.webp",
      href: "GrowToken",
      items: [
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067978/gems-5k_znlxz4.webp",
          price: 50000,
          amount: 10
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067915/gems-10k_zl48bt.webp",
          price: 50000,
          amount: 100
        },
      ],
      category: "other"
    },
    {
      name: "GrowPass",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/hems-banner_djz36n.webp",
      href: "GrowPass",
      price: 30000,
      category: "other"
    },
    {
      name: "GrowTaverCoin",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/hems-banner_djz36n.webp",
      href: "GrowTaverCoin",
      items: [
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067978/gems-5k_znlxz4.webp",
          price: 5000,
          amount: 100
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067978/gems-5k_znlxz4.webp",
          price: 10000,
          amount: 500
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067978/gems-5k_znlxz4.webp",
          price: 100000,
          amount: 5000
        },
      ],
      category: "other"
    },
    {
      name: "Glory",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/hems-banner_djz36n.webp",
      href: "Glory",
      price: 25000,
      category: "other"
    },
  ]
}
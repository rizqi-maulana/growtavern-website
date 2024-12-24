// import Reseller from '@/assets/image/bitcoin.png'
import SDeveloper from '@/assets/image/sdev.png'
import Developer from '@/assets/image/dev.png'
import Mod from '@/assets/image/mod.png'
import Vip from '@/assets/image/vip.png'
import { StaticImageData } from 'next/image'

interface Item {
  name: string;
  image: string;
  desc: string;
  // coin?: number;
  href: string;
  specialImage?: string[]
  special?: string[]
  price: number,
  category: string
}

interface Role {
  name: string;
  color: string;
  icon: string | StaticImageData;
  specialImage?: string[]
  special?: string[]
  coin: number;
  image: string;
  desc: string;
  commands: string;
  href: string;
  price: number
  category: string

}

interface Title {
  name: string;
  color: string;
  desc: string;
  image: string;
  href: string;
  coin?: number;
  price: number;
  category: string;


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
  coin?: number;
  price?: number;
  selectedImage?: string;
  items?: {
    image: string;
    price: number;
    coin?: number;
    amount: number
  }[]
  amount?: number;
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
      name: "Diamond Pickaxe of Celestial Might",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726074579/Untitled-2_v9rabv.webp",
      desc: "Eclipsebane, the Diamond Pickaxe of Celestial Might Forged in a dying star's heart, Eclipsebane glows with celestial radiance. This enchanted pickaxe cleaves stone and ore with a single strike and mines blocks from two paces away, bending reality itself. Its legendary origins whisper of a blacksmith who channeled the heavens' power into mortal hands. Now, that power is yours to wield.",
      href: "Diamond Pickaxe of Celestial Might",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Bisa Terbang",
        "bisa mandi",
        "bisa makan"
      ],
      price: 500000,
      category: "items"
    },
    {
      name: "Diamond Pickaxe of Celestial Mights",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726074579/Untitled-2_v9rabv.webp",
      desc: "Eclipsebane, the Diamond Pickaxe of Celestial Might Forged in a dying star's heart, Eclipsebane glows with celestial radiance. This enchanted pickaxe cleaves stone and ore with a single strike and mines blocks from two paces away, bending reality itself. Its legendary origins whisper of a blacksmith who channeled the heavens' power into mortal hands. Now, that power is yours to wield.",
      href: "Diamond Pickaxe of Celestial Might",
      price: 500000,
      category: "items"

    }
  ],
  roles: [
    {
      name: "Developer",
      color: "#7E00FA",
      icon: SDeveloper,
      coin: 5000,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063962/developer-banner_liqn5v.webp",
      desc: "The highest authority in the game, responsible for full control over the server, including server maintenance, critical updates, game mechanics, and administrative decisions. They have unlimited access to all systems, tools, and in-game commands.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban,color,checkid,find,nick,freezeall,ghost,fakeban,fakewarn,fl,banall,1hit,pullall,dsummon,logs,setmag,setmagseed,scan,gsm,setvend,clearvend,clearmag,clearmagseed,blacklist,ggems,glevel,online,saveworld,spk,asb,removedrop,spl,rpl,growall,infoex,banrid,banip",
      href: "Developer",
      price: 250000,
      category: "roles",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Color Name : Orange",
        "Unlimited gems and levels",
        "Receive Daily Rewards such as duct tapes, freeze wand, fire wands & curse wands",
        "Avaible to break bedrock in your own worlds or other player worlds",
        "Grants you access to different commands such as /ghost (you can go through blocks), /1hit (you 1-hit everything) & /logs (to see all server logs)",
        "Grants you long punch and long wrench in all worlds",
        "Allowed to pick up items for free in the commands /find",
        "Can steal inventory players"
      ],
    },
    {
      name: "Admin",
      color: "#00BEFA",
      coin: 3000,
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063964/admin-banner_jjbhqh.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban,color,checkid,find,nick,freezeall,ghost,fakeban,fakewarn,fl,banall,1hit,pullall,dsummon,logs,setmag,setmagseed,scan",
      href: "Admin",
      price: 150000,
      category: "roles",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Color Name : Blue",
        "Receive Daily Rewards such as duct tapes, freeze wand, fire wands & curse wands",
        "Avaible to break bedrock in your own worlds",
        "Grants you access to different commands such as /ghost (you can go through blocks), /1hit (you 1-hit everything), /checkid <item name> (to check id of items) & /logs (to see all server logs)",
        "Grants you long punch and long wrench in all worlds",
        "Grants you restock Magplant (/setmag <amount>)",
        "Allowed to pick up items for free in the commands /find"
      ],
    },
    {
      name: "Owner",
      coin: 7000,
      color: "#00BEFA",
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063963/owner-banner_cjqgs5.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly, with access to high-level tools and administrative commands.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban,color,checkid,find,nick,freezeall,ghost,fakeban,fakewarn,fl,banall,1hit,pullall,dsummon,logs,setmag,setmagseed,scan,gsm,setvend,clearvend,clearmag,clearmagseed,blacklist,ggems,glevel,online,saveworld,spk,asb,removedrop,spl,rpl,growall,infoex,banrid,banip,reset,takeworld,osb,unsafeedit,weather,clearworld,spawnevent,ggxp,gtoken,gseal,reset_rolequest,verifycsn,removereqcsn,ipcheck,removelogs",
      href: "Owner",
      price: 350000,
      category: "roles",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Color Name : Black",
        "Unlimited gems, levels, clash token, winterseal and guild xp",
        "get permission to verify the world casino and remove from verify, and can spawn events at will",
        "Receive Daily Rewards such as duct tapes, freeze wand, fire wands & curse wands",
        "Avaible to break bedrock in your own worlds or other player worlds",
        "Grants you access to different commands such as /ghost (you can go through blocks), /1hit (you 1-hit everything) & /logs (to see all server logs)",
        "Grants you long punch and long wrench in all worlds",
        "Allowed to pick up items for free in the commands /find",
        "Can steal inventory players"
      ],
    },
    {
      name: "Cheater",
      color: "#00BEFA",
      coin: 300,
      icon: Developer,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063964/cheater-banner_h4cvpu.webp",
      desc: "Responsible for creating, testing, and implementing new features and updates within the game. They manage content creation, bug fixes, and ensure the game runs smoothly.",
      commands: "/cheats /c <cheater chat>",
      href: "Cheater",
      price: 15000,
      category: "roles",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Grants you access to different commands such as /cheats (show cheat menu) & /c <text> (CHEATER-CHAT)"
      ],
    },
    {
      name: "Moderator",
      color: "#FB047B",
      coin: 1000,
      icon: Mod,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063962/moderator-banner_tqixei.webp",
      desc: "A community overseer tasked with enforcing server rules, managing player behavior, and handling disputes. They can mute, ban, and kick players to maintain a fair and safe gaming environment, with limited administrative access.",
      commands: "warpto,destructo,noclip,fixworld,searchuser,summon,freeze,info,p,warp,banworld,nuke,mute,curse,unmute,uncurse,hide,radio2,togglemods,skin,invis,copyset,msb,m,magic,nohands,nobody,unequip,warn,dropall,eff,pban",
      href: "Moderator",
      price: 50000,
      category: "roles",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Color Name : Purple",
        "Receive Daily Rewards such as duct tapes, freeze wand, fire wands & curse wands",
        "Avaible to break bedrock in your own worlds",
        "Grants you access to different commands such as /noclip (you can go through blocks only in your own worlds)",
        "Grants you long punch and mod zoom"
      ],
    },
    {
      name: "VIP",
      color: "#04CFFB",
      icon: Vip,
      coin: 300,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733063962/vip-banner_zb4a6c.webp",
      desc: "A privileged role granted to special players, offering exclusive perks like access to unique items, commands, or areas in the game. VIPs do not have administrative power but enjoy benefits unavailable to regular players.",
      commands: "help,proxy,pay,kit,troll,cheer,rainbow,stream,valentine,news,v,vsb,surgerys,warp,inventory,rwarp,chatcolor,search,find,kickall,syncroles,hidestatus,online,msg,status,mods,sb,sdb,top,ignore,cheats,time,home,sethome,gethome,who,me,radio,mods,uba,r,go,hub,rgo,pull,kick,ban,wave,dance,love,sleep,facepalm,fp,smh,yes,no,omg,idk,shrug,trade,furious,rolleyes,unaccess,report,rate,foldarms,fa,stubborn,fold,fc,gc,gwarp,guild",
      href: "VIP",
      price: 15000,
      category: "roles",
      specialImage: [
        "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
        "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
        "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
        "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
        "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg"
      ],
      special: [
        "Color Name : Light blue",
        "Receive Vip Daily Rewards such as Rare Items",
        "Grants you access to different commands such as /info <name> (show invetory)",
      ],
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
      name: "DrTitle",
      color: "#F71A1A",
      desc: `t counts as an Angelic Healing). This will add "Dr." before the player's name and change the color to red.`,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205604_k8hvvv.webp",
      href: "DrTitle",
      price: 20000,
      coin: 400,
      category: "titles"
    },
    {
      name: "Grow4Good",
      color: "#108E24",
      desc: "Players with a Grow4Good Title can toggle this on and off by wrenching oneself and clicking title. Once toggled, it changes the player's name into a mix of colors for every letter. The colors, however, does not carry over when one Broadcasts, Chats, nor private messages.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205802_jrgb4a.webp",
      href: "Grow4Good",
      price: 15000,
      coin: 300,
      category: "titles"


    },
    {
      name: "Legendary of Legend",
      color: "#E3B43E",
      desc: `The Legendary Title is a legendary item that gives the player a larger name with a legendary orb replacing the flag icon. It also adds "of Legend" to the end of the player's name. It is obtained by completing the Quest of Honor and can be temporarily removed for 24 hours by consuming a Golden Apple or by unchecking 'of Legend' from the Title window which can be found by wrenching oneself.`,
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205843_srcj8w.webp",
      href: "Legendary of Legend",
      price: 25000,
      coin: 500,
      category: "titles"


    },
    {
      name: "Mentor",
      color: "#04CEFB",
      desc: "Is it true? We have to wait until 500-2000 days to get the mentor title? i thought it was a long time",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726061665/Screenshot_2024-09-11_205818_dz3zaw.webp",
      href: "Mentor",
      price: 20000,
      coin: 400,
      category: "titles"


    },
  ],
  other: [
    {
      name: "Level",
      coin: 100,
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
      selectedImage: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733143870/gems-select_rjrjvi.webp",
      href: "Gems",
      items: [
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067978/gems-5k_znlxz4.webp",
          price: 500,
          coin: 10,
          amount: 5000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067915/gems-10k_zl48bt.webp",
          price: 1000,
          coin: 20,
          amount: 10000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067918/gems-50k_thutas.webp",
          price: 5000,
          coin: 100,
          amount: 50000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067914/gems-100k_iahvsz.webp",
          price: 10000,
          coin: 200,
          amount: 100000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067917/gems-500k_utrf6y.webp",
          price: 50000,
          coin: 1000,
          amount: 500000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067918/gems-1jt_zjv1n6.webp",
          price: 100000,
          coin: 2000,
          amount: 1000000
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733067922/gems-500jt_pdye7h.webp",
          price: 500000,
          coin: 10000,
          amount: 5000000
        },
      ],
      category: "other"
    },
    {
      name: "GrowToken",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733408053/growtoken_n3a4nt.webp",
      selectedImage: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415400/growtokenfront_hrl11u.webp",
      href: "GrowToken",
      items: [
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415407/growtoken_10_cy47j7.webp",
          price: 50000,
          coin: 1000,
          amount: 10
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415421/growtoken_100_lh9rw8.webp",
          price: 500000,
          coin: 10000,
          amount: 100
        },
      ],
      category: "other"
    },
    {
      name: "GrowPass",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733407993/growpass_oajxk5.webp",
      href: "GrowPass",
      amount: 1,
      price: 30000,
      coin: 600,
      category: "other"
    },
    {
      name: "GrowTaverCoin",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733408022/growcoin_e56g5f.webp",
      selectedImage: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415403/growtaverncoin_mlxp06.webp",
      href: "GrowTaverCoin",
      items: [
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415425/growtaverncoin_100_bay346.webp",
          price: 5000,
          amount: 100
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415634/taverncoin_500_ox9yig.webp",
          price: 10000,
          amount: 500
        },
        {
          image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733415661/taverncoin_5k_f6mgzy.webp",
          price: 100000,
          amount: 5000
        },
      ],
      category: "other"
    },
    {
      name: "Road To Glory",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733408024/gto_glory_azr0qy.webp",
      href: "Road%20To%20Glory",
      price: 25000,
      coin: 500,
      amount: 1,
      category: "other"
    },
    {
      name: "Platinum Gem Lock",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733583522/platinum_lock_ek0qz3.webp",
      href: "Platinum%20Gem%20Lock",
      price: 500,
      amount: 1,
      category: "other"
    },
    {
      name: "Ruthenium Gem Lock",
      color: "#b758e0",
      desc: "Welcome to the Gems purchase page on the GrowTavern private server! Here, you’ll find various Gems packages to enhance your gameplay. Whether you need a small boost or a massive amount, we offer packages tailored to your needs.",
      image: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1733583523/thenium_lock_lt3efg.webp",
      href: "Ruthenium%20Gem%20Lock",
      price: 50000,
      amount: 1,
      category: "other"
    },
  ]
}
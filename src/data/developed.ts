import Mining from '@/assets/image/Tavern_basic.png'
import { StaticImageData } from 'next/image';
import winter from '@/assets/image/winter3.jpg'
import winter2 from '@/assets/image/winter2.jpg'
import banner1 from '@/assets/image/banner1.jpg'
import banner2 from '@/assets/image/banner2.jpg'
import videobanner from "@/assets/image/videobanner.jpg"

interface Item {
  title: string;
  image: StaticImageData;
  desc: string;
  banner?: StaticImageData;
  video?: boolean;
  videosrc?: string
}

export const DevelopedData: Item[] = [
  {
    title: "Royal Winter",
    image: winter,
    desc: "WinterFest is an annual event that is held during late December, lasting for two weeks. During WinterFest, the world GROWCH is inhabited by an NPC named Growch. When enough Winter Gifts are given to him, a few WinterFest items will be unlocked, thus making Growch happy and restricting gifts to be given to him for several hours."
  },
  {
    title: "Royal Winter",
    image: winter2,
    desc: "Players can visit the Growch in worlds GROWCH1, GROWCH2, etc, similar to GROWGANOTH. Winter Gifts also spawn in worlds, depending on the number of people in the world. During this time, the world select music changes."
  },
  {
    title: "Gacha",
    image: banner1,
    desc: `The gacha system in GrowTavern uses a pity system to reduce the uncertainty of getting a high rarity item:
<br/>
- 4-star Items: Players are guaranteed to get one after rolling 10 times
<br/>
- 5-star Items: Players are guaranteed to get one after rolling 90 times
<br/>
- Soft pity: Starts around the 75th roll 
<br/>
<br/>
The pity system is a luck mitigation model that guarantees a drop after a certain number of unsuccessful pulls.
`},
  {
    title: "Gacha",
    image: banner2,
    desc: `The gacha system in GrowTavern uses a pity system to reduce the uncertainty of getting a high rarity item:
<br/>
- 4-star Items: Players are guaranteed to get one after rolling 10 times
<br/>
- 5-star Items: Players are guaranteed to get one after rolling 90 times
<br/>
- Soft pity: Starts around the 75th roll 
<br/>
<br/>
The pity system is a luck mitigation model that guarantees a drop after a certain number of unsuccessful pulls.
`},
  {
    title: "Spring Clash",
    image: videobanner,
    video: true,
    desc: "For each event, the points required will be different, this applies to Personal or Guilds, and after the event is over you only have 4 days to collect the prize. If you miss it, your prize will be forfeited, and also for each new event, all the points and Top Guild List/Top Personal will appear. The list will be repeated, this applies to Personal and guilds."
  },
]
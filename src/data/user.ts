interface User {
  id: number;
  name: string;
  role: string;
  image: string;
  position?: string;
}

export const UserData: Array<User> = [
  {
    id: 1,
    name: "dfozzonly",
    role: "Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022038/dava_jf4z3u.webp',
  },
  {
    id: 2,
    name: "nopaldzaky",
    role: "Co Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022039/nopal_xzfwld.webp',
  },
  {
    id: 3,
    name: "Levan",
    role: "Co Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022840/levan_vajmtj.webp',
  },
  {
    id: 4,
    name: "Ano",
    role: "Co Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726069173/WhatsApp_Image_2024-09-09_at_16.10.39_63004b98_t7nxry.webp',
  },
  {
    id: 5,
    name: "Maulanya",
    role: "Developer",
    position: "Website",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022839/maulana_e8lddz.webp',
  },
  {
    id: 6,
    name: ".mdfka",
    role: "Developer",
    position: "Game",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1728316865/WhatsApp_Image_2024-10-07_at_23.45.10_5cd6bd73_bvxhj9.webp',
  },

]
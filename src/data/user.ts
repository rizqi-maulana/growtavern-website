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
    name: "vinskeeper",
    role: "Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1732517874/WhatsApp_Image_2024-11-25_at_14.09.09_aca2893d_jdh0aq.webp',
  },
  {
    id: 2,
    name: "zeldrisreal",
    role: "Co Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1732503660/WhatsApp_Image_2024-11-22_at_08.17.00_ee245c1b_kaykzs.webp',
  },
  {
    id: 3,
    name: ".mauln",
    role: "Developer",
    position: "Full stack",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731382265/picture_wforzu.webp',
  },
  {
    id: 4,
    name: "tianvan",
    role: "Developer",
    position: "Game",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731380651/WhatsApp_Image_2024-11-12_at_10.59.11_e6416a27_xe3xrx.webp',
  },
  {
    id: 5,
    name: "qyystore",
    role: "Designer",
    position: "Graphics",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731380654/WhatsApp_Image_2024-11-11_at_20.28.57_8a604c14_uveo9f.webp',
  },
  // {
  //   name: "_dikaa",
  //   role: "Staff",
  //   image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1730871685/WhatsApp_Image_2024-10-30_at_00.45.20_86d6d981_vqypw8.webp',
  // },

]
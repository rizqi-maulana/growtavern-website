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
    name: "rio_mondragon",
    role: "Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1730215774/WhatsApp_Image_2024-10-29_at_23.29.02_d26371ae_maxnwb.webp',
  },
  {
    id: 2,
    name: "poyyyzz",
    role: "Co Owner",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1730215511/WhatsApp_Image_2024-10-29_at_23.13.31_98288332_fgppe7.webp',
  },
  {
    id: 3,
    name: "maulanya",
    role: "Developer",
    position: "Full stack",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731382265/picture_wforzu.webp',
  },
  {
    id: 4,
    name: ".mdfka",
    role: "Developer",
    position: "Game",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1728316865/WhatsApp_Image_2024-10-07_at_23.45.10_5cd6bd73_bvxhj9.webp',
  },
  {
    id: 5,
    name: "tianvan",
    role: "Developer",
    position: "Game",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731380651/WhatsApp_Image_2024-11-12_at_10.59.11_e6416a27_xe3xrx.webp',
  },
  {
    id: 6,
    name: "yormanz",
    role: "Developer",
    position: "DevOps",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1730254189/WhatsApp_Image_2024-10-30_at_00.59.48_da95104d_cn9nz0.webp',
  },
  {
    id: 7,
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
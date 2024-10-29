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
    id: 5,
    name: "maulanya",
    role: "Developer",
    position: "Website",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1730219088/WhatsApp_Image_2024-10-30_at_00.22.26_a26246c5_vy7m2w.webp',
  },
  {
    id: 6,
    name: ".mdfka",
    role: "Developer",
    position: "Game",
    image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1728316865/WhatsApp_Image_2024-10-07_at_23.45.10_5cd6bd73_bvxhj9.webp',
  },

]
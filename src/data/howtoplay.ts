// Definisikan antarmuka untuk HowToPlayData
interface HowToPlayItem {
  Title: string;
  Description: string;
  Icon: string;
  Image: string;
  Host?: string;
  File?: string;
  Content: string;
}

export const HowToPlayData: HowToPlayItem[] = [
  {
    Title: "Desktop",
    Description: "Play on the GrowTavern Server with a Desktop Device",
    Icon: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022233/monitor_ws0x38.webp',
    Image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726023030/game-desktop_cw0c54.webp',
    Host: `
    209.38.18.117 www.growtopia1.com
209.38.18.117 www.growtopia2.com
    `,
    Content: `Play GrowTavern on PC
   1 - Press ⊞ Win+R (Windows Key + R) to open up the "Run" window.
2 - Type in 
C:\Windows\System32\drivers\etc in the textbox.
3 - Find file named hosts.
4 - Right-click on "hosts" file and edit it with Notepad/text editor.
5 - Add in the IP:
209.38.18.117 www.growtopia1.com
209.38.18.117 www.growtopia2.com
6 - Save the file.`
  },
  {
    Title: "Android",
    Description: "Play on the GrowTavern Server with a Desktop Device",
    Icon: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022035/cell-phone_ukiys9.webp',
    Image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726023034/Characters_wsvcpp.webp',
    File: "/growtavern.txt",
    Host: `/growtavern.txt`,
    Content: `Play GrowTavern on Android
    • Download Virtual Host In Playstore
• Download GrowTavern file at below
• Open the Virtual Host and Click button HOSTS FILE
• Choose host that name GrowTavern from download folder
• Click " Accept Connection " atau " Terima Koneksi " if you dont accept it yet
• Done ! now you can start login growtopia to play GrowTavern
Enjoy !.`
  },
  {
    Title: "IOS",
    Description: "Play on the GrowTavern Server with a IOS Device",
    Icon: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022232/mac-os-logo_olbca9.webp',
    Image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726023034/Characters_wsvcpp.webp',
    Host: `
    www.growtopia1.com = 209.38.18.117
www.growtopia2.com = 209.38.18.117`,
    Content: `Play GrowTavern on IOS
   1 - Download surge 5 on appstore 
2 - Cick on " default " at the left top 
3 - click the " Edit in Text Mode " 
4 - delete all the text and copy this : 
[General]
[Rule]
FINAL,DIRECT
[Host]
www.growtopia1.com = 209.38.18.117
www.growtopia2.com = 209.38.18.117`
  },
]

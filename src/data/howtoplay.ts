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
    188.166.231.135 www.growtopia1.com
188.166.231.135 www.growtopia2.com
`,
    Content: `Play GrowTavern on PC
   1 - Press ⊞ Win+R (Windows Key + R) to open up the "Run" window.
2 - Type in 
C:\Windows\System32\drivers\etc in the textbox.
3 - Find file named hosts.
4 - Right-click on "hosts" file and edit it with Notepad/text editor.
5 - Add in the IP:
188.166.231.135 www.growtopia1.com
188.166.231.135 www.growtopia2.com
6 - Save the file.`
  },
  {
    Title: "Android",
    Description: "Play on the GrowTavern Server with a Android Device",
    Icon: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726022035/cell-phone_ukiys9.webp',
    Image: 'https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726023034/Characters_wsvcpp.webp',
    File: "/growtavern.txt",
    Host: `https://growtavern.site/growtavern.txt`,
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
   https://growtavern.site/growtavern`,
    Content: ` • Go to the App Store and download/install "Surge 5".
    • Once installed. Open the application.
    • Once it opens. Click the "Start" or "Setup" Button on top right.
• If it prompts privacy policy. click OK
• If it prompts "Surge Would Like to Add VPN Configurations". Click Allow.
• Click "Default" OR "Default.conf" In Surge Icon in TOP LEFT.
• Click on "Download Profile From URL".
• Write "https://growtavern.site/growtavern" And Click OK
• Click Done on top right
• And Click "START" on Top Right
• Done! Now you can open Growtopia!!`
  },
]

import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData()
  const token = formdata.get('token')
  const name = formdata.get('name')
  const email = formdata.get('email')

  const htmlcontent = `
  <html>
<head>
<title>Password Change Request</title>
<style>
*, ::before, ::after {
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-pan-x:  ;
--tw-pan-y:  ;
--tw-pinch-zoom:  ;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-from-position:  ;
--tw-gradient-via-position:  ;
--tw-gradient-to-position:  ;
--tw-ordinal:  ;
--tw-slashed-zero:  ;
--tw-numeric-figure:  ;
--tw-numeric-spacing:  ;
--tw-numeric-fraction:  ;
--tw-ring-inset:  ;
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-shadow-colored: 0 0 #0000;
--tw-blur:  ;
--tw-brightness:  ;
--tw-contrast:  ;
--tw-grayscale:  ;
--tw-hue-rotate:  ;
--tw-invert:  ;
--tw-saturate:  ;
--tw-sepia:  ;
--tw-drop-shadow:  ;
--tw-backdrop-blur:  ;
--tw-backdrop-brightness:  ;
--tw-backdrop-contrast:  ;
--tw-backdrop-grayscale:  ;
--tw-backdrop-hue-rotate:  ;
--tw-backdrop-invert:  ;
--tw-backdrop-opacity:  ;
--tw-backdrop-saturate:  ;
--tw-backdrop-sepia:  ;
--tw-contain-size:  ;
--tw-contain-layout:  ;
--tw-contain-paint:  ;
--tw-contain-style:  ;
}

::backdrop {
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-pan-x:  ;
--tw-pan-y:  ;
--tw-pinch-zoom:  ;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-from-position:  ;
--tw-gradient-via-position:  ;
--tw-gradient-to-position:  ;
--tw-ordinal:  ;
--tw-slashed-zero:  ;
--tw-numeric-figure:  ;
--tw-numeric-spacing:  ;
--tw-numeric-fraction:  ;
--tw-ring-inset:  ;
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-shadow-colored: 0 0 #0000;
--tw-blur:  ;
--tw-brightness:  ;
--tw-contrast:  ;
--tw-grayscale:  ;
--tw-hue-rotate:  ;
--tw-invert:  ;
--tw-saturate:  ;
--tw-sepia:  ;
--tw-drop-shadow:  ;
--tw-backdrop-blur:  ;
--tw-backdrop-brightness:  ;
--tw-backdrop-contrast:  ;
--tw-backdrop-grayscale:  ;
--tw-backdrop-hue-rotate:  ;
--tw-backdrop-invert:  ;
--tw-backdrop-opacity:  ;
--tw-backdrop-saturate:  ;
--tw-backdrop-sepia:  ;
--tw-contain-size:  ;
--tw-contain-layout:  ;
--tw-contain-paint:  ;
--tw-contain-style:  ;
}





*,
::before,
::after {
box-sizing: border-box;

border-width: 0;

border-style: solid;

border-color: #e5e7eb;

}

::before,
::after {
--tw-content: '';
}



html,
:host {
line-height: 1.5;

-webkit-text-size-adjust: 100%;

-moz-tab-size: 4;

-o-tab-size: 4;
 tab-size: 4;

font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

font-feature-settings: normal;

font-variation-settings: normal;

-webkit-tap-highlight-color: transparent;

}



body {
margin: 0;

line-height: inherit;

}



hr {
height: 0;

color: inherit;

border-top-width: 1px;

}



abbr:where([title]) {
-webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
}



h1,
h2,
h3,
h4,
h5,
h6 {
font-size: inherit;
font-weight: inherit;
}



a {
color: inherit;
text-decoration: inherit;
}



b,
strong {
font-weight: bolder;
}



code,
kbd,
samp,
pre {
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

font-feature-settings: normal;

font-variation-settings: normal;

font-size: 1em;

}



small {
font-size: 80%;
}



sub,
sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
}

sub {
bottom: -0.25em;
}

sup {
top: -0.5em;
}



table {
text-indent: 0;

border-color: inherit;

border-collapse: collapse;

}



button,
input,
optgroup,
select,
textarea {
font-family: inherit;

font-feature-settings: inherit;

font-variation-settings: inherit;

font-size: 100%;

font-weight: inherit;

line-height: inherit;

letter-spacing: inherit;

color: inherit;

margin: 0;

padding: 0;

}



button,
select {
text-transform: none;
}



button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
-webkit-appearance: button;

background-color: transparent;

background-image: none;

}



:-moz-focusring {
outline: auto;
}



:-moz-ui-invalid {
box-shadow: none;
}



progress {
vertical-align: baseline;
}



::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
height: auto;
}



[type='search'] {
-webkit-appearance: textfield;

outline-offset: -2px;

}



::-webkit-search-decoration {
-webkit-appearance: none;
}



::-webkit-file-upload-button {
-webkit-appearance: button;

font: inherit;

}



summary {
display: list-item;
}



blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
margin: 0;
}

fieldset {
margin: 0;
padding: 0;
}

legend {
padding: 0;
}

ol,
ul,
menu {
list-style: none;
margin: 0;
padding: 0;
}



dialog {
padding: 0;
}



textarea {
resize: vertical;
}



input::-moz-placeholder, textarea::-moz-placeholder {
opacity: 1;

color: #9ca3af;

}

input::placeholder,
textarea::placeholder {
opacity: 1;

color: #9ca3af;

}



button,
[role="button"] {
cursor: pointer;
}



:disabled {
cursor: default;
}



img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
display: block;

vertical-align: middle;

}



img,
video {
max-width: 100%;
height: auto;
}



[hidden] {
display: none;
}

.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

.visible {
visibility: visible;
}

.collapse {
visibility: collapse;
}

.absolute {
position: absolute;
}

.relative {
position: relative;
}

.inset-0 {
inset: 0px;
}

.top-0 {
top: 0px;
}

.z-10 {
z-index: 10;
}

.mx-auto {
margin-left: auto;
margin-right: auto;
}

.my-4 {
margin-top: 1rem;
margin-bottom: 1rem;
}

.mb-2 {
margin-bottom: 0.5rem;
}

.mb-4 {
margin-bottom: 1rem;
}

.mt-2 {
margin-top: 0.5rem;
}

.mt-5 {
margin-top: 1.25rem;
}

.mb-\[100px\] {
margin-bottom: 100px;
}

.mb-10 {
margin-bottom: 2.5rem;
}

.box-border {
box-sizing: border-box;
}

.block {
display: block;
}

.flex {
display: flex;
}

.table {
display: table;
}

.contents {
display: contents;
}

.hidden {
display: none;
}

.h-10 {
height: 2.5rem;
}

.h-16 {
height: 4rem;
}

.h-2 {
height: 0.5rem;
}

.h-5 {
height: 1.25rem;
}

.h-\[120px\] {
height: 120px;
}

.h-max {
height: -moz-max-content;
height: max-content;
}

.min-h-screen {
min-height: 100vh;
}

.w-14 {
width: 3.5rem;
}

.w-24 {
width: 6rem;
}

.w-\[500px\] {
width: 500px;
}

.w-\[90px\] {
width: 90px;
}

.w-full {
width: 100%;
}

.w-max {
width: -moz-max-content;
width: max-content;
}

.max-w-2xl {
max-width: 42rem;
}

.max-w-md {
max-width: 28rem;
}

.border-collapse {
border-collapse: collapse;
}

.transform {
transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.resize {
resize: both;
}

.flex-col {
flex-direction: column;
}

.items-center {
align-items: center;
}

.justify-center {
justify-content: center;
}

.justify-evenly {
justify-content: space-evenly;
}

.gap-1 {
gap: 0.25rem;
}

.gap-2 {
gap: 0.5rem;
}

.gap-3 {
gap: 0.75rem;
}

.gap-4 {
gap: 1rem;
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
--tw-space-x-reverse: 0;
margin-right: calc(1rem * var(--tw-space-x-reverse));
margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
--tw-space-y-reverse: 0;
margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
--tw-space-y-reverse: 0;
margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
--tw-space-y-reverse: 0;
margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
--tw-space-y-reverse: 0;
margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.break-words {
overflow-wrap: break-word;
}

.rounded {
border-radius: 0.25rem;
}

.rounded-lg {
border-radius: 0.5rem;
}

.rounded-md {
border-radius: 0.375rem;
}

.border {
border-width: 1px;
}

.border-4 {
border-width: 4px;
}

.border-8 {
border-width: 8px;
}

.border-t {
border-top-width: 1px;
}

.border-\[\#2d5d96\] {
--tw-border-opacity: 1;
border-color: rgb(45 93 150 / var(--tw-border-opacity));
}

.border-\[\#87B8CC\] {
--tw-border-opacity: 1;
border-color: rgb(135 184 204 / var(--tw-border-opacity));
}

.border-white {
--tw-border-opacity: 1;
border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-yellow-400 {
--tw-border-opacity: 1;
border-color: rgb(250 204 21 / var(--tw-border-opacity));
}

.bg-\[\#00a8ff\] {
--tw-bg-opacity: 1;
background-color: rgb(0 168 255 / var(--tw-bg-opacity));
}

.bg-\[\#1e3a5f\] {
--tw-bg-opacity: 1;
background-color: rgb(30 58 95 / var(--tw-bg-opacity));
}

.bg-\[\#234b78\] {
--tw-bg-opacity: 1;
background-color: rgb(35 75 120 / var(--tw-bg-opacity));
}

.bg-black {
--tw-bg-opacity: 1;
background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-blue-400 {
--tw-bg-opacity: 1;
background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}

.bg-gray-200 {
--tw-bg-opacity: 1;
background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-green-500 {
--tw-bg-opacity: 1;
background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-transparent {
background-color: transparent;
}

.bg-white {
--tw-bg-opacity: 1;
background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.object-contain {
-o-object-fit: contain;
 object-fit: contain;
}

.p-4 {
padding: 1rem;
}

.p-5 {
padding: 1.25rem;
}

.p-8 {
padding: 2rem;
}

.px-2 {
padding-left: 0.5rem;
padding-right: 0.5rem;
}

.px-3 {
padding-left: 0.75rem;
padding-right: 0.75rem;
}

.px-4 {
padding-left: 1rem;
padding-right: 1rem;
}

.px-5 {
padding-left: 1.25rem;
padding-right: 1.25rem;
}

.py-2 {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}

.py-3 {
padding-top: 0.75rem;
padding-bottom: 0.75rem;
}

.text-center {
text-align: center;
}

.font-sans {
font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.text-2xl {
font-size: 1.5rem;
line-height: 2rem;
}

.text-3xl {
font-size: 1.875rem;
line-height: 2.25rem;
}

.text-4xl {
font-size: 2.25rem;
line-height: 2.5rem;
}

.text-base {
font-size: 1rem;
line-height: 1.5rem;
}

.text-lg {
font-size: 1.125rem;
line-height: 1.75rem;
}

.text-sm {
font-size: 0.875rem;
line-height: 1.25rem;
}

.text-xs {
font-size: 0.75rem;
line-height: 1rem;
}

.font-bold {
font-weight: 700;
}

.text-\[\#FF9500\] {
--tw-text-opacity: 1;
color: rgb(255 149 0 / var(--tw-text-opacity));
}

.text-\[\#ff6b35\] {
--tw-text-opacity: 1;
color: rgb(255 107 53 / var(--tw-text-opacity));
}

.text-red-500 {
--tw-text-opacity: 1;
color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-white {
--tw-text-opacity: 1;
color: rgb(255 255 255 / var(--tw-text-opacity));
}

.underline {
text-decoration-line: underline;
}

.placeholder-gray-400::-moz-placeholder {
--tw-placeholder-opacity: 1;
color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.placeholder-gray-400::placeholder {
--tw-placeholder-opacity: 1;
color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.shadow-lg {
--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline {
outline-style: solid;
}

.filter {
filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
}

.transition-all {
transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
}

.duration-300 {
transition-duration: 300ms;
}

.ease-in-out {
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\:scale-105:hover {
--tw-scale-x: 1.05;
--tw-scale-y: 1.05;
transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:bg-\[\#0096e0\]:hover {
--tw-bg-opacity: 1;
background-color: rgb(0 150 224 / var(--tw-bg-opacity));
}

.hover\:bg-gray-900:hover {
--tw-bg-opacity: 1;
background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.hover\:underline:hover {
text-decoration-line: underline;
}

.focus\:border-transparent:focus {
border-color: transparent;
}

.focus\:outline-none:focus {
outline: 2px solid transparent;
outline-offset: 2px;
}

.focus\:ring-2:focus {
--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-\[\#3d7dcc\]:focus {
--tw-ring-opacity: 1;
--tw-ring-color: rgb(61 125 204 / var(--tw-ring-opacity));
}

@media (orientation: portrait) {
.portrait\:flex {
display: flex;
}

.portrait\:hidden {
display: none;
}
}

@media (orientation: landscape) {
.landscape\:block {
display: block;
}

.landscape\:hidden {
display: none;
}
}
</style>
</head>
<body class="bg-blue-400 font-sans">
<div class="w-full max-w-2xl mx-auto">
  <div class="bg-blue-400">
    <img
      alt="GrowTavern logo with characters and tree"
      class="mx-auto w-full h-max"
      src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731855467/Proyek_Baru_68_D032486_susktp.webp"
    />
  </div>
  <div class="text-center p-8 bg-white">
    <h1 class="text-4xl font-bold mb-4">PASSWORD CHANGE REQUEST</h1>
    <p class="text-lg mb-4">Hello GrowTavern!</p>
    <p class="text-lg mb-4">
      A request was made to
      <strong> change your password </strong>
      for your account
      <strong> ${name} </strong>
      .
    </p>
    <p class="text-lg my-4">
      If this was you, please verify the password change:
    </p>
    <a
      href="https://growtavern.site/recovery?token=${token}"
      class="bg-green-500 text-white font-bold py-2 px-4 relative rounded"
    >
      CHANGE PASSWORD
    </a>
    <p class="text-lg my-4">
      Alternatively, you can change your password by copying and pasting the
      below URL into your browser:
    </p>
    <div class="bg-gray-200 p-4 rounded mb-4">
      <p class="text-red-500 break-words">
       https://growtavern.site/recovery?token=${token}
      </p>
    </div>
    <p class="text-lg mb-4">
      In case you did not try to change your password, we strongly recommend
      changing your log-in credentials as soon as possible as they might
      have been compromised.
    </p>
    <p class="text-lg mb-4">~ The GrowTavern Team</p>
  </div>
  <div class="bg-green-500 h-2"></div>
  <div class="bg-blue-400 p-4 text-center">
    <div class="flex justify-center space-x-4 mb-4">
      <a
        href="https://discord.gg/growtavern"
        class="fab fa-discord text-white text-2xl"
      >
      </a>
      <a
        href="https://growtavern.site"
        class="fab fa-google text-white text-2xl"
      >
      </a>
    </div>
    <p class="text-white text-sm mb-4">© 2024 GrowTavern.</p>
    <div class="flex items-center justify-evenly mb-4">
      <img
        alt="GrowTavern logo"
        class="w-24"
        src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1726205113/growtavern_i0uro3.webp"
        width="100"
      />
      <img
        alt="Ubisoft logo"
        class="w-14"
        src="https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1731856338/tavern_citems_3_ydge0l.webp"
      />
    </div>
  </div>
</div>
</body>
</html>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'team@growtavern.site',
      to: email,
      subject: 'GrowTavern Password Recovery',
      html: htmlcontent,
    }),
  })

  const data = await res.json()

  return NextResponse.json(data)
}
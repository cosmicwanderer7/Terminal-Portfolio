var dev = "https://dev.to/cosmicwanderer7";
var twitter = "https://twitter.com/PrithviYewale";
var linkedin = "https://www.linkedin.com/in/prithvi-yewale-a77275228/";
var instagram = "https://www.instagram.com/prithvi_yewale/";
var github = "https://github.com/cosmicwanderer7";
var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:yewaleprithvi2003@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Prithvi! 👋</span>`,
  "<br>",
  `<li>🔧 I'm a Desktop Engineer passionate about fullstack development and UI/UX design.</li>`,
  `<li>💡 Always eager to learn new technologies and build meaningful digital products.</li>`,
  `<li>🧠 Experienced in building responsive websites using Next.js and Tailwind CSS.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to check out what I’ve built!</li>`,
  `<li>👥 Looking to collaborate on exciting frontend/backend projects.</li>`,
  `<li>📫 Contact: <a href="mailto:yewaleprithvi2003@gmail.com">yewaleprithvi2003@gmail.com</a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'dev        <a href="' + dev + '" target="_blank">dev.to/cosmicwanderer7</a>',
  'twitter        <a href="' +
    twitter +
    '" target="_blank">twitter.com/PrithviYewale</a>',
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/prithviYewale</a>',
  'instagram      <a href="' +
    instagram +
    '" target="_blank">instagram/prithvi_yewale</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/cosmicwanderer7</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
<span class="command">exit</span>
↳ Close the terminal tab.
</pre></div><br>`,
];
let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<a href="https://github.com/cosmicwanderer7/google-clone" target="_blank"><span class='underline'>Google Search Clone</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Functional Google homepage replica using Tailwind CSS and Next.js.
Live: <a href="https://google-clone-cosmicwanderer7.vercel.app/" target="_blank">google-clone.vercel.app</a>
Built With:
- Next.js
- Tailwind CSS
- Programmable Search API
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/contactform" target="_blank"><span class='underline'>Contact Form with Google Sheets</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Next.js contact form storing data to Google Sheets via API, sends confirmation emails.
Live: <a href="https://contactform-psi.vercel.app/" target="_blank">contactform-psi.vercel.app</a>
Built With:
- Next.js
- Tailwind CSS
- Google Sheets API
- IFTTT
</pre>`,

  `<a href="https://cosmicwanderer7.github.io/Terminal-Portfolio/" target="_blank"><span class='underline'>Terminal-Styled Portfolio</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A responsive portfolio that mimics a Linux terminal interface.
Built With:
- Vanilla JS
- Tailwind CSS
- Yarn
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/github-script" target="_blank"><span class='underline'>GitHub Init Script</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Bash script that automates GitHub repo creation and initial commit setup.
Built With:
- Bash
- GitHub API
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/guacamole-deploy" target="_blank"><span class='underline'>Apache Guacamole on OCI</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Remote desktop gateway deployment for secure access on Oracle Cloud.
Built With:
- Apache Guacamole
- Oracle Cloud
- Linux
</pre>`,

  `<a href="https://github.com/cosmicwanderer7/mumble-deploy" target="_blank"><span class='underline'>Mumble Server on OCI</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Voice chat server deployed on cloud for low-latency communication.
Built With:
- Mumble
- Oracle Cloud
- Linux
</pre>`,
  "</div>",
  "<br>",
];

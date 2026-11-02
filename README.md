# Jay & Char: Wedding Invitation

Live site: https://mawiguzcat.github.io/jay-char-wedding/

Built from the MIT-licensed [dewanakl/undangan](https://github.com/dewanakl/undangan) template, translated to English and adapted.

- Saturday, January 22, 2028, 2:00 PM (Philippine Time)
- Ceremony: Manila Cathedral, Intramuros. Reception: La Castellana, Intramuros
- RSVP deadline: December 15, 2027

## Edit the content
Everything is in `index.html`. Photos are in `assets/images/`. The countdown uses `data-time` on `<body>`; the Google Calendar button is in `js/app/guest/guest.js`.
Personalised links: `https://mawiguzcat.github.io/jay-char-wedding/?to=Guest%20Name`

## RSVP to Google Sheet
Follow `apps-script/README.md`, then paste the web app URL into `RSVP_ENDPOINT` at the bottom of `index.html`.

## Rebuild after changing JS
`npm install && npm run build` (output in `dist/`, which is committed so GitHub Pages can serve it). Changes to `index.html` or images need no build.

# Jay & Char: Wedding Website

Wedding invitation site for **Jay & Char**, January 22, 2028, Manila Cathedral, Intramuros, with the reception at La Castellana, Intramuros.

Built on the open-source [wedding-website](https://github.com/rampatra/wedding-website) template by Ram Patra (GPL-3.0).

## Edit the content
- Text, schedule, venues, dress code: `index.html`
- Photos: `img/photos/` (also `img/og-image.jpg`, the link-preview image)
- Look and feel: `sass/partials/_colors.scss` and `sass/partials/_elegant.scss`
- RSVP settings, invite code, calendar details: top of the RSVP section in `js/scripts.js`

After editing styles or scripts, rebuild:

    npm install
    npx gulp

## RSVP form
RSVPs are saved to a Google Sheet. Setup steps are in [`apps-script/README.md`](apps-script/README.md).
The default invite code is `012228` (see `INVITE_CODE_HASHES` in `js/scripts.js`).

## Hosting (GitHub Pages)
Push to GitHub, then **Settings > Pages > Deploy from a branch > main / root**.
To use a custom domain later, add a `CNAME` file containing just the domain name.
Also update `og:image` in `index.html` to the full public URL of `img/og-image.jpg`.

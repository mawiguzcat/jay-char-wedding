# RSVPs to a Google Sheet

1. Create a new Google Sheet (e.g. "Jay & Char RSVPs").
2. Open **Extensions > Apps Script**, delete the sample code, and paste in `Code.gs` from this folder.
3. (Optional) Put your email in `NOTIFY_EMAIL` to get an alert on every RSVP.
4. Click **Deploy > New deployment > Web app**. Set *Execute as* to **Me** and *Who has access* to **Anyone**, then deploy and authorize.
5. Copy the **Web app URL**.
6. In `js/scripts.js`, paste it into `RSVP_ENDPOINT`, then run `npx gulp` to rebuild `js/scripts.min.js`.
7. Submit a test RSVP on the site. A row should appear in the `RSVPs` tab.

If you change `Code.gs` later, use **Deploy > Manage deployments > Edit > New version** so the same URL keeps working.

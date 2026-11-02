/**
 * RSVP receiver for the wedding website.
 * Paste this into Extensions > Apps Script in a Google Sheet, then deploy as a Web app
 * (Execute as: Me, Who has access: Anyone). See apps-script/README.md.
 */
var SHEET_NAME = 'RSVPs';
var HEADERS = ['Timestamp', 'Name', 'Email', 'Attending', 'Additional guests', 'Dietary needs', 'Message'];
// Optional: set to an email address to get an alert on every RSVP, or leave '' for none.
var NOTIFY_EMAIL = '';

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var p = e.parameter || {};
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.email || '',
      p.attending || '',
      p.extras || 0,
      p.dietary || '',
      p.message || ''
    ]);
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'New RSVP: ' + (p.name || 'Guest') + ' (' + (p.attending || '?') + ')',
        'Name: ' + p.name + '\nEmail: ' + p.email + '\nAttending: ' + p.attending +
        '\nAdditional guests: ' + p.extras + '\nDietary: ' + p.dietary + '\nMessage: ' + p.message);
    }
    return json({result: 'success'});
  } catch (err) {
    return json({result: 'error', message: 'Sorry, we could not save your RSVP. Please try again.'});
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

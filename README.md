# Overview

This is an html form template that automatically pushes data to a Google Sheet. You can add or remove the number of inputs, although they must match the name of the column in the spreadsheet.

# Setup

1. Clone the Google Sheet

```
https://docs.google.com/spreadsheets/d/1-o8LVpInGhJxEMwo0s9dzuMr6FMbxa7dP2WhpK7A1zM/edit#gid=0
```

2. Go to the script editor: Tools -> Script editor 

3. Pushlish as a web app: Publish -> Deploy as a web app and set access to Anyone, even anonomous. 

4. Authorise and copy the url e.g.

```
https://script.google.com/macros/s/AKfycbx53O1TvQh8qM8MCWMtmXAJalALLoQf5mZc64f__ostC-xF95F2/exec
```

5. Paste the url into index.html as the forms action (line: 16)

6. Add all the inputs in index.html and as the column headings in the cloned Google Sheet ensuring that the 'name' attribute matches the column name

7. Sussed.
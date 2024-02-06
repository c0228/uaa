# For rwa Apps, 
For Development Mode
1) npm install --force
2) npm link e-ui-react --force [if e-ui-react is present in Global Location, if not create it using npm link]
3) npm start

For Production Mode
1) npm run build (creates "dist" folder).
2) npm run deploy (copies "dist" conent into release branch)

npm create vite@latest .
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i --save @fortawesome/fontawesome-svg-core
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

=========STEP_DEPLOY_PROJECT_TO_FIREBASE=========
npm run build
firebase deploy
firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": [],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

.firebaserc
{
  "projects": {
    "default": "<YOUR_FIREBASE_ID>"
  }
}


//tailwind.config.js   
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],

//index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
# Tasks board PWA

This is a serverless progressive web application. It works utilising your browser's IndexedDB storage. It lets you to continue your work even when you are offline.

**Points to note**

* If you clear the data from your browser, all the saved data will be lost
* Your saved data won't get reflected if you open this application in incognito mode or in any other browser than your usual one.
* To know more about IndexedDB, click [here](https://developers.google.com/web/ilt/pwa/working-with-indexeddb)

## Setup & Pre-requisites

* Node version >10 installed
* Package manager either `npm` or `yarn` (recommended) installed
* Clone the repository to your local
* Install the dependencies by running `yarn` or `npm install`

### Start the application

You can start the application using commands `yarn start:dev` or `npm run start:dev`
It runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

It has hot reloading option enabled so the page will reload if you make edits.
You will also see any lint errors in the console.

To test the production build of the application. Run the command `yarn build` and start the application using `yarn start`

## Contributing guidelines

If you find this app useful, please feel free to suggest any new features using GitHub issues. You may also raise a Pull Request as a defect fix or a new feature.
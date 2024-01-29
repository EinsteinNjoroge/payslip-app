# Getting Started with the Payslips App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled using [tailwindcss](https://tailwindcss.com/).
I implemented capacitor for a native runtime on Android and IOS. 

This project uses `yarn` as the node package manager.


## Prerequisites
You need to have [Node](https://nodejs.org/en) and [Ruby](https://www.ruby-lang.org/en/) installed on your device.
You also need to have [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) and [capacitor](https://capacitorjs.com/docs/getting-started/environment-setup).

To simulate the mobile platforms, you will need to have [Xcode](https://apps.apple.com/us/app/xcode/id497799835) and [android studio](https://developer.android.com/studio) installed.



# How to run the project
Clone the project to a directory on your local machine, `cd` into that directory the run the following commands 


`yarn` To install dependencies. 


`yarn run build` will build the app to the **build** folder. 
On this project Capacitor is configured to use the production bundle from the **build** directory so be sure to run this step.

&nbsp;
#### `npx cap add android`
#### `npx cap add ios`
#### `npx cap sync`
These commands will add the platforms IOS and Android, and install the required dependencies for both platforms.

## Viewing the project
once the setup is done, you can now view the on Android and IOS simulators by running
`npx cap open android` and `npx cap open ios` respectively.

To view the project on web, run `yarn start` and open [http://localhost:3000](http://localhost:3000) on your browser.
The page will reload if you make edits.

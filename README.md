# To run the project locally:

- install Node.js v20.15.1
- `git clone` the project
- install dependencies: `npm i`
- run the project: `npm run dev`
- run tests: `npm run test`

# Working with Electron

## Run the electron app locally:

- `git clone` the project
- install Node.js v20.15.1
- install dependencies: `npm install`
- `npm run transpile:electron` will transpile electron TS code to JS and create a `dist-electron` folder
- `npm run build` will build the react application and create a `dist-react` folder
- `npm run dev:electron` will run the electron application locally in dev mode

## Building electron app for Windows, macOS or Linux:

- `git clone` the project
- install Node.js v20.15.1
- install dependencies: `npm install`

Depending on your OS, run one of the following commands:

- Windows: `npm run dist:win`. If you have an error, try running the same command as administrator
- macOS: `npm run dist:mac`
- Linux: `npm run dist:linux`
  Building process might take a while depending on your computer.

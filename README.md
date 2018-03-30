## Linkedin Replica

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

The project structure looks like this:

```
linkedin-replica/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      reusable/
    api/
    resources/
    index.js
```

More details:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point where it renders the <App> component.
* `src/components` is where we'll be implementing our main components.
* `src/components/reusable` is where we'll be implementing some reusable components.
* `src/api` is where we'll be using **Axios** to make api calls.
* `src/resources` is where we'll be putting any svg/png images.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

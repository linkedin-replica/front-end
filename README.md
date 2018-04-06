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
    api/
    main/
    tests/
    resources/
    index.js
```

More details:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point where it renders the <App> or <Test> components.
* `src/components` is where we'll be implementing all our reusable views, just taking in data as props and renders it.
* `src/components/wrappers` is where our component wrappers will be implemented, like the grid, list and the main white wrapper.
* `src/main/` is where our main components dealing with the backend will be implemented.
* `src/main/App.js` is our main starting point, routing to a specified container.
* `src/tests/` is the playground for testing each related components implemented.
* `src/tests/Test.js` is our main testing point, routing to a specified test component.
* `src/api/api.js` is where we'll be using **Axios** to make api calls, passing the authentication header from the local storage automatically with each request sent.
* `src/resources` is where we'll be putting any icons + fonts + constant styles shared between the different components.

## Styling
We will be using a library called **Radium** for extending our styling and using
pseudo css classes like ":hover", also allows us to use multiples styles for the same element, for instance a component with different sizes (sm, md, lg) styled as what's passed in the props.
For more info check [radium repository](https://github.com/FormidableLabs/radium)

## Routing
We will be using a library called **React Router** for routing
For more info check [react-router basic components](https://reacttraining.com/react-router/web/guides/basic-components)

## To Run
### `npm install`
After cloning the repo don't forget to install :")

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Mindmap
Our app structure:
https://coggle.it/diagram/WmU7aHic2QABqqfr/t/app/4f69c5a4836ca7b783d9b67c42060998d74051525011d469e72d0ddd37766ed8

## Guides
* [Starter videos (watch till 14)](https://drive.google.com/drive/folders/15YIJW1BgDmqJgwZ3R645bv0KZq2SfG3K?usp=sharing)
* [React Quick Guide](https://reactjs.org/docs/hello-world.html)

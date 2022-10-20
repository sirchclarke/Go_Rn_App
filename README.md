# Go_Rn_App

Outdoor Hikes, lookouts and hangs

# Notes to consider

/// MAIN REF: RAWG AND PLANTS LAB!

## Overview

App used to locate quick and easy outdoor spots near you. Making getting outdoors easy and accesible. Whether your looking to hike or find yourself hanging out in a calm area to picnic or chill using GO RN will get help you get there. Members can contribute listings add ratings and log visits.

// would be cool to integrate with strava and alltrails for an interesting social aspect.

A deployed, final version of what we are building can be found [here](https://www.rawg-router.com/)

### Endpoints

// Future EndPoints Here

## Getting Started

- Login to view, add or rate Locations

## Instructions

### App Architecture

The flow and frame work of the front end was desigin using Lucid at [here](https://lucid.app/lucidchart/6a28eb7f-bde2-4c2c-84a4-da06b9f17f81/edit?viewport_loc=354%2C-344%2C1182%2C794%2C0_0&invitationId=inv_cbb9af92-6285-45e9-85ce-e77adea5109a)

````

#### App.js

Let's move on to `App.js`. In `App.js` what we want is a `<Header/>` component that will be displayed at all times at the top of our website along with a section where our `<main>` content will be displayed.

- You will need to import **5 components** into `App.js`, the first of which should be our `<Header/>`, which we'll use to control navigation between all pages.
- Each one of these components should be accessible with a Route with a path for each.
- At least one `<Route/>` should have an _exact path_, so it is displayed when the app is first rendered. Here is the skeleton of how this app should be structured in `App.js`:

```js
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
// Other component imports here



Once finished, we've set up the basic structure of the app! Congrats!

---

### Components

For this section, we will start by building the smallest reusable parts of our app, its components. We will be working in the `components` folder. For now, we are only concerned with the structure of each component, so their props will not be defined to begin with. However, these components will inform how we are going to build out our pages later on.

#### Header

-Contains a nav bar with search links to pages to login see maps or  view listings

#### Search

Next, let's build out the Search component. This component will be used for searching our API later on. The Search component does not require any additional imports, but it does have access to props, which will be important later on. Its available props will be:

```js
props.onSubmit, props.onChange, props.value
````

- Notice that the Search component is a _form_
- To build out Search properly, we need an input and a submit button
- The input in Search should have these attributes:

- Its `<button>` should have a _type_ of `"submit"`
- Its `<form>` should have access to `props.onSubmit` within its own `onSubmit` attribute

#### Directory

Now, we will build out the structure for our GameCard. This component will be used to display and allow users to click on games on our Home and ViewGames pages. GameCard will have access to 4 props:

```js
props.onClick, props.image, props.name, props.rating
```

- Inside its `'info-wrapper' <div>`, it will need an `<h3>` tag displaying `props.name`, and a `<p>` tag displaying `props.rating`
- Within its `'img-wrapper' <div>`, it will need an `<img>` tag with a "src" of `props.image`. Don't forget to give it an "alt" property!
- Lastly, its `'game-card' <div>` should have an `onClick` with access to `props.onClick`

#### List Map

The GenreCard will be used to display a card for each genre _within_ our `Home` page. GenreCard will have access to 4 props:

```js
props.image, props.name, props.gamesCount, and props.onClick
```

- Its `'card' <div>` should have an `onClick` with access to `props.onClick`
- Its `'img-wrapper' <div>` should have an `<img>` with a "src" of `props.image`
- Its `'info-wrapper' <div>` should have an `<h3>` tag displaying `props.name` and a `<p>` tag displaying `props.gamesCount`

With that, we've finished the basic structure of our components!

---

### Ratings

#### About Page

#### Home Page

Let's move on to the Home page. It's route should be `'/'` in `App.js`

In `Home.js` we need 4 additional imports: `Search`, `axios`, `GameCard`, and `GenreCard`. Make sure you're importing properly with the relative paths. React will scream at you otherwise.

Notice the state variables within the `useState` Hooks in `Home`. What do these variables imply for our page?

- `Home.js` will need 3 methods and an instance of `useEffect` to fire one of its 3 methods, which will access our API when the component _is mounted_.
- The URLs we will be working with here are `https://api.rawg.io/api/genres` and `https://api.rawg.io/api/games?search=${searchQuery}`

The methods we'll be creating within our `Home` component above its return are:

```js
getGenres(), getSearchResults(), handleChange()
```

- `getGenres()` will _set the state_ of our **genres**
- `getSearchResults()` will _set the state_ of our **searchResults**, set **searched** to _true_, and set the **searchQuery** back to an _empty string_.
- `handleChange()` will _set the state_ of our **searchQuery**

In the component, we will:

- Render the `<Search/>` component at the top of the page
- Conditionally render search results as GameCard components in the search-results `<div>`.
  > HINT: only render them if we get a response from our API call from a search
- Render all genres within the genres container-grid as GenreCards

---

### Stucture and Process

GameDetails will display specific information for an individual game.

- A Trello Board was used to track and observe progress at this URL: `https://trello.com/b/rIV1zRy1/gornapp`

ViewGames will display a page with up to 40 games.

- ViewGames requires axios, GameCard, and this URL: `https://api.rawg.io/api/games?page_size=40&genres=${genreId}`
- Its Route path is: `/view/games/:genreId`

## Credits and Citations

- https://www.alltrails.com/

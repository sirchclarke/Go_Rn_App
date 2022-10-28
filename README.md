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

The flow and frame work of the front end was desigin using Lucid at [here](https://lucid.app/lucidchart/6a28eb7f-bde2-4c2c-84a4-da06b9f17f81/edit?viewport_loc=371%2C-460%2C1095%2C794%2C0_0&invitationId=inv_cbb9af92-6285-45e9-85ce-e77adea5109a)

The ERD was designed in DrawIO at [here](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7VltT9swEP41ldgHUNKkjH2k5VWDgSga7KOJr4mFY3eO%2B8av3zmxm6YupZOoOmmVIrX3%2BOw49zyO75xW1Munl4oMs1tJgbfaAZ22orNWux3GQQd%2FDDKrkE47qIBUMWqdaqDP3sCCzm3EKBQNRy0l12zYBBMpBCS6gRGl5KTpNpC8edchScED%2BgnhPvrEqM4q9KQT1PgVsDRzdw4D25IT52yBIiNUThag6LwV9ZSUuvqXT3vATfBcXKp%2BF%2B%2B0ziemQOhNOsiLuydyN%2FrdfxZpEdOf%2FetkfOjCPCZ8ZJ%2F4hhWaidROWs9cJIoJyzkRaHUHUui%2BbQnQTjLG6Q2ZyZGZSaFJ8uqsbiYVe0N%2FwrEpRACblbZER0HDo2962jEVFOhz7x4vXIJuybTheEMK7WYjOSfDgr2U8zMdc6JSJrpSa5lbJz96NqBjUBqmC5CN5iXIHLSaoYttjdtW21bakWN6UgsFF0CFZQsimYubWHGm87Fr%2FvCPpfBv6AzfpzO4Pju4%2F%2F7F4xWfVpe0KPkKPcmlQlzIimjG%2BRJEOEsFmhwGppsJF8PlcmrhnFFqRu4WQ5LgfW9Kt7O4Rh5sIAwksfuAl6siw46AI3SHkgldBqbTxQtD1QuOOq0OzrWHdljbeBl3pXtS4PQJK6kEVMIEjBq6Smqiyctcpz7p6xfFx1Jw1G%2FIfLQt4qPYI%2F4HyWFP9hbIPt412WHkr3KZEM2k2BO%2BBcK%2F7Zrw42OP8B7Ts%2F%2BZbJOCXJCcccPRFfAxmLm73KTKLsK2td1zUxiQEdfb1Eq4aRKwva3gxBPL42wIBxf7vX87jHd2zTjqfJnxB7Iyh9%2Fz%2FQl8n%2Bycbz%2FZw%2B2AYZm8r9k%2BqNnc29nl7ZvmcvPX%2BueT2Vm5t1%2FTfbG22QKON9bAP1Os%2BekcriK9r9a2wfbOq7Xoq8f2dW5OHfdsfz7buy%2FV%2FBM4j2igKbitGAOAb%2FsH4GX5fl63eIVMpnO3HYOgp%2BZsG83zB1TDo7wlYub26bopJ4LelWJRciQoUBt%2BTl6Ad3HfTkvcL4%2BaGqzxtVXXimEyMjTzt4fzphXnjmF%2BRvAwOArC2CG%2FzNSOImeeuUyhsmaL1j0ohmSB%2BigtwGCksFZf9iDFELJWXYtyClalBw5UJZHj5seDVSKz97g3a6xOT8LjZn4SL6cdhRypBGyvxcP%2BpYHi9gcDVbHxBio1P3%2FwVcsAzfqbReVef%2FmJzv8A)

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



Once finished, we've set up the basic structure of the app!

---

### Components

For this section, we will start by building the smallest reusable parts of our app, its components. We will be working in the `components` folder. For now, we are only concerned with the structure of each component, so their props will not be defined to begin with. However, these components will inform how we are going to build out our pages later on.


//Define Components Here!!

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

Now, we will build out the structure for our listDirectory. This component will be used to display and allow users to click on Lists on our Home and listView pages. listDirectory will have access to 4 props:

```js
props.onClick, props.image, props.name, props.rating, props.traffic
```

- Inside its `'info-wrapper' <div>`, it will need an `<h3>` tag displaying `props.name`, a `<p>` tag displaying `props.rating`,and a `<p>` tag displaying `props.traffic`
- Within its `'img-wrapper' <div>`, it will need an `<img>` tag with a "src" of `props.image`. Don't forget to give it an "alt" property!
- Lastly, its `'lists' <div>` should have an `onClick` with access to `props.onClick`

#### List Map

The listType will be used to display a listing for each type _within_ our `Home` page. listType will have access to 4 props:

```js
props.image, props.name, props.listCount, and props.onClick
```

- Its `'lists <div>` should have an `onClick` with access to `props.onClick`
- Its `'img-wrapper' <div>` should have an `<img>` with a "src" of `props.image`
- Its `'info-wrapper' <div>` should have an `<h3>` tag displaying `props.name` and a `<p>` tag displaying `props.listCount`

With that, we've finished the basic structure of our components!

---

### Ratings

-Allows the user to view ratings on listings based on member review ratings. Only a member with an member ID will be allowed to add or delete ratings to impact listings overall reviews

#### Home Page

    -Let's move on to the Home page.

    - It's route should be `'/'` in `App.js`

    In `Home.js` we need 4 additional imports: `Search`, `axios`, `listMap`, and `listView. Make sure you're importing properly with the relative paths. React will scream at you otherwise.

    Notice the state variables within the `useState` Hooks in `Home`. What do these variables imply for our page?

- `Home.js` will need 3 methods and an instance of `useEffect` to fire one of its 3 methods, which will access our API when the component _is mounted_.
- The URLs we will be working specific APIs
  The methods we'll be creating within our `Home` component above its return are:

```js
getType(), getSearchResults(), handleChange()
```

- `getType()` will _set the state_ of our **type**
- `getSearchResults()` will _set the state_ of our **searchResults**, set **searched** to _true_, and set the **searchQuery** back to an _empty string_.
- `handleChange()` will _set the state_ of our **searchQuery**

In the component, we will:

- Render the `<Search/>` component at the top of the page
- Conditionally render search results as List components in the search-results `<div>`.
  > HINT: only render them if we get a response from our API call from a search
- Render all types within the type container-grid as Type

---

### Stucture and Process

GameDetails will display specific information for an individual game.

- A Trello Board was used to track and observe progress at this URL: `https://trello.com/b/rIV1zRy1/gornapp`

## Credits and Citations

- https://www.alltrails.com/

### Deploy

-deployes using heroku [here](https://dashboard.heroku.com/apps/go-rn/deploy/github)

# Agility Web
A web frontend for agility port.

# Technology stack 
* React CRA with Typescript
* Authentication: Firebase
* Database: Firestore
* Main UI library: material-ui


# Starting from scratch
```
yarn create react-app agilityport --template typescript
yarn [add|link] @vzmi/denali-react-beta # See prerequisites for the add vs link option
```

### Install and configure firebase


### Configure linting and best practices
I'm a big fan of mandating a specific code style and auto fix, format
the code accordingly. This makes the code easier to read, diff and you avoid
meaningless PR reviews about where to put whitespaces.

```
yarn add eslint
yarn run eslint --init
# Example choises of init wizard: enforce style, esm, react, 
  typescript, browser, google style (guide) and js format
```

A small comparison of common styleguide can be found [here](https://medium.com/better-programming/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7)

To save you some gray hairs you can setup the auto fix feature on save in your favorite IDE

* [Auto-eslint VSCode](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting)
* [Auto-eslint Webstorm](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) 

As a final touch, we setup this auto-fix on git stage:

```npx mrm lint-staged```

This kind of forces the chosen style and best practices as far as is practical.



# Agility Web
A web frontend for agility port.

Hosted at: https://agilityport.web.app/



# Roadmap
It is still very early, and a lot can change quickly, but the overall idea is to:

1. Make a top-notch view for planned, running and completed competitions
2. Enable registration of community/unofficial competitions
3. Run competitions with this system (enter runs in this system)
4. Enable payment for these unofficial competitions
5. Make a competition planner - customising a schedule for one or more equipages.

# Immediate TODOS
* Incorporate logo
* Set teaming - do not use default material colors
* Work on competition table
* Work on pagination and search

# Technology stack
Name dropping some technologies used in this project.
 
* React CRA with Typescript
* Authentication: Firebase
* Database: Firestore
* Main UI framework: material-ui
* Notable libraries: react-table and dayjs

# Starting from scratch
If you want to know how we ended up here, this is it:

```
yarn create react-app agilityport --template typescript
```

### Install and configure firebase
npm install -g firebase-tools
firebase init (firestore, emulator, hosting)

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



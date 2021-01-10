# Agility Web
Codebase for [agilityport.web.app](https://agilityport.web.app) - the web frontend for agility port

![Build Status](https://github.com/agilityport/agilityweb/workflows/live/badge.svg)

# Roadmap
It is still very early, and a lot can change quickly, but the overall idea is to:

1. Make a top-notch view for agility schedules and results (import from other systems)
2. Registration of community/unofficial competitions (one place to plan your events)
3. Organiser module to run competitions - exporting results to official systems
4. Handle registration and payments
5. Event planner - plan your intra-event schedule (when to run where with which dog)

# Contribute
This is a GPLv3 project aimed to assist athletes and organisers in the agility sport.
It will only be a success if you join forces with the rest of the team. 
Some areas that might kick start your contributions are:

* Take a look at existing [issues](https://github.com/agilityport/agilityweb/issues)
* The organiser module/pages needs people with organising experience
* Registration and payment section too
* Statistics and analytics - the results accumulated in this project will be the largest ever.
* General UI and UX contributions will always be in demand

# Immediate TODOS
* Result table, expand events and results
* Pagination and table manipulation (sort and filter)

# Technology stack
Name dropping some technologies used in this project.
 
* React CRA with Typescript
* Authentication: Firebase
* Database: Firestore
* Main UI framework: material-ui
* Notable libraries: react-table, react-router and dayjs

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



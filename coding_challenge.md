# Graphy React Coding Challenge

![Graphy Careers](https://graphy-static.ams3.cdn.digitaloceanspaces.com/careers-alt.png)

Hi there! 👋

Thank you for your interest in joining the Graphy team. This open-ended coding challenge is part of our evaluation process. We believe that this approach is better than asking you to solve interview puzzles or to write algorithms from memory (as if Wikipedia doesn't exist).

Because the challenge is open-ended, it's possible to spend a long time on this. Please limit yourself to working on this challenge for **no more than 6 hours**. It's expected that you will not get through all the requirements (or at least not to the level that you'd like). That's okay! As you'll see, articulating what you'd envision working on next is also part of the challenge.

## The challenge

Your task is to write a React app that allows users to add annotations to arbitrary points on the screen.

## Prerequisites

1. Make sure you have these installed:
    1. [Node](https://nodejs.org/en/)
    2. [Yarn](https://yarnpkg.com/en/docs/install) (optional)
2. Follow the setup instructions below.

## Setup

1. Clone this repo to your dev environment.
2. The repo includes a very basic React starter app.
3. Run `yarn` (or `npm install`).
4. Run `yarn dev` (or `npm run dev`) to start the dev server.

## Requirements

1. Add functionality that allows users to add annotations anywhere on the screen.
2. When an annotation is added, a marker is generated and shown on the screen.
3. Markers should be interactive. When you hover over a marker, the annotation should show up as a tooltip. Please implement your own version of tooltips (e.g. don't use an external library or the "title" attribute).
4. Add the ability to edit and delete annotations.
5. ***Bonus*** When hovering over a marker, the annotation tooltip will be shown. Make sure this tooltip never overflows the screen. In other words, make sure these tooltips are always visible on the screen and they don't get cropped.
6. ***Bonus*** Add support for multi-line annotations.
7. ***Bonus*** You'll notice that as you add more and more markers, many of the tooltips will start to overlap with other markers making it difficult to select those overlapped markers. Please implement a way to make this interaction more user friendly. *Hint: When interacting with large numbers of data points (or lines), [Voronoi diagrams](https://en.wikipedia.org/wiki/Voronoi_diagram) can be generated to help delimit invisible boundaries around a given point. Check out this multi-line chart [example](https://bl.ocks.org/mbostock/8033015) for a working example.*
8. Finally, write 1-2 paragraph on what on the project you would focus on next, if you had time.

## Wireframe

This is a wireframe of several of the requirements mentioned above.

![Illustration](https://i.imgur.com/1k84vVF.png)

## Guidelines & some tips

1. As stated before, please don't use any third-party library that implements annotations or tooltips (e.g. `react-annotation` for annotations, `react-tippy` for tooltips, etc).
2. We don't expect 100% test coverage but we do expect to see at least some level of testing.
3. The design is up to you. We won't be looking for polished, production ready flashiness but we do have a high bar for UX and design so you should aim to build something user-friendly and tasteful. 
4. You may use TypeScript if you want to.
5. We value attention to small details. Be creative! 🎨

## How to submit your code

1. If you use GitHub, upload your solution to GitHub and make the repo private. Add [@tomasztunik](https://github.com/tomasztunik) and [@zofiag](https://github.com/zofiag) as collaborators ([how do I do that?](https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository)).
2. Alternatively, zip the repo and [email it to us](mailto:roman@graphyapp.com).

![Graphy Careers](https://graphy-static.ams3.cdn.digitaloceanspaces.com/careers-alt.png)

# Graphy React Coding Challenge

Start here 👉 [Coding Challenge Guidelines](coding_challenge.md)

Welcome!

Use this file to write your README as if it was for a production service.

Include these things:

- brief description of the solution

I went with the template as it was, SVG was a clear choice, d3-delaunay seemed nice and intuitive, was thinking about updating deps at least but didn't want to waste time.

- reasoning behind your technical choices

There weren't many, d3js was clear choice for SVG manipulation, Jest is my go to test runner.

- trade-offs you might have made or anything you left out
TODO

- describe what you did differently (if anything)
- what you might have done differently if you were to spend additional time on this solution
I would consider component tests using `react testing library`, figure out what behaviour we want on touch devices and maybe make that work better.
I would have started from `npx create-react-app my-app --template typescript` to have up to date dependencies and types, or from my own starter https://github.com/halafi/quickact

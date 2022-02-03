# A statically generated my portfolio website using Next.js, WordPress and WPGraphQL Plugin as headless CMS

This is my portfolio website with WordPress and [WPGraphQL Plugin](https://www.wpgraphql.com/) with [Next.js](https://nextjs.org/) as a static web!

### Please do not copy essential part of my code, design and logo.

## Live site

[https://yukohorita-dev.vercel.app/](https://yukohorita-dev.vercel.app/)

## Technologies used

I chose Next.js as it is good for a static website, and wanted to have a experience with WordPress as headless CMS. I got an idea from [Colby Fayock's YouTube video](https://youtu.be/tXAdHjQJf0Y). I used the technique to fetch data from Word Press posts using WPGraphQL for the list of projects that I have done.

I also spent plenty of time on achieving accessibility standards, contrasts and styles in CSS.

## How to use

### Requirements

- [WordPress](https://wordpress.org/)
- [WPGraphQL](https://www.wpgraphql.com/)
- Environment variables (see below)

```bash
yarn create next-app -e https://github.com/Sloth247/my-website-gql
# or
npx create-next-app -e https://github.com/Sloth247/my-website-gql
```

Add an `.env.local` file to the root with the following:

```
WORDPRESS_GRAPHQL_ENDPOINT="http://yukohorita.click/graphql"
```

# say-cheese-node-wrapper
A wrapper for IllusionMan1212's say cheese API

**https://github.com/IllusionMan1212/say-cheese**

## Install

```bash
npm i --save say-cheese-wrapper
```

or

```bash
yarn add say-cheese-wrapper
```

## The module contains JSDoc and .d.ts so you should find docs in your ide/editor

```js
console.log(await random()) // Returns a random cheese from the db.
```

```js
console.log(await search(q, page, per_page)) // Search for cheeses by name.
/*
q - The search query you want to perform. (required)
page - Pagination number. (default = 1)
per_page - Number of cheeses to display in a single page. (max = 50; default = 10)
*/
```

```js
console.log(await today()) // Returns cheese of the day.
```

```js
console.log(await alphabetical(letter, page, per_page)) // Find cheeses by their first letter.
/*
l - The letter you want to display the cheeses for. (required)
page - Pagination number. (default = 1)
per_page - Number of cheeses to display in a single page. (max = 50; default = 10)
*/
```

```js
console.log(await vegetarian(page, per_page)) // Returns an array of all vegetarian cheeses.
/*
page - Pagination number. (default = 1)
per_page - Number of cheeses to display in a single page. (max = 50; default = 10)
*/
```
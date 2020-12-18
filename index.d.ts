/**
 * Returns a random cheese from the db.
 *
 * @return {Promise<object>} Object - docs https://github.com/IllusionMan1212/say-cheese#readme
 *
 * @example
 *     console.log(await random())
*/

export function random(): Promise<object>;

/**
 * Search for cheeses by name.
 * 
 * 
 * @param {string} q - The search query you want to perform. (required)
 * @param {number} page - Pagination number. (default = 1)
 * @param {number} per_page - Number of cheeses to display in a single page. (max = 50; default = 10)
 *
 * @return {Promise<object>} Object - docs https://github.com/IllusionMan1212/say-cheese#readme
 *
 * @example
 *     console.log(await search("cheddar"))
*/

export function search(q: string, page: number, per_page: number): Promise<object>;

/**
 * Returns cheese of the day.
 *
 * @return {Promise<object>} Object - docs https://github.com/IllusionMan1212/say-cheese#readme
 *
 * @example
 *     console.log(await today())
*/

export function today(): Promise<object>;

/**
 * Find cheeses by their first letter.
 * 
 * 
 * @param {string} letter - The letter you want to display the cheeses for. (required)
 * @param {number} page - Pagination number. (default = 1)
 * @param {number} per_page - Number of cheeses to display in a single page. (max = 50; default = 10)
 *
 * @return {Promise<object>}
 *
 * @example
 *     console.log(await alphabetical("c"))
*/

export function alphabetical(letter: string, page: number, per_page: number): Promise<object>;

/**
 * Returns an array of all vegetarian cheeses.
 * 
 * 
 * @param {string} l - The letter you want to display the cheeses for. (required)
 * @param {number} page - Pagination number. (default = 1)
 * @param {number} per_page - Number of cheeses to display in a single page. (max = 50; default = 10)
 *
 * @return {Promise<object>}
 *
 * @example
 *     console.log(await vegetarian())
*/

export function vegetarian(page: number, per_page: number): Promise<object>;
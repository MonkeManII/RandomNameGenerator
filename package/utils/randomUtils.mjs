import { GeneralUtils } from "./generalUtils.mjs";

/**
 * A set of utilities used to generate psuedorandom objects
 */
const RandomUtils = {
    /**
     * @returns A random username
     */
    RandomName: async () => {
        let name = "";

        let loopCount = RandomUtils.RandomInt(1, 10);

        for (let i = 0; i < loopCount; i++) {
            name += RandomUtils.RandomWord();
            await GeneralUtils.Delay(20);
        }

        let digitCount = RandomUtils.RandomInt(1, 4);

        for (let i = 0; i < loopCount; i++) {
            name += RandomUtils.RandomInt(0, 10);
            await GeneralUtils.Delay(20);
        }

        return name;
    },
    /**
     * @returns A random name from the RandomUtils.RandomWords array 
     */
    RandomWord: () => {
        return RandomUtils.RandomWords[RandomUtils.RandomInt(0, RandomUtils.RandomWords.length)];
    },

    /**
     * Returns a random integer from [min, max)
     * @param {number} min The minimum (inclusive) 
     * @param {number} max The maximum (exclusive)
     * @returns The random integer
     */
    RandomInt: (min, max) => {
        return Math.floor(((max - min) * Math.random()) + min);
    },

    /**
     * Loads an array of random words from a specified JSON file into the RandomWords array
     * @param {string} filepath A filepath to the JSON to load
     */
    LoadRandomWords: async (filepath) => {
        console.log(`${GeneralUtils.Webpage}${filepath}`);
        fetch(`${GeneralUtils.Webpage}${filepath}`)
            .then((res) => res.text())
            .then((text) => {
                try {
                    RandomUtils.RandomWords = JSON.parse(text);
                } catch(e) {
                    console.error(`Attempted to load RandomWords from an invalid JSON file!\r\nError: ${e}`);
                }
            })
            .catch((e) => console.error(e));
    },

    /**
     * An array of random words, stolen from DMs
     */
    RandomWords: [],
}


export { RandomUtils };
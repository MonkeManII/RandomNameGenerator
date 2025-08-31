/**
 * A set of general-use utilities
 */
const GeneralUtils = {
    /**
     * Represents an awaitable delay
     * @param {number} ms 
     * @returns A Promise that is fulfilled after ms milliseconds
     */
    Delay: (ms) => new Promise(res => setTimeout(res, ms)),

    /**
     * The webpage that this Javascript is located on
     */
    Webpage: "http://127.0.0.1:5500/"
}

export { GeneralUtils };
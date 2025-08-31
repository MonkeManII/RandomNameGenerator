/**
 * A set of utilities for working with an HTML document.
 */
const DocumentUtils = {
    /**
     * Creates a new text HTML element
     * @param {string} textContents The contents of the text
     * @param {string} htmlClass The class of the element
     * @returns A reference to an HTML element with the specified text contents and class
     */
    newText: (textContents, htmlClass) => {
        let e = document.createElement("p");
        e.textContent = textContents;
        e.className = htmlClass;
        return e;
    }
}

export { DocumentUtils };
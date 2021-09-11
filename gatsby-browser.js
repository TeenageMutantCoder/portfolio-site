/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

exports.onClientEntry = () => {
    window.addEventListener("load", () => {
        document.body.classList.remove("loading");
    });
};

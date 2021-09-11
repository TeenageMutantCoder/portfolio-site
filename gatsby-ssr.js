/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const BodyAttributes = {
    className: "loading",
};

exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes(BodyAttributes);
};

const data = require("./content/data/updates.js");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    data.updates.forEach((update) => {
      const node = {
          title: update.title,
          tag: update.tag,
          id: createNodeId(`update-${update.title}`),
          internal: {
              type: "Update",
              contentDigest: createContentDigest(update)
          },
      }
      actions.createNode(node);
    });
}
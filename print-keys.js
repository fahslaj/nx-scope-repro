const { createProjectGraphAsync } = require('@nx/devkit');

(async () => {
  const graph = await createProjectGraphAsync();
  console.log(Object.keys(graph.nodes));
})();

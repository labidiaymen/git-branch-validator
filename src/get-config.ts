const cosmiconfig = require("cosmiconfig");
const defaultConfig = require("./config.default");

export function getConf(startDir = null, endDir = null, clearCache = false) {
  const { searchSync, clearCaches } = cosmiconfig("git-branch-validator", {
    endDir,
  });
  const { config = {} } = searchSync(startDir) || {};
  if (clearCache) clearCaches();

  return Object.assign({}, defaultConfig, config);
}

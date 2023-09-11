function readPackage(pkg, ctx) {
  // workaround, see description of https://github.com/hokify/hokify/pull/7389
  if (pkg.name === "package-a") {
    pkg.dependencies = {
      ...pkg.dependencies,
      glob: "^10.3.4",
    };
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};

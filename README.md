This repository demonstrates a change in the nx watch command between versions 16.3.0 and the latest (16.4.2).

1. Run `npm install`
2. Run `nx watch --all -- echo \$NX_PROJECT_NAME` from the root (note the escaped $)
3. Manually change or save a file within the package "package-1"
4. Observe that the name "package-1" is printed to the console.

Next, to see what the new version of Nx produces, do the following:

1. Run `npm install --save-dev nx@16.4.2` to install the newer nx version
2. Run `nx reset`
3. Run `nx watch --all -- echo \$NX_PROJECT_NAME` from the root (note the escaped $)
4. Manually change or save a file within the package "package-1"
5. Observe that the name "@scope/package-1" is printed to the console.

More notes:
It looks like Nx 16.3.0 strips the scope from the name of the package itself. When running `nx dep-graph`, it appears as "package-1". For nx@16.4.2, it appears as "@scope/package-1".

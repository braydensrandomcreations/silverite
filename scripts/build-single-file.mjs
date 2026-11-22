// The reduced portable build owns its sources and build script. Delegate to it
// so this entry point cannot rebuild the portable output from the hosted app's
// full-feature sources.
await import(new URL("../single-file/build.mjs", import.meta.url).href);

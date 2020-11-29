// @ts-check
/// <reference lib="es2020" />

const esbuild = require("esbuild")

const [, , mode] = process.argv

/** @type {import('esbuild').BuildOptions} */
const configBase = {
  entryPoints: [`${__dirname}/src/index.tsx`],
  outfile: `${__dirname}/public/dist/bundle.js`,
  bundle: true,
  target: "es2020",
  format: "esm",
  charset: "utf8",
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}

switch (mode) {
  case "development": {
    const chokidar = require("chokidar")

    chokidar.watch(`${__dirname}/src/**/*.{ts,tsx}`).on("all", () => {
      esbuild.buildSync({
        ...configBase,
        sourcemap: true,
      })
    })

    break
  }

  case "production": {
    esbuild.buildSync({
      ...configBase,
      minify: true,
    })

    break
  }

  default: {
    throw new Error(
      "引数には development, production のどちらかを指定してください"
    )
  }
}

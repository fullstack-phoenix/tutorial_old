module.exports = {
  purge: {
    enabled: (process.env.MIX_ENV === "prod" || process.env.NODE_ENV === "production"),
    content: [
      "../lib/**/*.eex",
      "../lib/**/*.leex",
      "../lib/**/*_view.ex"
    ],
    options: {
      whitelist: [/phx/, /nprogress/]
    }
  }
}

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "ci",
        "feat",
        "chore",
        "docs",
        "fix",
        "refactor",
        "perf",
        "revert",
        "style",
        "test",
      ],
    ],
  },
}

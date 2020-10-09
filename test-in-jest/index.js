const { highlighter } = require("@codemirror/next/highlight");

exports.myHighlighter = function myHighlighter() {
  return highlighter({});
}

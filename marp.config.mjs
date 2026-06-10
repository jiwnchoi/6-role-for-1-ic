const cssString = (value) => JSON.stringify(String(value ?? ""));

const textDirective = (name) => (value) => ({
  [name]: cssString(value),
});

export default {
  engine: ({ marp }) => {
    marp.customDirectives.local.title = textDirective("title");
    marp.customDirectives.local.presenter = textDirective("presenter");
    marp.customDirectives.local.affiliation = textDirective("affiliation");

    return marp;
  },
};

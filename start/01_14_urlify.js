// Write your code here
const URLify = (blogTitle) => {
  const punctuation = /[,./'#!"£$%^&*()_+=`¬]/g;

  const noPunctuation = blogTitle.replace(punctuation, "");

  const noSpacing = noPunctuation.replaceAll(" ", "-");

  return noSpacing.toLowerCase();
};

console.log(URLify("My new address is Newton-le-willows!"));

// set up links:
const mainSingleton = document.getElementsByTagName("main");
for (const main of mainSingleton) {
  const links = main.getElementsByTagName("a");
  for (const link of links) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute(
      "class",
      "underline text-blue-600 hover:text-blue-800 visited:text-purple-600 dark:text-sky-600 dark:hover:text-sky-400 dark:visited:text-indigo-500"
    );
    // https://nearest-tailwind-color.netlify.app/ gave me dark colors which are used on https://docs.python.org/3/
  }
}
// TODO: FIXME: Add a toggle switch to turn informational links off (by storing the link in the id, for instance), unless they're within something whose class is downloads.

//TODO:Could use https://youtu.be/WTchW0LdWL0 approach to define a master data-theme for dark mode using CSS variables
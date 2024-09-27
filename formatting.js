const mainSingleton = document.getElementsByTagName("main")
for (const main of mainSingleton) {
    const links = main.getElementsByTagName("a")
    for (const link of links) {
        link.setAttribute("target","_blank")
        link.setAttribute("rel","noopener noreferrer")
        link.setAttribute("class","underline text-blue-600 hover:text-blue-800 visited:text-purple-600")
        // TODO: FIXME: Expand the above to work for dark mode
    }
}
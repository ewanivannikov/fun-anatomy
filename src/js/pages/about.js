import templateAbout from 'templates/about.pug';

function about() {
    document.querySelector("#root").innerHTML = templateAbout();
}
export default about;
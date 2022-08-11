
const appName = 'Git Flow no dia a dia';

function sayHello() {
    const version = '1.0';
    console.log(`Say Hello Version ${version}`);
}

const sayHelloAgain = () => {
    const version = '2.0';
    console.log(`Say Hello Version ${version}`);
};

document.addEventListener("DOMContentLoaded", function(event) {
    console.info(`${appName}`);
    console.log("DOM completamente carregado e analisado");
});
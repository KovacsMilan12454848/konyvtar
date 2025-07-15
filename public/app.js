

async function renderPage(path) {
    const c = document.getElementById('content');

    if (path === '/') {
        console.log("itt volt a home oldalon");

        const homeModule = await import('./oldalak/home.js');
        homeModule.default(); // vagy homeModule.init(), ahogy exportáltad

    } else if (path === '/register') {
        console.log("itt volt a register oldalon");

        const reglog = await import('./oldalak/reg-log.js');
         reglog.default(`Regisztráció`);
       // vagy amit exportáltál
    } 
    else if (path === '/login') {
        console.log("itt volt a login oldalon");

        const reglog = await import('./oldalak/reg-log.js');    
         reglog.default(`Login`);
         // vagy amit exportáltál
    } 
}

window.onpopstate = () => renderPage(location.pathname);
window.onload = () => renderPage(location.pathname);

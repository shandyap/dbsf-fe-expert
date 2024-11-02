import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';


class App {
  constructor({ menu, drawer, maincontent }) {
    this._menu = menu;
    this._drawer = drawer;
    this._maincontent = maincontent;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menu: this._menu,
      drawer: this._drawer,
      maincontent: this._maincontent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._maincontent.innerHTML = await page.render();
    await page.afterRender();
  }
}


export default App;
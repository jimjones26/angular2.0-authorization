import { Angular2AuthorizationPage } from './app.po';

describe('angular2-authorization App', function() {
  let page: Angular2AuthorizationPage;

  beforeEach(() => {
    page = new Angular2AuthorizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { IndiaTourWebsitePage } from './app.po';

describe('india-tour-website App', () => {
  let page: IndiaTourWebsitePage;

  beforeEach(() => {
    page = new IndiaTourWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

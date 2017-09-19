import { AngularEventosPage } from './app.po';

describe('angular-eventos App', () => {
  let page: AngularEventosPage;

  beforeEach(() => {
    page = new AngularEventosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

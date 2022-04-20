describe('Initial page', () => {
  const artist = 'AC/DC';

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000');
  })

  it('should be able to filter artists list', () => {
    cy.searchForArtist(artist);
    expect(cy.getRowByText(artist)).to.exist;
  })

  it('should be able to filter artists list and go to detail page', () => {
    cy.searchForArtist(artist);
    cy.getRowByText(artist).click();

    expect(cy.get('[role="heading"]').contains(`Music by ${artist}`)).to.exist;
  })
})

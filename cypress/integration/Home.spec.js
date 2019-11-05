/* eslint-disable no-undef */

describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("http://localhost:8080");
  });

  it("Toggles dark theme", function() {
    cy.get("#app > .home > .container > .row > .col > span").click();
    cy.get("body.dark");
    cy.get("#app > .home > .container > .row > .col > span").click();
    cy.get("body.light");
  });
});

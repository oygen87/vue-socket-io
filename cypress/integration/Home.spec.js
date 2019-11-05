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

  it("Submit Button is disabled by default", function() {
    cy.get('button[type="submit"][disabled]');
    cy.get('input[placeholder="username"]').type("foo");
    cy.get('input[placeholder="https://github.com/user/repo"]').type("bar");
    cy.get('button[type="submit"]').click();
  });

  it("Shows error message when repo is private or not found", function() {
    cy.get('button[type="submit"][disabled]');
    cy.get('input[placeholder="username"]').type("foo");
    cy.get('input[placeholder="https://github.com/user/repo"]').type("bar");
    cy.get('button[type="submit"]').click();
    cy.get(".alert-danger");
  });
});

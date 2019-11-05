/* eslint-disable no-undef */

describe("The Chat Page", function() {
  it("successfully loads", function() {
    cy.visit("http://localhost:8080");

    cy.get('button[type="submit"][disabled]');
    cy.get('input[placeholder="username"]').type("test-user");
    cy.get('input[placeholder="https://github.com/user/repo"]').type(
      "https://github.com/facebook/react"
    );
    cy.get('button[type="submit"]').click();
  });

  it("posts message", function() {
    const sample = new Date().toISOString();

    cy.get('input[type="text"]').type(`${sample}{enter}`);
    cy.get('input[type="text"]').should("have.text", "");
    cy.wait(3000);
    cy.get(".msgbox-container div div")
      .eq(-1)
      .find("span")
      .should("have.text", sample);
  });
});

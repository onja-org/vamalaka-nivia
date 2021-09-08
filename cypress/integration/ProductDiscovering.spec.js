/// <reference types="cypress" />

describe("Product discovering", () => {
  beforeEach("visits Product discovering", () => {
    cy.visit("http://localhost:6006");
    cy.contains("ProductDiscovering", { timeout: 20000 });
  });
  it("Has ProductDiscovering component", () => {
    cy.contains("ProductDiscovering");
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-productdiscovering--discovering&args=&viewMode=story"
    );
    cy.get("div");
    cy.get("button");

    cy.get("h2");
    cy.contains("This is a subtitle that is very informative");

    cy.get("h3");
    cy.contains(
      "Discover amazing products and profit from a truly fair market: "
    );
  });
});

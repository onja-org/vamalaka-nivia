/// <reference types="cypress" />

const PENDING_LARGE =
  "http://localhost:6006/iframe.html?id=pendingindicator--large&args=&viewMode=story";
const PENDING_MIDIUM =
  "http://localhost:6006/iframe.html?id=pendingindicator--medium&args=&viewMode=story";
const PENDING_SMALL =
  "http://localhost:6006/iframe.html?id=pendingindicator--small&args=&viewMode=story";
const PENDING_EXTA_SMALL =
  "http://localhost:6006/iframe.html?id=pendingindicator--etra-small&args=&viewMode=story";

describe("Pending indicator component", () => {
  beforeEach("visits storybook", () => {
    cy.visit("http://localhost:6006");
    cy.contains("PendingIndicator", { timeout: 20000 });
  });

  it("Has a large pending indicator", () => {
    cy.contains("PendingIndicator");
    cy.visit(PENDING_LARGE);
    cy.get("img").should("have.attr", "src");
  });

  it("Has a midium pending indicator", () => {
    cy.contains("PendingIndicator");
    cy.visit(PENDING_MIDIUM);
    cy.get("img").should("have.attr", "src");
  });

  it("Has a small pending indicator", () => {
    cy.contains("PendingIndicator");
    cy.visit(PENDING_SMALL);
    cy.get("img").should("have.attr", "src");
  });

  it("Has an extra-small pending indicator", () => {
    cy.contains("PendingIndicator");
    cy.visit(PENDING_EXTA_SMALL);
    cy.get("img").should("have.attr", "src");
  });
});

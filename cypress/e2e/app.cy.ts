describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
  it("h1 has the right text", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1").contains("Welcome to tests!");
  });

  it("gets button,clicks it and also displays right text after", () => {
    cy.visit("http://localhost:5173");
    cy.get(".test_button").click();
    cy.get(".gender").should("be.visible").contains("My whatever is female");
  });
});

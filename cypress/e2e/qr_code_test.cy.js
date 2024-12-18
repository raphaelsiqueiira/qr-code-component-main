describe("QR Code Component Test", () => {
  it("Verifica a presença do QR Code e o link", () => {
    cy.visit("/index.html");

    cy.get("#qr-img").should("be.visible");

    cy.get("a").should("have.attr", "href").and("include", "https://www.frontendmentor.io/");
  });

  it("Verifica se o QR Code redireciona corretamente", () => {
    cy.visit("/index.html");

    cy.get("a").should("have.attr", "target", "_blank").click();
  });
});

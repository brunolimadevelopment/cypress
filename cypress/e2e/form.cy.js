describe("testando campo de upload", () => {
  it("upload", () => {
    cy.visit("http://localhost:3000");
    cy.wait(4000);

    cy.get("[data-cy=el-upload]").selectFile("./cypress/videos/form.cy.js.mp4");

    cy.get("[data-cy=el-email]")
      .should("exist")
      .and("be.visible")
      .focus()
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
      .should("have.attr", "type", "email");

    cy.get("[data-cy=el-pass]")
      .focus()
      .type("123456789")
      .should("have.value", "123456789")
      .should("have.attr", "type", "password");

    cy.get("[data-cy=el-select]").then((select) => {
      const options = select.find("option");

      options.each((index, option) => {
        const optionValue = Cypress.$(option).val();

        cy.wait(500);

        cy.get("[data-cy=el-select]")
          .trigger("click")
          //.get("select")
          .select(optionValue, { force: true });

        cy.get("[data-cy=el-select]").should("have.value", optionValue);
      });
    });

    cy.get("[data-cy=el-textarea]")
      .focus()
      .type("Escreva uma mensagem aqui para nós.")
      .should("have.value", "Escreva uma mensagem aqui para nós.")
      .should("have.attr", "rows", "3");

    cy.get("[data-cy=el-check]").not("[disabled]").check().should("be.checked");

    cy.get("[data-cy=el-submit]").submit();
  });
});

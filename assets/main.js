function removeShimmerClass() {
  // Seletor para os elementos desejados
  var elements = document.querySelectorAll(".shimmer");

  // Itera sobre os elementos e remove a classe shimmer
  elements.forEach(function (element) {
    element.classList.remove("shimmer");
    element.removeAttribute("tabindex");
  });
}

// Chama a função após 8 segundos (8000 milissegundos)
setTimeout(removeShimmerClass, 3000);

function validateForm() {
  // Exibir o spinner
  const spinner = document.getElementById("spinner");
  spinner.style.display = "inline-block";

  const formFields = [
    { id: "exampleInputEmail1", type: "email" },
    { id: "exampleInputPassword1", type: "password" },
    { id: "exampleCheck1", type: "checkbox" },
    { id: "form-select", type: "select" },
    { id: "exampleFormControlTextarea1", type: "textarea" },
  ];

  let isFormValid = true;

  formFields.forEach(({ id, type }) => {
    const field = document.getElementById(id);
    const value =
      field.type === "checkbox" ? field.checked : field.value.trim();

    // Validar campo com base no tipo
    const isValidField = validateField(value, type);

    // Aplicar classes Bootstrap de feedback de validação
    removeClasses(field, ["is-valid", "is-invalid"]);

    // Aplicar a classe is-valid após um pequeno atraso
    setTimeout(() => {
      addClasses(field, isValidField ? ["is-valid"] : ["is-invalid"]);
    }, 100);

    // Atualizar a variável de validação do formulário
    isFormValid = isFormValid && isValidField;
  });

  if (isFormValid) {
    // Se o formulário for válido, aguarde 8 segundos e depois execute a ação desejada
    setTimeout(() => {
      // Esconder o spinner
      spinner.style.display = "none";

      showSuccessBlock();
    }, 3000);
  }

  return false; // Evitar que o formulário seja enviado
}

function validateField(value, fieldType) {
  // Validar com base no tipo de campo
  switch (fieldType) {
    case "email":
      return isValidEmail(value);
    case "checkbox":
      return value; // O checkbox deve estar marcado
    case "select":
      return value !== "" && value !== "Selecione uma opção"; // Validar o campo select
    default:
      return value !== ""; // Campo não pode estar vazio
  }

  // Adicione mais casos conforme necessário para outros tipos de campo
}

function isValidEmail(email) {
  // Validar formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function addClasses(element, classes) {
  element.classList.add(...classes);
}

function removeClasses(element, classes) {
  element.classList.remove(...classes);
}

function showSuccessBlock() {
  // Esconder o formulário
  const form = document.getElementById("myForm");
  form.style.display = "none";

  // Exibir o bloco de sucesso
  const successBlock = document.getElementById("successBlock");
  successBlock.style.display = "block";
}

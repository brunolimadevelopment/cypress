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
  let isFormValid = true;

  const formFields = [
    { id: "file", type: "file" },
    { id: "exampleInputEmail1", type: "email" },
    { id: "exampleInputPassword1", type: "password" },
    { id: "exampleCheck1", type: "checkbox" },
    { id: "form-select", type: "select" },
    { id: "exampleFormControlTextarea1", type: "textarea" },
  ];

  formFields.forEach(({ id, type }) => {
    const field = document.getElementById(id);
    const value =
      field.type === "checkbox" ? field.checked : field.value.trim();

    // Validar campo com base no tipo
    const isValidField = validateField(value, type);

    // Aplicar classes Bootstrap de feedback de validação
    removeClasses(field, ["is-valid", "is-invalid"]);

    // Aplicar a classe is-valid
    addClasses(field, isValidField ? ["is-valid"] : ["is-invalid"]);

    // Atualizar a variável de validação do formulário
    isFormValid = isFormValid && isValidField;
  });

  // Exibir o spinner apenas após a validação e se o formulário for válido
  if (isFormValid) {
    // Aguarde 3 segundos e depois execute a ação desejada
    setTimeout(() => {
      showSpinner();
    }, 3000);
  }

  return false; // Evitar que o formulário seja enviado
}

function hiddenForm() {
  document.getElementById("myForm").style.display = "none";
}
function showToast() {
  const toastLiveExample = document.getElementById("liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

  toastBootstrap.show();

  setTimeout(function () {
    toastBootstrap.hide();
  }, 2000);
}
function showSuccessBlock() {
  // Esconder o formulário
  const form = document.getElementById("myForm");
  form.style.display = "none";

  // Exibir o bloco de sucesso
  const successBlock = document.getElementById("card-success");
  successBlock.style.display = "flex";
}
function showSpinner() {
  // Esconder o formulário
  hiddenForm();
  // Mostrar o toast
  showToast();

  const spinner = document.getElementById("spinner");
  spinner.style.display = "inline-block";

  // Se o formulário for válido, aguarde 3 segundos e depois execute a ação desejada
  setTimeout(() => {
    // Esconder o spinner
    spinner.style.display = "none";
    // Exibir o bloco de sucesso
    showSuccessBlock();
  }, 3000);
}
function addClasses(element, classes) {
  element.classList.add(...classes);
}
function removeClasses(element, classes) {
  element.classList.remove(...classes);
}
function isValidEmail(email) {
  // Validar formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

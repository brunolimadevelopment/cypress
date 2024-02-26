function removeShimmerClass() {
  var elements = document.querySelectorAll(".shimmer");
  elements.forEach(function (element) {
    element.classList.remove("shimmer");
    element.removeAttribute("tabindex");
  });
}

function showSuccessBlock() {
  const form = document.getElementById("myForm");
  form.style.display = "none";

  const successBlock = document.getElementById("card-success");
  successBlock.style.display = "flex";
}

function showSpinner(isFormValid) {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "inline-block";

  if (isFormValid) {
    setTimeout(() => {
      spinner.style.display = "none";
      showSuccessBlock();
    }, 3500);
  }
}

function validateForm() {
  let isFormValid = true;

  const formFields = [
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

    const isValidField = validateField(value, type);

    removeClasses(field, ["is-valid", "is-invalid"]);
    addClasses(field, isValidField ? ["is-valid"] : ["is-invalid"]);

    isFormValid = isFormValid && isValidField;
  });

  if (isFormValid) {
    hideForm();
    showToast();
    removeShimmerClass(); // Adicionando a chamada para remover a classe shimmer
    showSpinner(isFormValid);
  }

  return false;
}

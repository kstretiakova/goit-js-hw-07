const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (!info.email || !info.password) {
    return alert("All form fields must be filled in");
  }
  console.log(info);
  event.currentTarget.reset();
}

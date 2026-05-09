const jobsListingsSection = document.querySelector(".jobs-listings");

const applyButtons = (event) => {
  if (event.target.classList.contains("button-apply-job")) {
    const button = event.target;
    button.textContent = "Aplicado";
    button.classList.add("is-applied");
    button.disabled = true;
    console.log("click en el boton de aplicar");
  }
};

jobsListingsSection?.addEventListener("click", (event) => {
  applyButtons(event);
});

const jobsDetailsSection = document.querySelector(".jobs-details");

jobsDetailsSection?.addEventListener("click", (event) => {
  applyButtons(event);
});

const container = document.querySelector("#jobs-container");

export let jobsData = [];

export const renderJobs = (jobs) => {
  container.innerHTML = "";

  jobs.forEach((job) => {
    const article = document.createElement("article");

    article.classList.add("job-listing-card");

    article.dataset.modalidad = job.data.modalidad;
    article.dataset.nivel = job.data.nivel;
    article.dataset.technology = job.data.technology;

    article.setAttribute("id", job.id);

    article.innerHTML = `
      <div class="job-card">
        <div class="job-content">
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>

        <div class="job-actions">
          <button class="button-apply-job">
            Aplicar
          </button>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
};

fetch("../db/data.json")
  .then((response) => response.json())
  .then((data) => {
    jobsData = data;

    renderJobs(jobsData);
  });

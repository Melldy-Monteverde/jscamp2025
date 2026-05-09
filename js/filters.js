import { jobsData, renderJobs } from "./fetching.js";

const filterLocation = document.querySelector("#filter-location");
const filterExperience = document.querySelector("#filter-experience-level");
const filterTechnology = document.querySelector("#filter-technology");
const serachInput = document.querySelector("#empleos-search-input");
const paginationContainer = document.querySelector("#pagination");

// central filters list
const filters = {
  location: "",
  experienceLevel: "",
  technology: "",
};

// searching by input
serachInput?.addEventListener("input", (event) => {
  const searchValue = serachInput.value.toLowerCase().trim();

  const filteredJobs = jobsData.filter((job) => {
    return job.titulo.toLowerCase().includes(searchValue);
  });
  renderJobs(filteredJobs);
});

// serching by selects
const applyFilter = () => {
  const filtered = jobsData.filter((job) => {
    const matchLocation =
      filters.location === "" || job.data.modalidad === filters.location;

    const matchExperience =
      filters.experienceLevel === "" ||
      job.data.nivel === filters.experienceLevel;

    const matchTechnology =
      filters.technology === "" || job.data.technology === filters.technology;

    return matchLocation && matchExperience && matchTechnology;
  });

  renderJobs(filtered);
};

filterLocation?.addEventListener("change", (event) => {
  filters.location = filterLocation.value;
  applyFilter();
});

filterTechnology?.addEventListener("change", (event) => {
  filters.technology = filterTechnology.value;
  applyFilter();
});

filterExperience?.addEventListener("change", (event) => {
  filters.experienceLevel = filterExperience.value;
  applyFilter();
});

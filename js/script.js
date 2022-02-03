

document.querySelector(".button-container").addEventListener("click", () => {
     let text = document.getElementById("filter-jobs").value;
});

function getJobs() {
    return fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
}


function showJobs(jobs){
      console.log("jobs in showjobs", jobs)
      let jobsContainer = document.querySelector(".jobs-container");
      let jobsHtml = ""

      jobs.forEach(job => {
          
        jobsHtml += `<div class="jobs-tile">
        <div class="top">
          <img
            src="${job.logo}"
            alt="logo-image"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="dots-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
        <div class="rolename">
            <span>${job.roleName}</span>
        </div>
        <div class="description">
            <span>${job.requirements.content}</span>
        </div>
        <div class="buttons">
            <div class="button apply-now">
                apply now
            </div>
            <div class="button">
                Message
            </div>
        </div>
      </div>`
      });
      jobsContainer.innerHTML = jobsHtml;
}
getJobs().then(data => {
    showJobs(data);
})



document.addEventListener("DOMContentLoaded", function () {
    // Select all filter buttons
    let filterButtons = document.querySelectorAll("#portfolio-flters li");

    // Select all project elements
    let projects = document.querySelectorAll(".main-project-div-inner");

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'filter-active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("filter-active"));

            // Add 'filter-active' class to clicked button
            this.classList.add("filter-active");

            // Get filter value
            let filterValue = this.getAttribute("data-filter"); // e.g. ".web"

            // Filter projects
            projects.forEach(project => {
                project.classList.remove("show", "hide"); // reset

                if (filterValue === "*" || project.classList.contains(filterValue.substring(1))) {
                    project.classList.add("show");
                } else {
                    project.classList.add("hide");
                }
            });
        });
    });
});

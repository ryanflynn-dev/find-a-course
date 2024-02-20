<<<<<<< HEAD
=======
fetch("./json/courses.json")
  .then((response) => response.json())
  .then((data) => {  })
  .catch((error) => console.error("Error loading the course data:", error));

>>>>>>> d0b931da1eacbae9d869aceb21cdeca933a846cc
function searchCourses(searchTerm) {
  fetch("./json/courses.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredCourses = data.filter((course) =>
        course.COURSE_NAME.toLowerCase().includes(searchTerm.toLowerCase())
      );

      displaySearchResults(filteredCourses);
    })
    .catch((error) => console.error("Error searching courses: ", error));
}
function displaySearchResults(courses) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("search-result-item");
    courseElement.innerHTML = `
            <h3>${course.COURSE_NAME}</h3>
            <p>${course.COURSE_DESCRIPTION || "No description available"}</p>
            <p>Start Date: ${course.STARTDATE}</p>
            <p>Location: ${course.LOCATION_NAME}, ${course.LOCATION_TOWN}</p>
            <a href="${
              course.LOCATION_WEBSITE
            }" target="_blank">Course Website</a>
            <p>Course UKPRN: ${course.PROVIDER_UKPRN}</p>
        `;
    resultsContainer.appendChild(courseElement);
    if (course.ATTENDANCE_PATTERN === 1) {
      courseElement.innerHTML += "<p>Attendance Pattern: Day Time</p>";
    }
  });
}
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById("searchQuery").value;
  searchCourses(searchTerm);
});
document.getElementById("searchQuery").addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  searchCourses(searchTerm);
});

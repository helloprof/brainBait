// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { courses, courseTopics, brainrotThemes } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ courses, courseTopics, brainrotThemes }, "App Data");

function generateCourseButtons(courses) {
    // target container/element to append to 
    let mainDiv = document.querySelector(".start-stop")

    // loop through courses array and create buttons 
    courses.forEach((course) => {

        // create button for each course
        let button = document.createElement("button")
        button.textContent = course.courseID
        //  both of these are the same:
        // 1.
        // button.classList.add("courseButton")

        // 2.
        button.className = "courseButton"

        mainDiv.appendChild(button)

        button.addEventListener("click", () => {
            console.log(`You clicked on ${course.courseID}`)
            // next function call happens
        })
    });
}

function generateCourseCards(courseID) {
    // card design to be generated:
            // <div class="courseCard">
            //     <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            //     <h2>HTML</h2>
            //     <p>Creating web pages </p>
            //     <button class="courseButton">BTI225</button>
            //  </div>
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    generateCourseButtons(courses);
})
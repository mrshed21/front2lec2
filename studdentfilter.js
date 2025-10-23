//----------- Data -----------//
const students = [
  { namn: "Bat von Man", utbildning: "Frontend", stad: "Malmö", år: 1 },
  { namn: "Cat von Woman", utbildning: "Backend", stad: "Stockholm", år: 2 },
  { namn: "Spider McWeb", utbildning: "Frontend", stad: "Göteborg", år: 3 },
  { namn: "Iron Dev", utbildning: "Frontend", stad: "Malmö", år: 1 },
  { namn: "Hulk Code", utbildning: "Fullstack", stad: "Lund", år: 2 },
  { namn: "Thor Script", utbildning: "Frontend", stad: "Uppsala", år: 1 },
  { namn: "Captain Byte", utbildning: "Backend", stad: "Malmö", år: 3 },
  { namn: "Black Code", utbildning: "Frontend", stad: "Helsingborg", år: 1 },
  {
    namn: "Scarlet Compiler",
    utbildning: "Fullstack",
    stad: "Stockholm",
    år: 2,
  },
  { namn: "Vision Array", utbildning: "Frontend", stad: "Malmö", år: 1 },
];

//----------- DOM elements -----------//
const educationRadios = document.getElementById("education-radios");
const cityRadios = document.getElementById("city-radios");
const yearSelect = document.getElementById("year-select");
const teacherCheckbox = document.getElementById("teacher-checkbox");
const showStudentsBtn = document.getElementById("show-students-btn");
const studentList = document.getElementById("student-list");
const errorMessage = document.getElementById("error-message");

//----------- Generate unique values for filters -----------//
const educations = [...new Set(students.map((student) => student.utbildning))];
const cities = [...new Set(students.map((student) => student.stad))];

//----------- skapa education radio buttons -----------//
function createEducationRadios() {
  // Add "Alla utbildningar" option
  const allOption = document.createElement("div");
  allOption.className = "radio-option";
  allOption.innerHTML = `
                <input type="radio" id="education-all" name="education" value="all" checked>
                <label for="education-all">Alla utbildningar</label>
            `;
  educationRadios.appendChild(allOption);

  //----------- addera education knappar -----------//
  educations.forEach((education) => {
    const option = document.createElement("div");
    option.className = "radio-option";
    option.innerHTML = `
                    <input type="radio" id="education-${education}" name="education" value="${education}">
                    <label for="education-${education}">${education}</label>
                `;
    educationRadios.appendChild(option);
  });
}

//----------- skapa city knappar -----------//
function createCityRadios() {
  // Add "Alla städer" option
  const allOption = document.createElement("div");
  allOption.className = "radio-option";
  allOption.innerHTML = `
                <input type="radio" id="city-all" name="city" value="all" checked>
                <label for="city-all">Alla städer</label>
            `;
  cityRadios.appendChild(allOption);

  //----------- addera city knappar -----------//
  cities.forEach((city) => {
    const option = document.createElement("div");
    option.className = "radio-option";
    option.innerHTML = `
                    <input type="radio" id="city-${city}" name="city" value="${city}">
                    <label for="city-${city}">${city}</label>
                `;
    cityRadios.appendChild(option);
  });
}

//----------- Filtrera studenter -----------//
function filterStudents() {
  const selectedEducation = document.querySelector(
    'input[name="education"]:checked'
  ).value;
  const selectedCity = document.querySelector(
    'input[name="city"]:checked'
  ).value;
  const selectedYear = yearSelect.value;

  return students.filter((student) => {
    // Filter by education
    if (
      selectedEducation !== "all" &&
      student.utbildning !== selectedEducation
    ) {
      return false;
    }

    // Filter by city
    if (selectedCity !== "all" && student.stad !== selectedCity) {
      return false;
    }

    // Filter by year
    if (selectedYear !== "all" && student.år.toString() !== selectedYear) {
      return false;
    }

    return true;
  });
}

//----------- visa studenter i DOM -----------//
function displayStudents(filteredStudents) {
  studentList.innerHTML = "";

  if (filteredStudents.length === 0) {
    studentList.innerHTML =
      '<p class="no-students">Inga studenter matchar dina filterkriterier.</p>';
    return;
  }

  filteredStudents.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";

    studentCard.innerHTML = `
                    <div class="student-name">${student.namn}</div>
                    <div class="student-details">
                        <div class="student-detail">
                            <span>Utbildning:</span>
                            <span>${student.utbildning}</span>
                        </div>
                        <div class="student-detail">
                            <span>Stad:</span>
                            <span>${student.stad}</span>
                        </div>
                        <div class="student-detail">
                            <span>Årskurs:</span>
                            <span>${student.år}</span>
                        </div>
                    </div>
                `;

    studentList.appendChild(studentCard);
  });
}

//----------- Event listener for the show students button -----------//
showStudentsBtn.addEventListener("click", () => {
  errorMessage.textContent = "";

  //----------- Check if teacher checkbox is checked -----------//
  if (!teacherCheckbox.checked) {
    errorMessage.textContent = "Please confirm that you're a teacher!";
    return;
  }

//   const filteredStudents = filterStudents();
//   displayStudents(filteredStudents);
   displayStudents(filterStudents());
});

//----------- Initialize the page -----------//
function init() {
  createEducationRadios();
  createCityRadios();
}

//----------- Run initialization when page loads -----------//
document.addEventListener("DOMContentLoaded", init);

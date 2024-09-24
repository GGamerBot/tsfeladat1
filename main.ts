
let grades: number[] = [];

const gradeInput = document.querySelector<HTMLInputElement>('#gradeInput');
const addGradeBtn = document.querySelector<HTMLButtonElement>('#addGradeBtn');
const gradeList = document.querySelector<HTMLUListElement>('#gradeList');
const searchInput = document.querySelector<HTMLInputElement>('#searchInput');

const addGrade = () => {
  const grade = Number(gradeInput?.value);

  if (grade >= 1 && grade <= 5) {
    grades.push(grade);
    gradeInput!.value = ''; 
    renderGrades(grades);   
  } else {
    alert('Kérlek, adj meg egy 1 és 5 közötti érdemjegyet!');
  }
};

const renderGrades = (gradesToRender: number[]) => {
  gradeList!.innerHTML = '';

  gradesToRender.forEach((grade) => {
    const li = document.createElement('li');
    li.textContent = grade.toString();
    gradeList?.appendChild(li);
  });
};

const searchGrades = () => {
  const searchValue = Number(searchInput?.value);
  
  if (!searchValue) {
    renderGrades(grades); 
  } else {
    const filteredGrades = grades.filter((grade) => grade === searchValue);
    renderGrades(filteredGrades);
  }
};

addGradeBtn?.addEventListener('click', addGrade);
searchInput?.addEventListener('input', searchGrades);

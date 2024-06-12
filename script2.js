document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const marital = document.getElementById('mstats').value;

   
    const student = {
        name: name,
        age: age,
        address: address,
        marital: marital
    };

    
    let students = localStorage.getItem('students');
    if (students) {
        students = JSON.parse(students);
    } else {
        students = [];
    }

   
    students.push(student);

    
    localStorage.setItem('students', JSON.stringify(students));

    
    document.getElementById('registrationForm').reset();

    
    displayStudents();

    alert('Registered successfully!');
});

function displayStudents() {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = '';

    
    const students = JSON.parse(localStorage.getItem('students')) || [];

    
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.marital}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        `;
        studentTableBody.appendChild(row);
    });
}

function deleteStudent(index) {
    
    let students = JSON.parse(localStorage.getItem('students')) || [];

    
    students.splice(index, 1);

    
    localStorage.setItem('students', JSON.stringify(students));

    
    displayStudents();
}


displayStudents();

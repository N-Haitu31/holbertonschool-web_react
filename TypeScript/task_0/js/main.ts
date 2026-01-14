interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
    location: "San Francisco"
};

const student2: Student = {
    firstName: "Johnnathan",
    lastName: "Bustes",
    age: 24,
    location: "San Francisco"
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");

const thead = document.createElement("thread");
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

studentsList.forEach((student: Student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row)
});

table.appendChild(tbody);

document.body.appendChild(table);

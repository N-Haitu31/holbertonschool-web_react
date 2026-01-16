interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
// Output: "Getting to work"

console.log(executeWork(createEmployee(1000)));
// Output: "Getting to director tasks"

// Tests supplémentaires
const emp1 = createEmployee(150);
console.log(`Employee 1 is a ${isDirector(emp1) ? 'Director' : 'Teacher'}`);
console.log(executeWork(emp1));

const emp2 = createEmployee(2000);
console.log(`Employee 2 is a ${isDirector(emp2) ? 'Director' : 'Teacher'}`);
console.log(executeWork(emp2));

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const employee1 = createEmployee(200);
console.log(employee1.workFromHome());
console.log(employee1.getCoffeeBreak());

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome());
console.log(employee2.getCoffeeBreak());

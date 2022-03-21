class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }


}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year;
    }

    showFullName(midleName) {
        return `${this.name} ${this.surname} ${midleName}`;
    }

    showCourse() {
        const currentCourse = 2022 - Number(this.year);
        if (currentCourse > 0 && currentCourse < 7) {
            return currentCourse;
        }

        return 'This person is\'t studying in our university!';
    }
}
//Task 1
class Student {
    constructor(fullName, direction) {
        this.name = fullName;
        this.direct = direction;
    }

    showFullName() {
        return this.name;
    }

    nameIncludes(data) {
        const splitedName = this.name.split(' ');
        if (splitedName.includes(data)) {
            return true;
        }

        return false;
    }

    static studentBuilder() {
        return new Student('Ihor Kohut', 'qc');
    }

    get direction() {
        return this.direct;
    }

    set direction(value) {
        this.direct = value;
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = new Student.studentBuilder();
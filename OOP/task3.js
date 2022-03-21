class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.name = fullName;
        this.rate = dayRate;
        this.days = workingDays;
    }

    #workExperience = 1.2;

    showSalary() {
        return this.days * this.workingDays;
    }

    showSalaryWithExperience() {
        return (this.days * this.workingDays) * this.#workExperience;
    }

    get experience() {
        return `New Experience: ${this.#workExperience}`;
    }

    set experience(data) {
        this.#workExperience = data;
    }
}

const allWorkers = [];
const worker1 = new Worker("John Johnson", 20, 23);
worker1.workExperience = 1.5;
allWorkers.push({ name: worker1.name, salary: worker1.showSalaryWithExperience });
const worker2 = new Worker("Tom Tomson", 48, 22);
worker2.workExperience = 1.5;
allWorkers.push({ name: worker2.name, salary: worker2.showSalaryWithExperience });
const worker3 = new Worker("Andy Ander", 29, 23);
allWorkers.push({ name: worker3.name, salary: worker3.showSalaryWithExperience });
console.log(allWorkers);

function sortBySalary(allWorkers) {
    return allWorkers.sort((worker1, worker2) => worker1.salary - worker2.salary);
}
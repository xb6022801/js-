class Monkey {
    constructor(gender, id) {
        this.gender = gender
        this.id = id
    }

    get uniqueId() {
      return this.getId()
    }

    getId() {
        return this.gender + '_' + this.id
    }
}

class Person extends Monkey {

}

let newPerson = new Person('male', 344)

console.log(newPerson.uniqueId)
// Code Challenge #!
// class User {
//     constructor({name, surname, email, role}) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.role = role;
//         this.courses = [];
//         this.messagesHistory = [];
//     }
//     addCourse(courseName, level){
//         if (this.courses.some(course => course.title === courseName & course.level === level)){
//             console.log("Duplicate Course. Cannot Add New Course")
//         }
//         else{
//             this.courses.push({title: courseName, level: level})
//         }
//     }
//     removeCourse(courseName){
//         this.courses = this.courses.filter(course => course.title !== courseName)
//     }

//     editCourse(courseName, newLevel){
//         let course = this.courses.find(course => course.title === courseName);
//         if (course){
//             course.level = newLevel;
//         }
//     }
//     sendMessage(receiver, message){
//         if (!this.messagesHistory){
//             this.messagesHistory = [];
//         }
//         this.messagesHistory.push(`->${receiver.email} -> ${this.email}: ${message}`);
//     }
//     showMessagesHistory(){
//         for (const message of this.messagesHistory){
//             console.log(JSON.stringify(message))
//         }
//     }

// }
// let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
// let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
// let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

// student1.addCourse('maths', 2);
// student1.addCourse('physics', 1);
// student1.removeCourse('physics');
// teacher1.addCourse('biology', 3);
// teacher1.editCourse('biology', 4);
// console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
// console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
// teacher1.sendMessage(student1, 'test message');
// teacher1.sendMessage(student1, 'another message');
// teacher1.showMessagesHistory();
// // -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// // -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message

// Code Challenge #2
// class User {
//     constructor({name, surname, email, role}) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.role = role;
//         this.courses = [];
//         this.messagesHistory = [];
//     }
//     addCourse(courseName, level){
//         if (this.courses.some(course => course.title === courseName & course.level === level)){
//             console.log("Duplicate Course. Cannot Add New Course")
//         }
//         else{
//             this.courses.push({title: courseName, level: level})
//         }
//     }
//     removeCourse(courseName){
//         this.courses = this.courses.filter(course => course.title !== courseName)
//     }

//     editCourse(courseName, newLevel){
//         let course = this.courses.find(course => course.title === courseName);
//         if (course){
//             course.level = newLevel;
//         }
//     }
//     sendMessage(receiver, message){
//         if (!this.messagesHistory){
//             this.messagesHistory = [];
//         }
//         this.messagesHistory.push(`->${receiver.email} -> ${this.email}: ${message}`);
//     }
//     showMessagesHistory(){
//         for (const message of this.messagesHistory){
//             console.log(JSON.stringify(message))
//         }
//     }

// }

// class ExtendedUser extends User{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role})
//     }
//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }
//     set fullName(fullName){
//         let name = fullName.split(" ")
//         if (name[0] && name[1]){
//             this.name = name[0];
//             this.surname = name[1]
//         }
//     }
// }

// class Teacher extends ExtendedUser{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role:"Teacher"})
//     }
// }


// class Student extends ExtendedUser{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role:"Student"})
//     }
// }

// let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
// let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
// let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

// student1.addCourse('maths', 2);
// teacher1.addCourse('biology', 3);
// teacher1.editCourse('chemistry', 4);
// console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
// console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses (I think this shoulde be 1 courses 
//                                                                         // since I only added once and edited something unexisting) 
// student1.fullName = 'Rafael Fifer';
// console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses

// Code Challenge #3
// class User {
//     constructor({name, surname, email, role}) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.role = role;
//         this.courses = [];
//         this.messagesHistory = [];
//     }
//     addCourse(courseName, level){
//         if (this.courses.some(course => course.title === courseName & course.level === level)){
//             console.log("Duplicate Course. Cannot Add New Course")
//         }
//         else{
//             this.courses.push({title: courseName, level: level})
//         }
//     }
//     removeCourse(courseName){
//         this.courses = this.courses.filter(course => course.title !== courseName)
//     }

//     editCourse(courseName, newLevel){
//         let course = this.courses.find(course => course.title === courseName);
//         if (course){
//             course.level = newLevel;
//         }
//     }
//     sendMessage(receiver, message){
//         if (!this.messagesHistory){
//             this.messagesHistory = [];
//         }
//         this.messagesHistory.push(`->${receiver.email} -> ${this.email}: ${message}`);
//     }
//     showMessagesHistory(){
//         for (const message of this.messagesHistory){
//             console.log(JSON.stringify(message))
//         }
//     }

// }

// class ExtendedUser extends User{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role})
//     }
//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }
//     set fullName(fullName){
//         let name = fullName.split(" ")
//         if (name[0] && name[1]){
//             this.name = name[0];
//             this.surname = name[1]
//         }
//     }
//     static match(teacher, student, course) {
//         let matched = [];
//         for(let scourse of student.courses) {
//             for(let tcourse of teacher.courses) {
//                 if(scourse.title === tcourse.title && scourse.level <= tcourse.level) {
//                     matched.push(scourse);
//                 }
//             }
//         }
//         if(course) {
//             for(let mcourse of matched) {
//                 if(mcourse.title === course) {
//                     return mcourse;
//                 }
//             }
//             return null;
//         } else
//             return matched;
//     }

// }

// class Teacher extends ExtendedUser{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role:"Teacher"})
//     }
// }


// class Student extends ExtendedUser{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role:"Student"})
//     }
// }



// let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
// let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
// let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

// student1.addCourse('maths', 2);
// student1.addCourse('physics', 4);
// teacher1.addCourse('maths', 4);
// let match = ExtendedUser.match(teacher1, student1);
// console.log(match); // -> [{course: 'maths', level: 2}]
// teacher1.editCourse('maths', 1);
// match = ExtendedUser.match(teacher1, student1);
// console.log(match); // -> []
// teacher1.addCourse('physics', 4);
// match = ExtendedUser.match(teacher1, student1, 'physics');
// console.log(match); // -> {course: 'physics', level: 4}

//Code Challenge #4

// class User {
//     constructor({name, surname, email, role}) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.role = role;
//         this.courses = [];
//         this.messagesHistory = [];
//     }
//     addCourse(courseName, level){
//         if (this.courses.some(course => course.title === courseName & course.level === level)){
//             console.log("Duplicate Course. Cannot Add New Course")
//         }
//         else{
//             this.courses.push({title: courseName, level: level})
//         }
//     }
//     removeCourse(courseName){
//         this.courses = this.courses.filter(course => course.title !== courseName)
//     }

//     editCourse(courseName, newLevel){
//         let course = this.courses.find(course => course.title === courseName);
//         if (course){
//             course.level = newLevel;
//         }
//     }
//     sendMessage(receiver, message){
//         if (!this.messagesHistory){
//             this.messagesHistory = [];
//         }
//         this.messagesHistory.push(`->${receiver.email} -> ${this.email}: ${message}`);
//     }
//     showMessagesHistory(){
//         for (const message of this.messagesHistory){
//             console.log(JSON.stringify(message))
//         }
//     }

// }

// class ExtendedUser extends User{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role})
//     }
//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }
//     set fullName(fullName){
//         let name = fullName.split(" ")
//         if (name[0] && name[1]){
//             this.name = name[0];
//             this.surname = name[1]
//         }
//     }
//     static match(teacher, student, course) {
//         let matched = [];
//         for(let scourse of student.courses) {
//             for(let tcourse of teacher.courses) {
//                 if(scourse.title === tcourse.title && scourse.level <= tcourse.level) {
//                     matched.push(scourse);
//                 }
//             }
//         }
//         if(course) {
//             for(let mcourse of matched) {
//                 if(mcourse.title === course) {
//                     return mcourse;
//                 }
//             }
//             return null;
//         } else
//             return matched;
//     }

// }

// class Teacher extends ExtendedUser{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role:"Teacher"})
//     }
// }


// class Student extends ExtendedUser{
//     constructor({name, surname, email, role}){
//         super({name, surname, email, role:"Student"})
//     }
// }

// class Tutoring {
//     constructor() {
//         this.students = [];
//         this.teachers = [];
//     }

//     getStudentByName(name, surname) {
//         let retVal;
//         for(let student of this.students) {
//             if(student.name === name && student.surname === surname) {
//                 retVal = student;
//             }
//         }
//         return retVal;
//     }

//     getTeacherByName(name, surname) {
//         let retVal;
//         for(let teacher of this.teachers) {
//             if(teacher.name === name && teacher.surname === surname) {
//                 retVal = teacher;
//             }
//         }
//         return retVal;
//     }

//     getStudentsForTeacher(teacher) {
//         let retVal = [];
//         for(let student of this.students) {
//             if(ExtendedUser.match(teacher, student).length) {
//                 retVal.push(student);
//             }
//         }
//         return retVal;
//     }

//     getTeacherForStudent(student) {
//         let retVal = [];
//         for(let teacher of this.teachers) {
//             if(ExtendedUser.match(teacher, student).length) {
//                 retVal.push(teacher);
//             }
//         }
//         return retVal;
//     }

//     addStudent(name, surname, email) {
//         this.students.push(new Student({name, surname, email}));
//     }

//     addTeacher(name, surname, email) {
//         this.teachers.push(new Teacher({name, surname, email}));
//     }
// }

// let tutoring = new Tutoring();
// tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
// tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
// tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
// let student = tutoring.getStudentByName('Rafael', 'Fife');
// student.addCourse('maths', 2);
// student.addCourse('physics', 4);
// let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
// teacher.addCourse('maths', 4);
// let students = tutoring.getTeacherForStudent(student);
// let teachers = tutoring.getStudentsForTeacher(teacher);
// console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
// console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

// student = tutoring.getStudentByName('Kelly', 'Estes');
// students = tutoring.getTeacherForStudent(student);
// teachers = tutoring.getStudentsForTeacher(teacher);
// console.log(students[0]); // -> undefined
// console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

//Code Challenge #5

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messagesHistory = [];
    }
    addCourse(courseName, level){
        if (this.courses.some(course => course.title === courseName & course.level === level)){
            console.log("Duplicate Course. Cannot Add New Course")
        }
        else{
            this.courses.push({title: courseName, level: level})
        }
    }
    removeCourse(courseName){
        this.courses = this.courses.filter(course => course.title !== courseName)
    }

    editCourse(courseName, newLevel){
        let course = this.courses.find(course => course.title === courseName);
        if (course){
            course.level = newLevel;
        }
    }
    sendMessage(receiver, message){
        if (!this.messagesHistory){
            this.messagesHistory = [];
        }
        this.messagesHistory.push(`->${receiver.email} -> ${this.email}: ${message}`);
    }
    showMessagesHistory(){
        for (const message of this.messagesHistory){
            console.log(JSON.stringify(message))
        }
    }

}

class ExtendedUser extends User{
    constructor({name, surname, email, role}){
        super({name, surname, email, role})
    }
    get fullName(){
        return `${this.name} ${this.surname}`
    }
    set fullName(fullName){
        let name = fullName.split(" ")
        if (name[0] && name[1]){
            this.name = name[0];
            this.surname = name[1]
        }
    }
    static match(teacher, student, course) {
        let matched = [];
        for(let scourse of student.courses) {
            for(let tcourse of teacher.courses) {
                if(scourse.title === tcourse.title && scourse.level <= tcourse.level) {
                    matched.push(scourse);
                }
            }
        }
        if(course) {
            for(let mcourse of matched) {
                if(mcourse.title === course) {
                    return mcourse;
                }
            }
            return null;
        } else
            return matched;
    }

}

class Teacher extends ExtendedUser{
    constructor({name, surname, email, role}){
        super({name, surname, email, role:"Teacher"})
    }
}


class Student extends ExtendedUser{
    constructor({name, surname, email, role}){
        super({name, surname, email, role:"Student"})
    }
}

class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        let retVal;
        for(let student of this.students) {
            if(student.name === name && student.surname === surname) {
                retVal = student;
            }
        }
        return retVal;
    }

    getTeacherByName(name, surname) {
        let retVal;
        for(let teacher of this.teachers) {
            if(teacher.name === name && teacher.surname === surname) {
                retVal = teacher;
            }
        }
        return retVal;
    }

    getStudentsForTeacher(teacher) {
        let retVal = [];
        for(let student of this.students) {
            if(ExtendedUser.match(teacher, student).length) {
                retVal.push(student);
            }
        }
        return retVal;
    }

    getTeacherForStudent(student) {
        let retVal = [];
        for(let teacher of this.teachers) {
            if(ExtendedUser.match(teacher, student).length) {
                retVal.push(teacher);
            }
        }
        return retVal;
    }

    addStudent(name, surname, email) {
        this.students.push(new Student({name, surname, email}));
    }

    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({name, surname, email}));
    }
}

class ExtendedTutoring extends Tutoring {
    constructor() {
        super();
    }

    sendMessages(from, to = [], message) {
        if(from && to.length) {
            for(let target of to) {
                target.sendMessage(from, message);
            }
        }
    }
}

let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message

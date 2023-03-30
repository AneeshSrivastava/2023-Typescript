"use strict";
const heros = ["ironman", "spoderman", "black widow"];
heros.map((heros) => {
    console.log(`Hero is ${heros}`);
});
heros.map(heros => {
    console.log(heros.toUpperCase());
});
console.log(heros);
function getUserCourse(name, isPaid) {
    if (name === 'Aneesh' && isPaid)
        return { courseId: 1, courseName: 'typeMaster101' };
    else
        return { courseId: 2, courseName: 'typeMaster102' };
}
console.log(getUserCourse('User', true));
//# sourceMappingURL=main.js.map
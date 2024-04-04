const { fakerDE } = require('@faker-js/faker');
for (let i = 0; i < 10; i++) {
    const { name: plane, iataTypeCode: code } = fakerDE.airline.airplane();
    console.log(plane, code);
    // console.log(fakerDE.airline.airplane().name);
}

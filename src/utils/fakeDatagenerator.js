const fs = require('fs');
const faker = require('faker');

const createUser = () => {
  return faker.fake(
    '{{name.findName}}, {{internet.email}}, "{{company.companyName}}", Cert III in {{name.jobTitle}}\n'
  );
};

const createUsers = (numUsers = 5) => {
  let usersCSV = 'name,email,company,Cert\n';
  for (let index = 0; index < numUsers; index++) {
    const user = createUser();
    usersCSV = usersCSV.concat(user);
  }
  return usersCSV;
};

const fileContent = createUsers(5);

const filepath = 'fakeData.csv';

fs.writeFile(filepath, fileContent, err => {
  if (err) throw err;

  console.log('The file was succesfully saved!');
});

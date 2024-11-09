const db = require('./models');

db.User.findAll().then(users => {
  console.log("Users in the database:");
  users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
  });
}).catch(err => {
  console.error("Error fetching users:", err);
});

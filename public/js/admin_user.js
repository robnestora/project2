$(document).ready(function() {
  // This function grabs users from the database and updates the view
  console.log("get Users ***");

  var users = [];

  function getUsers() {
    $.get("/api/drivers", function(data) {
      console.log("Users", data);
      users = data;
      initializeRows();
    });
  }

  function initializeRows() {
    console.log("initializeRow...");
    // blogContainer.empty();
    // var postsToAdd = [];
    for (var i = 0; i < users.length; i++) {
      //   postsToAdd.push(createNewRow(posts[i]));
      console.log(users[i]);
    }
    // blogContainer.append(postsToAdd);
  }

  // Getting the initial list of users
  getUsers();
});

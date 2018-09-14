document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getQuestions').addEventListener('click', getQuestions);


function getText(){
    // fetch('sandbox.txt')
    // .then(function(respo){
    //     return respo.text();

    // })
    // .then(function(data){
    //     console.log(data);
    // })

    // use arrow function
    fetch('sandbox.txt')
    .then((respo) => respo.text())
    // you got the data play with it now 
    // .then((data) => console.log(data))
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    // catch some errors
    .catch((err) => console.log(err))
}

function getUsers(){
    // fetch the users
    fetch('users.json')
    .then((result) => result.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output += `
                <ul>
                    <li>Username: ${user.username}</li>
                    <li>Email: ${user.email}</li>
                    <li>Password: ${user.password}</li>
                    <li>Confirm Password: ${user.confirm_password}</li>
                </ul>
            
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

// https://gtsofastackoverflowlite.herokuapp.com/api/v2/questions

function getQuestions(){
    // fetch the users
    fetch('https://gtsofastackoverflowlite.herokuapp.com/api/v2/questions')
    .then((result) => result.json())
    .then((data) => {
        let output = '<h2>Questions</h2>';
        data.forEach(function(question){
            output += `
                <div>
                    <h3>${question.question_title}</h3>
                    <p>${question.question_desc}</p>
                </div>
            
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

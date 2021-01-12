function signfu() {

    axios({
        method: 'post',
        url: 'http://localhost:5000/login',
        data: {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            nationality : document.getElementById("nationality").value,
            password : document.getElementById("password").value
          
        }
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          })
        })

    return false;

}


function login() {


    axios({
        method: 'post',
        url: 'http://localhost:5000/login',
        data: {
            email : document.getElementById("uEmail").value,
            password : document.getElementById("uPassword").value
        },
        transformRequest: [(data, headers) => {
          // transform the data
      
          return data;
        }]
      });
      
      // send the request
      axios(options);

    return false;
}






















    // let Emails = document.getElementById("uEmail").value;
    // let Passwords = document.getElementById("uPassword").value;
    // let user1 = {
    //     email: Emails,
    //     password: Passwords
    // }
    // const Http = new XMLHttpRequest();
    
    // Http.open("POST", url);
    // Http.setRequestHeader("Content-Type", "application/json");

    // Http.send(JSON.stringify(user1));
    // document.getElementById('uEmail').value = ""
    // document.getElementById('uPassword').value = ""
    // Http.onreadystatechange = () => {
    //     document.getElementById("container").innerText = Http.responseText;
    // }
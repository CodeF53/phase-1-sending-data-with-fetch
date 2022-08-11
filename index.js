function text_element(string) {
    var paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(string));
    return paragraph;
}

function submitData(user_name, user_email) {
    const data = JSON.stringify({
        name: user_name,
        email: user_email
    })

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: data
    }

    fetch("http://localhost:3000/users", configurationObject).then(
        function (response) {
            return response.json();
        }).then(function(something) {
            document.body.innerHTML = something.id
        }).catch(function(error) {
            document.body.innerHTML = error.message
        })
}
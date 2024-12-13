function submitData(name, email) {
    
    const userData = {
        name: name,
        email: email
    };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
    
        return response.json();
    })
    .then(data => {
        // Append new id to DOM
        const body = document.querySelector("body");
        const newIdElement = document.createElement("p");
        newIdElement.textContent = `New user ID: ${data.id}`;
        body.appendChild(newIdElement);
    })
    .catch(error => {
        // Add the error message to the DOM
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
    });
}


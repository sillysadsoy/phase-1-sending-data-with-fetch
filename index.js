function submitData(nameData, emailData) {
      return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: nameData,
            email: emailData
        })
      })
      .then(resp => resp.json())
      .then(respObj => {
          const body = document.querySelector('body');
          const newEl = document.createElement('p');
          newEl.textContent = respObj.id;
          body.appendChild(newEl);
      })
      .catch(error => {
          const body = document.querySelector('body');
          const newErr = document.createElement('h1');
          newErr.textContent = error.message;
          body.appendChild(newErr);

      })
  } 

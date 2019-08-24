axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function(response) {
        // handle success
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {

            let contacts = response.data[i];

            // if (contacts.numbUnread == 0) {
            //     document.querySelector(".unread").style = "display: block;"
            // }

            document.querySelector("ul").innerHTML +=
                `
        <li>
            <div class="Dp">
                <img src="${contacts.profilePic}" alt="">
            </div>
            <div class="main">
                <div class="head">
                    <span class="name">${contacts.name}</span>
                    <span class="time">${contacts.time}</span>
                </div>
                <div class="para">
                    <span class="last">${contacts.firstLine}</span>
                    <span class="unread" style="">${contacts.numbUnread}</span>
                </div>
            </div>
        </li>
        `

            if (contacts.numbUnread == 0) {
                document.querySelector(".unread").style = "display: none";
            }
        }


    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });
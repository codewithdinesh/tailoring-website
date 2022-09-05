import React from 'react'

export const DeleteProfile = () => {

    const onDelete = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/x-www-form-urlencoded"
        }

        let bodyContent = "pass=4545";

        let response = await fetch("http://localhost:5000/profile/delete", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);

    }
    

    return (
        <div>DeleteProfile</div>
    )
}

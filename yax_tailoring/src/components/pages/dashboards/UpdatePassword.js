import React, { useState } from 'react'

export const UpdatePassword = () => {

    const [newPass, setNewPass] = useState("");
    const [oldPass, setOldPass] = useState("");

    const onChangeNewPass = (e) => {
        setNewPass(e.target.value);
    }

    const onChangeOldPass = (e) => {
        setOldPass(e.target.value);
    }

    const validateInputs = () => {
        if (oldPass === "" || oldPass === undefined) {
            alert("Please enter Your Old/Previus Password");
        }
        else if (newPass === "" || newPass === undefined) {
            alert("Please Enter New Password");
        }
        else {

            // make request
            onUpdate();
        }
    }

    const onUpdateClick = () => {

    }

    // Onupdate API request
    const onUpdate = async () => {
        // Toked ID from cookie

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }

        let bodyContent = `oldPass=${oldPass}&newPass=${newPass}`;

        let response = await fetch("http://localhost:5000/profile/edit/password", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        console.log(data);
    }


    return (
        <div className="container mt-2 mb-2 edit-profile" style={{ backgroundColor: "#fff" }}>


        </div>
    )
}

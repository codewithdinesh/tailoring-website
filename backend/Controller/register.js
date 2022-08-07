const register = (req, res) => {

    var email = req.body.email;
    var pass = req.body.pass;
    var retype_pass = req.body.retype_pass;
    var username = req.body.username;
    var name = req.body.name;
    var dob = req.body.dob;
    var gender = req.body.gender;


    const currentDate = new Date().getTime();
    const timestamp = new Date(currentDate);

    /* Check email enterred or not */
    if (!email) {
        return res.status(400).send(JSON.stringify({ "message": "Email is Required", "status": 400, "ResponseCreated": timestamp }));

    }

    /* Check password is enterred or not */
    if (!pass) {
        return res.status(400).send(JSON.stringify({ "message": "Password is Required", "status": 400, "ResponseCreated": timestamp }));

    }

    /* Check retype_pass */
    if (!retype_pass) {
        return res.status(400).send(JSON.stringify({ "message": "Retype Password  Required", "status": 400, "ResponseCreated": timestamp }));

    }

    /* Check username is enterred or not */
    if (!username) {
        return res.status(400).send(JSON.stringify({ "message": "username is Required", "status": 400, "ResponseCreated": timestamp }));

    }

    /* Check DOB  */
    if (!dob) {
        return res.status(400).send(JSON.stringify({ "message": "DOB is Required", "status": 400, "ResponseCreated": timestamp }));

    }

    /* check name */
    if (!name) {
        return res.status(400).send(JSON.stringify({ "message": "Name is Required", "status": 400, "ResponseCreated": timestamp }));

    }


    res.send("Register page");
}

module.exports = register;
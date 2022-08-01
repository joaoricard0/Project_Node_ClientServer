module.exports = {

    user:(app, req, res) => {

        req.assert('_name', 'Invalid name!').notEmpty();
        req.assert('_email', 'Invalid email!').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;
        }
    }
}
module.exports = {
    upload: function(req, res) {
        var fs = require('fs');

        req.file('avatar').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
            // don't allow the total upload size to exceed ~10MB
            maxBytes: 10000000
        }, function whenDone(err, uploadedFiles) {
            if (err) {
                return res.negotiate(err);
            }

            // If no files were uploaded, respond with an error.
            if (uploadedFiles.length === 0) {
                return res.badRequest('No file was uploaded');
            }

            return res.json({
                avatar: base64_encode(uploadedFiles[0].fd),
                url: require('path').basename(uploadedFiles[0].fd)
            })
        });


        // function to encode file data to base64 encoded string
        function base64_encode(file) {
            // read binary data
            var bitmap = fs.readFileSync(file);
            // convert binary data to base64 encoded string
            return new Buffer(bitmap).toString('base64');
        }
    }
}
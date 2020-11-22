var multer = require('multer');
var path = require('path');

let reqPath = path.join(__dirname, '../');//It goes one directories back from given __dirname.

var storage = multer.diskStorage({

    destination: reqPath + 'fileuploaddestination',
    
    // change name of file to original subtitle folder name
    filename: function (req, file, cb) {
      cb(null, "Mazhar's files");
    }
  });

var upload = multer({ storage: storage });


module.exports = upload;
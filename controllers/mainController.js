var multer  = require('multer');

// decides where and how file will be saved, refer multer npm docs for more info
var storage = multer.diskStorage({
    destination: './fileuploaddestination',
    // change name of file to original subtitle folder name
    filename: function (req, file, cb) {
      cb(null, "Mazhar's files");
    }
  });

var upload = multer({ storage: storage });

module.exports = function(app){

    app.get('/',(req,res) => {

        console.log("All is well!\n");

        res.render('index');
    
    });

    app.post('/fileupload',upload.single('fileupload'),(req,res) => {

        console.log(req.file);
        res.end('<h1>File Milgaya bhai</h1>');

    });

};
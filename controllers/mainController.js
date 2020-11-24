// defines upload path for multer as ./fileuploaddestination
const multerVariables = require('../config/multerconfig');

//function that censors and replaces uploaded file
var censor = require('../config/censor');

// file information to be updated later
var fileName = 'your-censored-file';
var filePath;

module.exports = function(app){

    app.get('/',(req,res) => {

        res.render('index');
    
    });

    app.post('/filedownload',multerVariables.upload.single('filedownload'),(req,res) => {

      filePath = multerVariables.uploadLocation + '/' + fileName;
        
      res.render('download-page',{originalfilename: req.file.originalname});

  });

  app.get('/download',(req,res) => {

    censor(filePath);

    res.download(filePath,fileName, (err) => {

      if(err)
        console.log(err);

    });

  });

};
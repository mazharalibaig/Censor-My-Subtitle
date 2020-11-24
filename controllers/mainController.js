// defines upload path for multer as ./fileuploaddestination
const multerVariables = require('../config/multerconfig');

module.exports = function(app){

    app.get('/',(req,res) => {

        console.log("All is well!\n");

        res.render('index');
    
    });

    app.post('/filedownload',multerVariables.upload.single('filedownload'),(req,res) => {

      console.log(req.file);
        
        res.render('download-page');

  });

  app.get('/download',(req,res) => {

      var filePath = multerVariables.uploadLocation + "/Mazhar's files";

      var fileName = "xyz";

    res.download(filePath,fileName, (err) => {

      if(err)
        console.log(err);

    });

  });

};
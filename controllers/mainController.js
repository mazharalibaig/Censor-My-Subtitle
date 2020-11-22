// defines upload path for multer as ./fileuploaddestination
var upload = require('../config/multerconfig');

module.exports = function(app){

    app.get('/',(req,res) => {

        console.log("All is well!\n");

        res.render('index');
    
    });

    app.post('/filedownload',upload.single('filedownload'),(req,res) => {

      console.log(req.file);
      
      //Let's try to alter file after uploading is done

      

      
      res.render('download-page');

  });

};
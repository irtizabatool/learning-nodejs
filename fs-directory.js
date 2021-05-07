const fs = require('fs');

fs.mkdir('learn', (err) => {
  if (err)
    console.log(err);
  else {
    fs.writeFile('./learn/file-in-folder.txt', '1235645852',(err) => {
      if (err)
        console.log(err);
      else
        console.log('successfully created the file');
    });
  }
});

fs.unlink('./learn/file-in-folder.txt', (err) => {
  if (err)
    console.log(err);
  else{
    console.log('successfully deleted the file');
    fs.rmdir('learn', (err) => {
      if (err)
        console.log(err);
      else
        console.log('successfully deleted the directory');
    });
  }
});

fs.readdir('learn', (err, files) => {
  if (err)
    console.log(err);
  else{
    console.log(files);
    for (let file of files) {
      fs.unlink(`./learn/${file}`, (err) => {
        if(err) 
          console.log(err);
        else {
          console.log('All files deleted');
        }
      })
    }
  }
});
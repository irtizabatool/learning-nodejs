const fs = require('fs');

fs.writeFile('example.txt', 'this is a filesystem example', (err) => {
  if (err)
    console.log(err);
  else{
    console.log('File Successfully created');
    fs.readFile('example.txt', 'utf8', (err, file) => {
        if(err)
            console.log(err);
        else
            console.log(file);
    })
   }
});

fs.rename('example.txt', 'renamedFile.txt', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully renamed the file');
});

fs.appendFile('renamedFile.txt', ' Some data being appended', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully appended data to the file');
});

fs.unlink('renamedFile.txt', (err) => {
    if(err)
        console.log(err);
    else
        console.log('Successfully deleted the file');
});
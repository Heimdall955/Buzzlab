const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://storage.googleapis.com/aida-uploads/default/20260409-064135-181.jpeg';
const dest = path.join(__dirname, 'public', 'logo.jpeg');

if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
}

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Image downloaded successfully');
    });
  } else {
    console.error(`Failed to download image: ${res.statusCode}`);
  }
}).on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

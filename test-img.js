const https = require('https');

https.get('https://images.pexels.com/photos/33152/pexels-photo-33152.jpeg', (res) => {
  console.log('Status Base:', res.statusCode);
});
https.get('https://images.unsplash.com/photo-1555626906-f410d4654536', (res) => {
  console.log('Status Unsplash:', res.statusCode);
});

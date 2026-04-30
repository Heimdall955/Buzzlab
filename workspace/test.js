const https = require('https');
const tests = [
  'https://images.unsplash.com/photo-1587049352851-8d4e891347d4',
  'https://images.unsplash.com/photo-1587049352847-4d45eb708703',
  'https://images.unsplash.com/photo-1558227691-41ea78d1f631',
  'https://images.unsplash.com/photo-1588666308064-9ed3287042a9',
  'https://images.unsplash.com/photo-1621251915995-1f9518ae3836',
  'https://plus.unsplash.com/premium_photo-1663852297120-d636c2e783ff'
];

tests.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  });
});

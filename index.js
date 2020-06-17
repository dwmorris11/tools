const axios = require('axios');
const fs = require('fs');

const request = axios.create({
  baseURL: 'https://picsum.photos',
  timeout: 5000,
  responseType: 'stream'
});

var getImages = function (index) {
    request.get('/720/480')
    .then((response)=> {
      response.data.pipe(fs.createWriteStream(`./images/${index}.jpg`))
    })
    .catch((error)=> {
      console.log('error writing image:', 1, '   error: ', error);
    })
    .finally(
      ()=>console.log('done')
    );
};

for(let i = 1; i < 101; i++) {
  setTimeout(() => {
    getImages(i);
  }, 5000);
}



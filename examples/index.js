//const google = require('../lib');
const fs = require('fs');
const googleIt = require('google-it');

async function start() {
  // A simple search
  /*const res = await google.search('Food banks Seattle', {
    page: 0,
    safe: false,
    additional_params: {
      hl: 'en'
    }
  });*/
  const results = await googleIt({ query: 'free food in Seattle 2023', limit: 10 });
  //console.info('Search Results:', res);
  
  // Image Search
  //const images = await google.image('The Wolf Among Us', { safe: false });
  //console.info('Image Search:', images); 
 
  // Reverse Image Search
  //const reverse = await google.search('https://i.pinimg.com/236x/92/16/d9/9216d9a222ef65eb6eabfff1970180d1.jpg', { ris: true });
  //console.info('Reverse Image Search:', reverse.results);
   
  //const news = await google.getTopNews();
  //console.info('Google Top News:', news);
  // Write the search results to a JSON file
  fs.writeFile('search_results.json', JSON.stringify(results), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Search results saved to search_results.json');
    }
  });
}

start();
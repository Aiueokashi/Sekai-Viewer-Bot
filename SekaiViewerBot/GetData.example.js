

// const https = require('https');
// var request = require('request');
// const crypto = require('crypto');
// const Nightmare = require('nightmare');
// const chai = require('chai');
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const expect = chai.expect;

//   var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://sekai-world.github.io/sekai-viewer/#');
// xhr.send();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
// 	    console.log(xhr.responseText);

//     }
// };

const axios = require('axios');
axios.get("https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/master/musics.json")
  .then(res => res.data) // json content
  
  //thank you
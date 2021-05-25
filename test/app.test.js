//import app from "../app"

const app = require('../app');
const { expect } = require('chai');
//let request = require('request');


describe("Server status and API fetch", () => {
  
    it('fetch correct data', () => {
        let term = 'jack+johnson'
        let option = 'music'
        fetch(`https://itunes.apple.com/search?term=${term}&media=${option}`, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
        });

    })
    
})


/*it('status', function(completed) {
    fetch('http://localhost:9000/', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        completed();
    })
}) */
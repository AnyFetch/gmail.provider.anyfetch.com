'use strict';

var should = require('should');
var config = require('../config/configuration.js');
var retrieve = require('../lib/helpers/retrieve.js');

describe("Retrieve code", function () {
  it("should get all mails", function (done) {
    var mails = [];
    retrieve(config.test_refresh_token, config.test_account, 1, function(mail) {
      mails.push(mail);
    },function (err, lastUid) {
      if(err) {
        throw err;
      }
      should.exist(mails[0]);

      console.log("Length of the mails : ", mails.length);
      mails.length.should.have.above(9);

      done();
    });
  });

  it("should list mails modified after specified uid", function (done) {
    var mails = [];

    retrieve(config.test_refresh_token, config.test_account, 4, function(mail) {
      mails.push(mail);
    }, function (err) {
      if(err) {
        throw err;
      }
      console.log("Length of the mails : ", mails.length);
      mails.length.should.have.above(6);
      done();
    });
  });
});

'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    simplemocha: {
      backend: {
        src: 'test/*.js'
      }
    }
  });
  // grunt default task
  grunt.registerTask('default', ['simplemocha']);
}
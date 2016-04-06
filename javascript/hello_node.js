#!/usr/local/bin/node

var http = require( "http" );
http.createServer( function ( request, response ) {
  response.writeHeader( 200, {
    "Content-Type": "text/html"
  } );
  response.write( "Hello World!" );
  response.end();
} ).listen( 8080 ); // Activates this server, listening on port 8080.

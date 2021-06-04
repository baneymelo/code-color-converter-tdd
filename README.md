

# TDD with Node.js

## User Stories

### Describing the Color Converter

#### As a user, I can convert a specific color to RGB/HEX to HEX/RGB.

##### RGB to HEX conversion

* Happy path: successfully conversion
&ensp;Given: user request to GET /RGB
&ensp;When: user send RGB color format <code>/25500</code>
&ensp;Then: user should receive a HEX color format <code>{ hex: FF0000 }</code>
&ensp;
* Invalid color format
&ensp;Given: user request to GET /RGB
&ensp;When: user send invalid RGB color format <code>/25500x</code>
&ensp;Then: user should see an error message with "invalid format" 
&ensp;

##### HEX to RGB conversion

* Happy path: successfully conversion
&ensp;Given: user request to GET /HEX
&ensp;When: user send HEX color format <code>/FF0000</code>
&ensp;Then: user should receive a RGB color format <code>{ rgb: 25500 }</code>
&ensp;
* Invalid color format
&ensp;Given: user request to GET /HEX
&ensp;When: user send invalid HEX color format <code>/FF0000x</code>
&ensp;Then: user should see an error message with "invalid format"
&ensp;


## Technologies

- Node >=10
- Testing framework (jest, mocha, enzyme, etc..)


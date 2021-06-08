

# TDD with Node.js

## User Stories

### Describing the Color Converter

#### As a user, I can convert a specific color to RGB/HEX to HEX/RGB.

##### RGB to HEX conversion

* Happy path: successfully conversion
    Given: user request to GET /RGB
    When: user send RGB color format <code>/25500</code>
    Then: user should receive a HEX color format <code>{ hex: FF0000 }</code>

* Invalid color format
    Given: user request to GET /RGB
    When: user send invalid RGB color format <code>/25500x</code>
    Then: user should see an error message with "invalid format" 


##### HEX to RGB conversion

* Happy path: successfully conversion
    Given: user request to GET /HEX
    When: user send HEX color format <code>/FF0000</code>
    Then: user should receive a RGB color format <code>{ rgb: 25500 }</code>

* Invalid color format
    Given: user request to GET /HEX
    When: user send invalid HEX color format <code>/FF0000x</code>
    Then: user should see an error message with "invalid format"


### To keep in mind

RGB range `[0, 255]`
> 0, 0, 0 -> Min value
> 255, 255, 255 -> Max value

HEX range `[0, 15]` from 10 to 15 is replaced by A to F
> #000000 -> Max value

## Technologies

- Node >=10
- Testing framework (jest, mocha, enzyme, etc..)


# Tap Dance

### by Marguerite Kennedy
#### July 5 (phase 1) and July 13 (phase 2), 2019

A simple bar supply management app with (separate) functionality for both bar patrons and managers. First part of a two-week independent project using React skills.

## App Objectives

_Patron/Client Functionality_
* Can see a list of all beers currently offered by the brewery
* Beer descriptors include type, brand, price, and ABV (alcohol by volume)
* Real-time updates as availability changes (i.e., if a beer is out of stock)

_Bartender/Manager Functionality_

* Have "admin" capability to track and manage sales
* Form for adding a newly tapped keg
* Option to edit a keg's properties
* "Sell pint" button--simple mechanism to decrease number of pints remaining when one is sold
* Kegs with less than 10 pints left are highlighted.

_All users_
* Can see many pints left in a keg (124 pints when full).

## Component Trees

Component tree for the first phase of the project: 
https://github.com/Kennedy777/TapRoom/blob/master/src/assets/Component%20Tree%20Phase%201.JP

Revised component tree; YELLOW indicates state changes: 
https://github.com/Kennedy777/TapRoom/blob/master/src/assets/ComponentTreePhase2.jpg

## Setup Instructions

Clone the repository:
```
$ git clone https://github.com/Kennedy777/TapRoom
```

Install NPM packages.
```
$ npm install
```

## MIT Licence

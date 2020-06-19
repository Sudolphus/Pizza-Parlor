# _Pizza Parlor_

#### _An App for ordering Pizza, 06.19.2020_

#### By _**Micheal Hansen**_

## Description

_An app for the ordering of pizza. Demonstrates object-oriented javascript by allowing the ordering of pizza and keeping track of topics._

## Specifications

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program can gather user inputs** | User input: Clicks 'small', 'pepperoni' | Output: size = 'small', toppings = 'pepperoni' |
| **Program creates a 'Pizza' object with size** | User input: Clicks "New Pizza" | Output: Pizza = {size = 'small'} |
| **User can add Toppings to the Pizza** | User input: Checks 'Pepperoni' | Output: Pizza = {size = 'small', toppings: [Pepperoni]} |
| **Program can calculate price when Pizza is confirmed** | User input: Clicks Add Toppings | Output: Pizza = {size = 'small', toppings: [Pepperoni]} => price: 8.25 |
| **Program shows user their order and their price** | User input: Clicks Add Toppings | Output: 'Pizza with pepperoni, price: $8.25' |
| **Program allows user to confirm or delete their pizza** | User input: Clicks Add Toppings | Output: button with confirm or delete appears |
| **Program assigns unique ID to each pizza if confirmed** | User input: Clicks confirm | Output: Pizza = {size = 'small', toppings: [Pepperoni], ID: 1} |
| **Program adds Pizza to Order object if confirmed** | User input: Clicks confirm | Output: Order = {pizzas=[{size = 'small', toppings: [Pepperoni], ID: 1}] |
| **Program resets Pizza and Pizza form if discarded** | User input: Clicks delete | Output: Pizza = {} |
| **Program displays confirmed Pizzas and displays Price** | User input: Clicks confirm | Output: Your Order: Total Price: $8.25, Small Pizza with Pepperoni, price $8.25" |
| **Program can delete pizzas from order** | User input: Clicks delete pizza | Output: Order = {pizzas = []} |
| **Program updates order display when a pizza is deleted** | User input: Clicks delete pizza | Output: Your Order: Total Price: $0.00 |


## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/Sudolphus/Pizza-Parlor`
2. Navigate into the `Pizza-Parlor` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

## Known Bugs

_Might be a little hard to see_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_

### License

MIT License.

Copyright (c) 2020 **_Micheal Hansen_**

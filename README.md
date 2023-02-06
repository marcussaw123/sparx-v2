# Sparx Maths Bookwork Automation

This project automates the process of saving bookwork codes each time a student answers a question in Sparx Maths.

## Getting Started

These instructions will help you set up the project and start using it.

### Prerequisites

You will need to have the following installed on your computer:

- Node.js
- NPM
- Puppeteer

### Installing

Clone the repository to your local machine.

```bash
git clone https://github.com/marcussaw123/sparx-v2.git
```
Navigate to the project directory.
```bash
cd sparx-v2
```
Install the necessary dependencies.
```bash
npm install
```
### Configuring the Project
Locate the file example.env you should find the following:
```
password=pass
username=username
url=sparx school url
```
Change the values above to your own username, password and school url. Save the file as .env.

### Running the Project
To start the project, run the following command.
```bash
node index.js
```
### How it works
The project uses Puppeteer to automate the process of saving bookwork codes each time a student answers a question. When a question is answered, the code takes a screenshot of the question and the answer and saves it to the `bookwork-codes` folder in the main directory. This eliminates the need for students to manually record the bookwork codes in their books, as the code does it automatically. The advantage of using JavaScript and Puppeteer is that the code is able to save the bookwork codes from any type of question, as long as it is presented on the screen.
## Built With

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Acknowledgements

This project is inspired by [Gwyd0's Sparx-bwk project on GitHub](https://github.com/Gwyd0/Sparx-bwk). Thank you Gwyd0 for the inspiration!
## Sample Images
![Sample Image 1](https://cdn.discordapp.com/attachments/1038808693548011613/1072094700745535509/Bookwork_code_M38.png)
![Sample Image 2](https://cdn.discordapp.com/attachments/1038808693548011613/1072094701148196894/Bookwork_code_N48.png)
![Sample Image 3](https://cdn.discordapp.com/attachments/1038808693548011613/1072094700103807027/Bookwork_code_K18.png)
![Sample Image 4](https://cdn.discordapp.com/attachments/1038808693548011613/1072094702255493200/Bookwork_code_Q77.png)
![Sample Image 5](https://cdn.discordapp.com/attachments/1038808693548011613/1072094702515523725/Bookwork_code_R78.png)
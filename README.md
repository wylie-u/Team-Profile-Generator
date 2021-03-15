# Team-Profile-Generator


# Description

The Team Profile Generator is a command-line-input application run in Node that requests information from the user about various team members and generates an HTML file displaying that information. Before running the applicaion, the user must install all required dependencies and run various tests to ensure the program runs successfully. This project features styling through Bootstrap. 

Upon launching the application, the user is asked for information about the team manager. The user will then enter the manager's name, ID, and email address. Once the user has declared a team manager, they will then be asked if they would like to enter another team member, either an engineer or intern. If 'Engineer' is selected, the user will enter the same inputs as manager, but will be prompted for an additional input, which will be their github user name. If 'Intern' is selected, the user will follow the same prompts, with the additional one being their school name. The manager will have an additional prompt as well, which will be their office phone number. After finalizing a new team member, the user will be prompted to add an additional or select done. If done, an HTML file is created with cards displaying the information on all the team members entered by the user in the "dist" folder titled "fullteam.html."



## Table of Contents
 * [User Story](#User-Story)
 * [Building Tools](#Building-Tools) 
 * [Credits](#Credits)
 * [Demo](#Demo)




## User Story
<pre><code>AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
</code></pre>

## Building Tools 

 * HTML, CSS
 * Javascript and jQuery
 * Bootstrap
 * Node.js


## Credits
1. https://getbootstrap.com/
2. https://www.w3schools.com
3. https://www.npmjs.com/package/inquirer

## Demo

![Demo](https://drive.google.com/file/d/1s-I6YL0zfBCCHlkh7p4BuEWcvevmDkGl/view)


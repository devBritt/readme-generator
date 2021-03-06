# README Generator

The README Generator is a CLI app that can be used to create professional READMEs for open source projects.

## Project Requirements

**User Story**  
AS A developer  
I WANT a README generator  
SO THAT I can quickly create a professional README for a new project.

**Acceptance Criteria**  
GIVEN a command-line application that accepts user input:  
WHEN I am prompetd for information about my application repository, a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
WHEN I enter my project title, it is displayed as the title of the README  
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, this info will be added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  
WHEN I choose a license for my application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section titled License that explains which license the application is covered under  
WHEN I enter my GitHub username and email address, this info is added to the section of the README titled Questions, with a link to my GitHub profile and instructions on how to reach me with additional questions  
WHEN I clicked on the links in the Table of Contents, I am taken to the corresponding section of the README

## Demo

[Demo Video](https://drive.google.com/file/d/1zI8WdIH5bhMzyogSXWD7A2wzjx_-CMn8/view?usp=sharing)

## Lessons Learned

This project was an interesting break from previous challenges as it was the first to focus on the backend rather than the frontend. It was the first opportunity to use Node.js and allowed me to practice prompting users for input, collecting that input, and using it in a meaningful way, as well as writing to a file using the file system. The most interesting part for me was working with teplate literals and generating the text that would be written to a file.

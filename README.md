Isla Tours PH
A responsive 5-page website for a fictional Philippine island tour company, built with HTML, CSS, and vanilla JavaScript.
No frameworks, build tools, or dependencies required.
Preview
Open index.html in any browser to view the website.
Pages
Page	File	Description
Home	index.html	Hero slideshow, featured destinations, company stats, and traveler testimonials
Destinations	destinations.html	Featured Philippine destinations including El Nido, Siargao, Bohol, Boracay, Banaue, and Cebu
Tour Packages	tours.html	Filterable tour packages with pricing and FAQ accordion
About Us	about.html	Company story, values, and team profiles
Contact	contact.html	Trip inquiry form with client-side validation and contact details
Project Structure
isla-tours-ph/
├── index.html
├── destinations.html
├── tours.html
├── about.html
├── contact.html
├── style.css
└── script.js
Features
Design
•	Custom ocean and sunset-inspired color palette
•	Deep teal, lagoon, sunset gold, and coral accents
•	Warm sand background
•	Fraunces and Work Sans typography
•	Fully responsive layout
•	Mobile navigation menu
•	Responsive card layouts
JavaScript
•	Mobile hamburger menu
•	Active navigation link detection
•	Auto-rotating hero image slideshow
•	Filterable tour packages
•	FAQ accordion
•	Contact form validation
•	Inline form error messages
•	Form submission success confirmation
•	Dynamic footer year
Tech Stack
•	HTML5
•	CSS3
o	Custom Properties
o	CSS Grid
o	Flexbox
•	Vanilla JavaScript
•	Google Fonts
o	Fraunces
o	Work Sans
•	Unsplash for placeholder imagery
Getting Started
Clone the repository:
git clone https://github.com/your-username/isla-tours-ph.git
Open the project folder and launch index.html in your browser.
You can also use the VS Code Live Server extension for automatic reloading during development.
No build tools, package managers, or additional dependencies are required.
Customization
Colors and Fonts
Edit the :root variables at the top of style.css.
Tour Packages
Duplicate a .tour-card block in tours.html and update:
•	data-category
•	Images
•	Tour information
•	Pricing
Contact Form
Update the form target in contact.html and script.js if you want to connect the form to a real backend or form service such as Formspree.
Notes
This is a demo and learning project.
The company, team members, and contact details are fictional. Images are sourced from Unsplash and are used for placeholder purposes only.
License
Free to use for learning and portfolio purposes.


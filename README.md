# gulp-set
Here you can see the prepared gulp file and approximate structure of any simple HTML project.
In the gulp file, I use several tools for developing HTML pages. In order to install 
These dev dependencies type this command in your console: npm i.
1) Inside /src/ folder you can find several folders and files. I'll describe every one of them:
  In the _layouts folder, you can open up the main. pug file and see the basic structure of the page, it contains the header, block content, and footer.
  We will extend block content with unique content for every page, but our components header and footer will stay on the page.
2) Inside the _partials folder, you can find two pug files: header and footer. These are components that I described above. The header contains a basic nav-bar with several links for every page.
3) In the sass folder you can see the main file that will be converted by gulp into .min.css file and block folder which contains styles files for header and footer components.
4) Also you can see my example pages for every link in the navbar. The content of every page just extends block content in the main.pug file.
Happy coding!

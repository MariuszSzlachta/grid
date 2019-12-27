# Data tables implementation

## What's going on with this app?

This app is an implementation of data-tables/grid and generates dynamically a table when you provide the data source.
For the demonstration, I have prepared a data source implementing it inside DataProvider. In real-world data source would be much simpler and would be completely prepared on the backend side.

### Functionality
* sorting columns by following orders: NONE, ASCENDING, DESCENDING.
* filtering data using input above the grid. If any of the table cells includes searching text, you will see the entire row as a result.
* pagination with selecting the number of rows displayed on the page.

## How to install and develop the project
1. clone or download project from the repository
2. extract / enter

    a) if you downloaded the project, extract the archive and open terminal inside the unpacked folder.
    
    b) if you cloned repository just open a terminal inside the cloned folder

3. inside terminal type *npm install*
4. when installation required dependencies is completed two options are available for you:

    a) development
    b) build production (explained below)
    
5. If you want to develop type *npm start* inside your terminal, after a while you should see an opened window of your favorite web browser and the app is ready to develop.

## Generating production version of the App and deployment
### Generating production version of the App

1. Perform the operations described in the first three points from the upper section.
2. To generate production version of app, being on top-level od project directory type inside your terminal *npm run build*.
3. When the process completes all generated files needed to run the production version of the application will be generated inside *public* folder.

### Deployment

#### Using ftp-client
You can upload all files from a public folder on your server and the app should be available on www.example-adress.com like a regular website.

#### Using Github Pages (recommended)
Read and follow this brilliant manual
https://pages.github.com/

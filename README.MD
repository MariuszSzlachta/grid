# Data tables implementation

## What's going on with this app?

This app is an implementation of data-tables/grid and generates dynamically a table when you provide data source.
For demonstration I have prepared data source implementing it inside DataProvider. In real world data source would be much simpler and would be completely prepared on backend side.

### Functionality
* sorting columns by following orders: NONE, ASCENDING, DESCENDING.
* filtering data using input above the grid. If any of table cells includes searching text, you will se entire row as a result.
* pagination with selecting number of rows displayed on page.

## How to install and develop project
1. clone or download project from repository
2. extract / enter

    a) if you downloaded project, extract archive and open terminal inside unpacked folder.
    
    b) if you cloned repository just open terminal inside cloned folder

3. inside terminal type *npm install*
4. when installation required dependencies is completed two options are available for you:

    a) development
    b) build production (explained bellow)
    
5. If you want to develop type *npm start* inside your terminal, after a while you should see opened window of your favorite web browser and app is ready to develop.

## Generating production version of the App and deployment
### Generating production version of the App

1. Perform the operations described in the first three points from the upper section.
2. To generate production version of app, being on top level od project directory type inside your terminal *npm run build*.
3. When process completes all generated files needed to run production version of the application will be generated inside *public* folder.

### Deployment

#### Using ftp-client
You can upload all files from public folder on your server and app should be available on www.example-adress.com like regular website.

#### Using github pages (recomended)

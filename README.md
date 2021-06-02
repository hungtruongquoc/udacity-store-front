# Front End Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Dependencies

NodeJS version 12 and up

## Back End API
This app needs a back end API running at `http://localhost:300`. The code of the back end 
can be cloned from [back end repo](https://github.com/hungtruongquoc/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter).

Once the back end is cloned to a local folder, a `.env` file needs to be created at the root folder of the application with following content:
```dotenv
POSTGRES_HOST=
POSTGRES_DB=
POSTGRES_TEST_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
BCRYPT_PASSWORD=
SALT_ROUND=
TOKEN_SECRET=
TEST_ENV=
```

Make sure you create the `POSTGRES_DB` in your local server in advance. With `.env` file is ready, you can start migrate 
the database structure using `npm run migrate` at the root folder (where you can find the `package.json` file). 
After the successful migration, you need to run `npm run data:seed` to add sample products to the database.

Only when you have the sample products inserted, you can start the back end using `npm run start:watch`. 
This command does not require the built Javascript files of the back end to run. 

You should see following output in the console if the back end start properly:

```
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node ./src/server.ts`
starting app on: 0.0.0.0:3000
```

## Development server

Run `npm run start` at the root folder of this repo to start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Application Routes

`http://localhost:4200/products` - List of products. Here you can add product to cart when you select a quantity greater than 0. 
An item can be removed from cart when you select quantity 0 and click the button to add to cart. You should see a toast indicating the cart updated.

When you click on the picture of a product, you are navigated to the product detail page `http://localhost:4200/products/{product_id}`. \
The product image and the cart functionality are also available here. You can go back to the product list using `View our product list` link. 

When you click the Cart icon in the top right corner, you have access to the cart page `http://localhost:4200/cart`. 
The page displays a summary of selected products in the left column and a check out form in the right column.
You need to provide a full name (at least 5 characters), address (at least 10 characters), and card number (with 16 digits) to enable the submit button.
Once the submit button is enabled, the order can be submitted.

Following the submission of the order, the order confirmation is displayed with route `http://localhost:4200/orders`. 
You can navigate to this confirmation page with no order created and see a greeting to instruct you go back the product list.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

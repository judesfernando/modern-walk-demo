## Frontend Assessment - Modern Walk

This a fashion website built with nextjs app with fakestoreapi for data. This web application contains home page & category pages.

### Installing & Running the app
System Requirements : Please refer to this page https://nextjs.org/docs/app/getting-started/installation#system-requirements 

After you download the code to your computer, install dependancies with following command
```bash
npm install
# or
yarn install
```  

Before you run the project, you need to create the .env file to store environment variables for the project. 
Manually create a .env file on the root of the project & add following line to the file.
```
NEXT_PUBLIC_PRODUCT_API_BASE_URL = https://fakestoreapi.com/products
```

To run the project in development mode   
```bash
npm run dev
# or
yarn dev
```  
To run tests in the project
```bash
npm run test
# or
yarn test
```    

## About the project

### 3rd Party libraries, tools used

**Tailwind used for frontend styling and UI**
https://tailwindcss.com/

**For testing** 
Jest testing framework and React testing library used. To run test, run the following command in the terminal
```bash
npm run test
```    
### Features
**Header**
A simple header created to make it easy to navigate from any page back to the homepage

**Category Page**   
Product category page created to view specific category product and for easy discovery of products.

### Technical decision taken to improve the usability, maintainability and extendability

#### Component breakdown structure
A sensible component breakdown structure was followed keeping in mind the atomic design principles and feature based code component isolation & reusability in mind.  

#### Followed SSR and CSR for improved SEO
Followed SSR for pages  where SEO is key and CSR was used mostly for components that was used inside pages.

#### Dynamic Routing
Dynamic routing has been used for category pages for easy extension for wide array of new categories.

#### Use of React Query
React query used for server state management and it gives lot of flexibility and performance benefits for the application. React query placeholder data function  was used to improve the overall user experience in product grids. 

#### Use of Utility functions 
reusable utility functions used wherever possible to improve on the code reusability 

####  Usage of recommended theme overriding
Followed tailwind v4 recommended way of extending features of tailwind and adding new colours to the theme pallet.

####  Accessibility
Followed generic accessibility practices to improve overall accessibility of website by following semantic HTML structure and with screen reader labels (ARIA).

### Other Features

 - Fully responsive
 - Extensible for other features such as Cart, User Login etc.
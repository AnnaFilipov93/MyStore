# Anna's Pet shop project #

This is a react project representing a pet toy shop

- The app uses a list of users from src/Data/users.json file
- The app uses a product list from stc/Data/product.json
- Under public directory is placed an image for the cart icon

Functionalities:
- Users are defined as either customer or admin, admin should be allowed to manipulater the toy list in further development.
- By selecting the toy category drop down menu we can filter out the toys per animal category (currently cat/dog/rodent).
- Search funtionality is also allowed in the search bar.
- login and log out functionality allows the user to connect and add proucts to his cart, once logged out the cart is cleaned.

Components:
- appContext - allows accessing and modifying user list, current user, list of products and cart from global context.
- Basket - represent the cart page.
- Form - represents the login page.
- Contact - represent the data in the footer regarding contancting info of the shop.
- About - represents the about page.
- Footer - represents the footer element at the buttom of the page.
- Home - represents the top part of every page (3 images and links to each category) for easier navigation between categories.
- Main - the main element of every window containing the list of products.
- Navbar - represent the navigation bar at the top of the page - allows filtering of products by category, login, search and navigation in the app.
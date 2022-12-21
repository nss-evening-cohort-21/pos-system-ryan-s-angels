# Hip Hop, Pizza, and Wangs (HHP+W)  [![Netlify Status](https://api.netlify.com/api/v1/badges/b024635e-7214-4d5c-8d3d-57791873c25f/deploy-status)](https://app.netlify.com/sites/chimerical-halva-4319ca/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

This is an application we made for NSS.

[View App](https://chimerical-halva-4319ca.netlify.app)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
```
const getOrderDetails = async (firebaseKey) => {
  const orderObject = await getSingleOrder(firebaseKey);
  const itemsArray = await getOrderItems(firebaseKey);
  return { ...orderObject, itemsArray };
};
```
## About the User <!-- This is a scaled down user persona -->
- The most appropriate user for this application would be a restaurant that needs to keep track of orders placed in-person and over the phone. 
- This user also needs to keep track of items within the order and how much they cost.
- The user will also need an easy way to keep track of the money and tips they have made from the orders.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Uses Google Authentication
- An authenticated user will be able to add orders with information including: email, phone number, name, the type of order (phone or in-person), and whether or not the order is open or closed.
- The user will be able to add items to these orders with a name and price.
- Once a user closes an order they are able to add a tip amount to the total of the order into the overall revenue, which can be seen on a seperate page.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://chimerical-halva-4319ca.netlify.app)
- [ERD](https://dbdiagram.io/d/6394aac2bae3ed7c4545fd13)
- [Project Board](https://docs.google.com/presentation/d/1nwRDYN9IBU8dBvB-GxSUayW4D_8XkQC842jUzPPguPA/edit)

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [Ryan Bigelow](https://github.com/ryanmbigelow)
- [DeAndre Hill](https://github.com/Dede-Git)
- [Charles Bridgers IV](https://github.com/SeaForeEx)
- [Jacob Hardin](https://github.com/jakehardin)

<img src="https://github.com/erikvorkink/outfitbit/raw/master/src/assets/logo.png" width="200">

Outfitbit is a simple web app that tracks which outfit you wear each day. I created it primarily to experiment with Vue.js, Webpack, Firebase, and more. I look forward to having enough data to answer useless questions like "which shoes do I wear most often on Wednesdays?"


## Current Functionality
- Record today's outfit (shirt + pants + shoes) from among choices that have been manually loaded into a database.
- View day-by-day history of outfits.


## Screenshots
<img src="https://raw.githubusercontent.com/erikvorkink/outfitbit/master/screenshots/record.png" width="250">
<img src="https://raw.githubusercontent.com/erikvorkink/outfitbit/master/screenshots/history.png" width="250">


## Terminology
- Article: a shirt, a pair of pants, a pair of shoes
- Outfit: one shirt + pants + shoes, worn as an outfit


## Feature Wish List
- *High priority* Add new articles of clothing + photos via app, rather than manually in Firebase and Cloudinary.
- Analysis:
	- most common articles and outfits (total, date range, day of week)
	- combinations never worn
	- upon article selection: last time worn
- Sorting options for articles (by name, by most common).
- Optional articles of clothing, such as jackets or jewelry.
- Deactivate articles that are no longer worn.


## Code Improvements
- Dynamic article types so "shirt", "pants", and "shoes" aren't hard-coded. First step is to create and use constants. Second step is to pull types from Firebase.
- Better error handling when unable to communicate with Firebase.
- Tests.


## Known Issues
- The [Vuetify](https://vuetifyjs.com/) navigation drawer doesn't work well when you're scrolled down the page.
- Tapping the images to choose an article on iOS doesn't always select properly.


## Manual Setup
- Photos of each article must be manually loaded into Cloudinary.
- Articles must be manually loaded into a Firebase database with the following structure:

```
{
  "articles" : {
    "1" : {
          "cloudinary_id" : "xxx",
          "id" : 1,
          "name" : "Name of shirt 1",
          "type" : "shirt"
    },
    "2" : {
          "cloudinary_id" : "yyy",
          "id" : 2,
          "name" : "Name of shirt 2",
          "type" : "shirt"
    }
    ... (type should be "shirt", "pants", or "shoes")
}
```
- Copy `config/local_settings.js.dist` to `config/local_settings.js` (unversioned) and fill in the various Firebase and Cloudinary settings.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
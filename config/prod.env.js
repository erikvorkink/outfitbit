var settings = require('./local_settings')

module.exports = {
  NODE_ENV: '"production"',
  // Pull the following from the unversions settings file
  FIREBASE_API_KEY: settings.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: settings.FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL: settings.FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID: settings.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: settings.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAING_SENDER_ID: settings.FIREBASE_MESSAING_SENDER_ID,
  CLOUDINARY_CLOUD_NAME: settings.CLOUDINARY_CLOUD_NAME
}

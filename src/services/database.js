import Firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAING_SENDER_ID
}
// console.log(config)
const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

// We don't need to monitor articles so load them up once
let articles = {}
db.ref('articles').once('value', (snapshot) => {
  snapshot.forEach((item) => {
    articles[item.key] = item.val()
  })
})

export default {
  getArticles: () => {
    return articles
  },
  getOutfits: (num = 30) => {
    return db.ref('outfits').limitToLast(num)
  }
}

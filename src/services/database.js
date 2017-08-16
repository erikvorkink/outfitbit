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

const articlesRef = db.ref('articles')
const outfitsRef = db.ref('outfits')

// Articles do not change frequently so load them up once
let articles = {}
articlesRef.once('value', (snapshot) => {
  snapshot.forEach((item) => {
    let val = item.val()
    articles[val.id] = val
  })
})

export default {
  // This doesn't give us a DB reference like other getters,
  // so it can't be used within firebase {} in a component
  getArticlesArray: () => {
    return articles
  },

  getArticlesByType: (type) => {
    return articlesRef.orderByChild('type').equalTo(type)
  },

  getOutfits: (num) => {
    return outfitsRef.orderByChild('reverse_order').limitToLast(num)
  },

  createOutfit: (outfit) => {
    let record = {
      date: outfit.moment.format('YYYY-MM-DD'),
      reverse_order: outfit.moment.unix() * -1, // Firebase doesn't have "sort descending"
      selections: outfit.selections
    }
    // console.log(record)
    outfitsRef.push(record)
  }
}

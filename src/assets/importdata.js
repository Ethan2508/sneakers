const { connectToDatabase, getDb } = require('./db');
const { sneakers } = require('./data');


async function importData() {
  try {
    await connectToDatabase('mongodb+srv://ethanharfi:ethanharfi@cluster0.2jofuru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = getDb();
    
    // Insérez les données dans la collection 'sneakers'
    const result = await db.collection('sneakers').insertMany(sneakers);
    console.log(`${result.insertedCount} items inserted`);
    
    // Fermez la connexion si vous ne la réutilisez pas ailleurs
    db.client.close();
  } catch (error) {
    console.error('Erreur lors de l\'importation des données :', error);
  }
}

importData();

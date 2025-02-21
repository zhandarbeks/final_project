require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const Fragrance = require('./models/Fragrance'); // Import the model

// Your fragrance data
const fragrances = [
    {
        "name": "Tobacco Vanille",
        "gender": "Unisex",
        "brand": "Tom Ford",
        "scent": ["Amber", "Spicy", "Woody"],
        "sizes": {
          "30ml": 220,
          "50ml": 320
        },
        "top_notes": ["Tobacco Leaf", "Vanilla", "Cocoa"],
        "longevity": "Very Long Lasting",
        "sillage": "Strong",
        "season": ["Winter", "Fall"]
      },
      {
        "name": "Oud Wood",
        "gender": "Unisex",
        "brand": "Tom Ford",
        "scent": ["Woody", "Oud", "Spicy"],
        "sizes": {
          "30ml": 230,
          "50ml": 340
        },
        "top_notes": ["Oud", "Sandalwood", "Cardamom"],
        "longevity": "Moderate",
        "sillage": "Moderate",
        "season": ["Fall", "Winter"]
      },
      {
        "name": "Neroli Portofino",
        "gender": "Unisex",
        "brand": "Tom Ford",
        "scent": ["Citrus", "Floral", "Fresh"],
        "sizes": {
          "30ml": 200,
          "50ml": 310
        },
        "top_notes": ["Neroli", "Bergamot", "Lemon"],
        "longevity": "Moderate",
        "sillage": "Moderate",
        "season": ["Spring", "Summer"]
      },
      {
        "name": "Lost Cherry",
        "gender": "Women",
        "brand": "Tom Ford",
        "scent": ["Fruity", "Sweet", "Amber"],
        "sizes": {
          "30ml": 250,
          "50ml": 350
        },
        "top_notes": ["Cherry", "Almond", "Cinnamon"],
        "longevity": "Long Lasting",
        "sillage": "Strong",
        "season": ["Fall", "Winter"]
      },
      {
        "name": "Tuscan Leather",
        "gender": "Men",
        "brand": "Tom Ford",
        "scent": ["Woody", "Leather", "Spicy"],
        "sizes": {
          "30ml": 240,
          "50ml": 330
        },
        "top_notes": ["Leather", "Raspberry", "Saffron"],
        "longevity": "Very Long Lasting",
        "sillage": "Very Strong",
        "season": ["Winter", "Fall"]
      },
      {
        "name": "Bitter Peach",
        "gender": "Women",
        "brand": "Tom Ford",
        "scent": ["Fruity", "Sweet", "Amber"],
        "sizes": {
          "30ml": 260,
          "50ml": 370
        },
        "top_notes": ["Peach", "Blood Orange", "Cardamom"],
        "longevity": "Long Lasting",
        "sillage": "Strong",
        "season": ["Spring", "Summer"]
      },
      {
        "name": "Fabulous",
        "gender": "Men",
        "brand": "Tom Ford",
        "scent": ["Leather", "Spicy", "Woody"],
        "sizes": {
          "30ml": 270,
          "50ml": 380
        },
        "top_notes": ["Lavender", "Clary Sage", "Bitter Almond"],
        "longevity": "Long Lasting",
        "sillage": "Strong",
        "season": ["Winter", "Fall"]
      },
      {
        "name": "Vanille Fatale",
        "gender": "Women",
        "brand": "Tom Ford",
        "scent": ["Amber", "Vanilla", "Spicy"],
        "sizes": {
          "30ml": 250,
          "50ml": 360
        },
        "top_notes": ["Vanilla", "Myrrh", "Saffron"],
        "longevity": "Long Lasting",
        "sillage": "Moderate",
        "season": ["Winter", "Fall"]
      },
      {
        "name": "Beau de Jour",
        "gender": "Men",
        "brand": "Tom Ford",
        "scent": ["Aromatic", "Fresh", "Spicy"],
        "sizes": {
          "30ml": 210,
          "50ml": 320
        },
        "top_notes": ["Lavender", "Rosemary", "Basil"],
        "longevity": "Moderate",
        "sillage": "Moderate",
        "season": ["Spring", "Summer"]
      },
      {
        "name": "Soleil Blanc",
        "gender": "Women",
        "brand": "Tom Ford",
        "scent": ["Floral", "Coconut", "Amber"],
        "sizes": {
          "30ml": 230,
          "50ml": 340
        },
        "top_notes": ["Coconut", "Bergamot", "Pistachio"],
        "longevity": "Long Lasting",
        "sillage": "Moderate",
        "season": ["Summer", "Spring"]
      },
      {
        "name": "White Suede",
        "gender": "Women",
        "brand": "Tom Ford",
        "scent": ["Woody", "Floral", "Musk"],
        "sizes": {
          "30ml": 240,
          "50ml": 350
        },
        "top_notes": ["Thyme", "Tea", "Lily of the Valley"],
        "longevity": "Moderate",
        "sillage": "Moderate",
        "season": ["Spring", "Fall"]
      },
      {
        "name": "Cafe Rose",
        "gender": "Women",
        "brand": "Tom Ford",
        "scent": ["Rose", "Woody", "Spicy"],
        "sizes": {
          "30ml": 260,
          "50ml": 370
        },
        "top_notes": ["Rose", "Coffee", "Saffron"],
        "longevity": "Long Lasting",
        "sillage": "Strong",
        "season": ["Fall", "Winter"]
      }
];

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Connected to MongoDB Atlas');

    // Clear existing fragrances
    await Fragrance.deleteMany({});
    console.log('Existing data cleared.');

    // Insert new fragrances
    await Fragrance.insertMany(fragrances);
    console.log('Fragrances inserted successfully.');

    mongoose.connection.close();
}).catch(err => console.error('Error connecting to MongoDB:', err));

const mongoose = require('mongoose');

const fragranceSchema = new mongoose.Schema({
    name: String,
    gender: String,
    brand: String,
    scent: [String],
    sizes: Object, // Example: { "30ml": 220, "50ml": 320 }
    top_notes: [String],
    longevity: String,
    sillage: String,
    season: [String],
    image: String // Path to the fragrance image
});

// Avoid overwriting the model if it already exists
const Fragrance = mongoose.models.Fragrance || mongoose.model('Fragrance', fragranceSchema);

module.exports = Fragrance;

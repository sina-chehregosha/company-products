const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['A', 'B', 'C', 'D'],
        default: 'A'
    },
    productionDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);
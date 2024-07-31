//note naming convntion user.model.js

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, 'Please enter username']
        },
        age:{
            type: Number,
            default: 0
        }
    },
    {                       //this object not required but allows tracking of creation and updating time
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

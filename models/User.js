//imports
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        //username
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        //email
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address']
        },
        //thoughts [model array]
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        //friends
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]  
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//virtual for friendCount
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//exports
const User = model('User', UserSchema);
module.exports = User;
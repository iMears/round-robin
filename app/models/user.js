const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
},
{
  timestamps: true
});

UserSchema.methods.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

UserSchema.methods.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

module.exports = mongoose.model('User', UserSchema);

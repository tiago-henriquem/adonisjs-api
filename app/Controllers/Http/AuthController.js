'use strict'

const User = use('App/Models/User');

class AuthController {
  async register({ request }) {
    const data = request.all();

    console.log('data abaixo');
    console.log(data);

    const user = await User.create(data);

    return user
  }
}

module.exports = AuthController

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Op, chat} =
    require('./../../lib/connection/mysql');

// Function to create a new user
async function signUp({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ name, email, password: hashedPassword });
}

// Function to authenticate and generate JWT token
async function signIn({ email, password }) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'your-secret-key', {
        expiresIn: '1h', // Token expires in 1 hour
    });

    return token;
}

module.exports = { signUp, signIn };

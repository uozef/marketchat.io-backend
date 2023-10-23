const authService = require('../services/auth.service');

exports.signUp=async (req, res)=> {
    try {
        const user = await authService.signUp(req.body);
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.signIn=async (req, res)=> {
    try {
        const token = await authService.signIn(req.body);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

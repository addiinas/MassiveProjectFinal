const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./db');

passport.use(new GoogleStrategy({
  clientID: '720485514695-71m19ksouturs7mpcvk53lfomtsesvd3.apps.googleusercontent.com',  // Pastikan nilai ini benar
  clientSecret: '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',  // Pastikan nilai ini benar
  callbackURL: 'http://localhost:5000/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE googleId = ?', [profile.id]);
    let user = rows[0];

    if (user) {
      return done(null, user);
    } else {
      const [result] = await db.query('INSERT INTO users (googleId, email, name) VALUES (?, ?, ?)', [
        profile.id,
        profile.emails[0].value,
        profile.displayName
      ]);
      user = {
        id: result.insertId,
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName
      };
      return done(null, user);
    }
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const user = rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
});

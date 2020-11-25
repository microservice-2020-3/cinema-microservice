const serverSettings = {
  port: process.env.PORT || 3000
}

// as a better practice we can pass this values via env variables
const smtpSettings = {
  service: 'Gmail',
  user: process.env.EMAIL,
  pass: process.env.EMAIL_PASS
}

module.exports = Object.assign({}, { serverSettings, smtpSettings })

const crypto = require('crypto');

class HMACCalculator {
  static calculateHMAC(key, message) {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(message);
    return hmac.digest('hex');
  }
}

module.exports = HMACCalculator;

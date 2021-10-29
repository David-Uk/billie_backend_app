const pool = require('../config/db');

class VendorModel {
  static async CreateNewVendor({
    username, businessname, vendortype, address, email, password, date_created,
  }) {
    const { rows: user } = await pool.query(
      'INSERT INTO vendors(username, businessname, vendortype, address, email, password, date_created) VALUES($1, $2, $3, $4, $5, $6, $7) returning *',
      [username, businessname, vendortype, address, email, password, date_created],
    );
    return user[0];
  }

  static async IsVendor(email) {
    const vendors = await pool.query(
      'SELECT * FROM vendors WHERE email=$1', [email],
    );
    return vendors;
  }

  static async GetVendor(email) {
    const users = await pool.query(
      'SELECT * FROM vendors WHERE email=$1',
      [email],
    );
    return users;
  }
}

module.exports = VendorModel;

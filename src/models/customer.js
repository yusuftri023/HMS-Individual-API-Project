import { pool } from "../database/config.js";

export const userData = async (email) => {
  const mysqlConnection = await pool.getConnection();
  const [result] = await mysqlConnection.query(
    `SELECT * FROM customer
        WHERE email = ?;`,
    [email]
  );
  mysqlConnection.release();
  return result.length > 0 ? JSON.parse(JSON.stringify(result[0])) : result;
};
export const insertCustomer = async (
  username,
  email,
  phone_number,
  password
) => {
  const defaultPicture =
    "https://ik.imagekit.io/neuros123/default-profile-pic.png";
  const mysqlConnection = await pool.getConnection();
  const [result] = await mysqlConnection.query(
    `INSERT INTO customer(username, email, phone_number,password, picture)
        VALUES(?,?,?,?,?)`,
    [username, email, phone_number, password, defaultPicture]
  );
  mysqlConnection.release();
  return result;
};
export const updatePassword = async (password, email) => {
  const mysqlConnection = await pool.getConnection();
  const [result] = await mysqlConnection.query(
    `UPDATE customer
        SET picture = ?
        WHERE email = ?`,
    [password, email]
  );
  mysqlConnection.release();
  return result;
};
export const updatePicture = async (picture, email) => {
  const mysqlConnection = await pool.getConnection();
  const [result] = await mysqlConnection.query(
    `UPDATE customer
        SET picture = ?
        WHERE email = ?`,
    [picture, email]
  );
  mysqlConnection.release();
  return result;
};
export const deleteCustomerDb = async (id) => {
  const mysqlConnection = await pool.getConnection();
  const [result] = await mysqlConnection.query(
    `DELETE FROM customer
        WHERE id = ?`,
    [id]
  );
  mysqlConnection.release();
  return result;
};

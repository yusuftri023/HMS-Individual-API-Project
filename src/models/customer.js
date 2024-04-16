import { pool } from "../database/config.js";

export const insertCustomer = async (username, email, password) => {
  const defaultPicture =
    "https://ik.imagekit.io/neuros123/default-profile-pic.png";
  const mysqlConnection = pool.getConnection();
  const [result] = await mysqlConnection.query(
    `INSERT INTO customer(username, email, password, picture)
        VALUES(?,?,?,?,)`,
    [username, email, password, defaultPicture]
  );
  mysqlConnection.release();
  return result;
};
export const updatePassword = async (password, email) => {
  const mysqlConnection = pool.getConnection();
  const [result] = (await mysqlConnection).query(
    `UPDATE customer
        SET picture = ?
        WHERE email = ?`,
    [password, email]
  );
  mysqlConnection.release();
  return result;
};
export const updatePicture = async (picture, email) => {
  const mysqlConnection = pool.getConnection();
  const [result] = (await mysqlConnection).query(
    `UPDATE customer
        SET picture = ?
        WHERE email = ?`,
    [picture, email]
  );
  mysqlConnection.release();
  return result;
};
export const deleteCustomerDb = async (id) => {
  const mysqlConnection = pool.getConnection();
  const [result] = await mysqlConnection.query(
    `DELETE FROM customer
        WHERE id = ?`,
    [id]
  );
  mysqlConnection.release();
  return result;
};

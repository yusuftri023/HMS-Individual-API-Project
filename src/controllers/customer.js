import {
  deleteCustomerDb,
  insertCustomer,
  updatePassword,
  updatePicture,
} from "../models/customer.js";

export const register = async (req, res) => {
  const { customername, email, password } = req.body;

  //   const result = insertCustomer();
};
export const login = async (req, res) => {
  const { username, email, password } = req.body;
  res.cookie("authorization", "token", {
    signed: true,
    secure: true,
    httpOnly: true,
    secret: "rahasia",
  });
  res.status(201).json({ success: true });
};
export const deleteCustomer = async (req, res) => {
  //   const result = deleteCustomerDb();
};
export const changePicture = async (req, res) => {
  //   const result = updatePicture()
  res.status(200).json({
    success: false,
    message: "Data updated successfully",
    data: "result",
  });
};
export const changepassword = async (req, res) => {
  const result = updatePassword();
};

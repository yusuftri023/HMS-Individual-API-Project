import { JWTsign } from "../middlewares/authJWT.js";
import {
  deleteCustomerDb,
  insertCustomer,
  updatePassword,
  updatePicture,
  userData,
} from "../models/customer.js";
import { checkPassword, hashPassword } from "../utils/authBcrypt.js";
import "dotenv/config";
const { SIGNED_COOKIE_SECRET } = process.env;

export const register = async (req, res) => {
  const { username, email, phone_number, password } = req.body;
  if (username && email && password && phone_number) {
    const exist = userData(email) ? true : false;
    if (!exist) {
      const hashedPassword = await hashPassword(password);
      const result = await insertCustomer(
        username,
        email,
        phone_number,
        hashedPassword
      );
      return res.status(201).json({
        success: true,
        message: "Account successfully created",
        data: {
          result,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email already exist",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Request is not complete ",
      data: null,
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const data = userData(email);

    if (data) {
      const { emailData, usernameData, idData, passwordData } = data;
      const isMatch = await checkPassword(password, passwordData);
      if (isMatch) {
        const tokenData = {
          id: idData,
          username: usernameData,
          email: emailData,
        };
        const token = await JWTsign(tokenData);
        return res
          .cookie("authorization", token, {
            signed: true,
            secure: true,
            httpOnly: true,
            secret: SIGNED_COOKIE_SECRET,
          })
          .status(201)
          .json({
            success: true,
            message: "Login Success",
            data: {
              token,
            },
          });
      } else {
        return res.status(401).json({
          success: false,
          message: "email or password is invalid",
          data: null,
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Customer does not exist",
        data: null,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Request is not complete ",
      data: null,
    });
  }
};
export const deleteCustomer = async (req, res) => {
  console.log(req.decodedToken);
  const { idToken, emailToken } = req.decodedToken;
  const data = userData(emailToken);
  if (id === idToken && data) {
    await deleteCustomerDb(idToken);
    return res.status(200).json({
      success: true,
      message: "Account deleted",
      data: null,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "Customer does not exist",
      data: null,
    });
  }
};
export const changePicture = async (req, res) => {
  //   const result = updatePicture()
  return res.status(200).json({
    success: false,
    message: "Data updated successfully",
    data: "result",
  });
};
export const changepassword = async (req, res) => {
  const result = updatePassword();
};

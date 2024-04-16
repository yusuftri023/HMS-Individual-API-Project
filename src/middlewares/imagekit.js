import ImageKit from "imagekit";
import "dotenv/config";
const { IMAGEKIT_PUBLIC_KEY, IMAGEKIT_SECRET_KEY, IMAGEKIT_URL_ENDPOINT } =
  process.env;
const imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_SECRET_KEY,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
});

export const imagekitUpload = async (req, res, next) => {
  try {
    const stringFile = req.file.buffer.toString("base64");
    const date = new Date();
    const dateString = Intl.DateTimeFormat("sv-SE");
    const formattedTime = dateString.format(date);
    const currentTime = date.getTime();
    await imagekit.createFolder({
      folderName: `${formattedTime}`,
      parentFolderPath: "/HMS-Nodejs/profile-picture",
    });

    const uploadImage = imagekit.upload({
      fileName: `${currentTime}.png`,
      file: stringFile,
      folder: "/HMS-Nodejs/profile-picture",
    });
    req.uploadImage = uploadImage;
    next();
  } catch (error) {
    res.send(error);
  }
};

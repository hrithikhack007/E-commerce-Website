const cloudinary = require("cloudinary").v2;
const Readable = require("stream").Readable;

module.exports = uploadImage = async (file) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream(
      {
        folder: "avatars",
        width: 150,
        crop: "scale",
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    Readable.from(file.buffer).pipe(stream);
  });
};

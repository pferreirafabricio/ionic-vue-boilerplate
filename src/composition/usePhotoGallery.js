import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default function () {
  /**
   * Open the camera or gallery to take a photo
   * @param {CameraResultType} resultType
   * @param {CameraSource} source
   * @param {Number} quality
   * @param {boolean} allowEditing
   * @returns
   */
  async function takePhoto(
    resultType = CameraResultType.DataUrl,
    source = CameraSource.Prompt,
    quality = 90,
    allowEditing = true,
  ) {
    const cameraPhoto = await Camera.getPhoto({
      resultType,
      source,
      quality,
      allowEditing,
    });

    if (resultType === CameraResultType.DataUrl) return cameraPhoto.dataUrl;

    if (resultType === CameraResultType.Base64) return cameraPhoto.base64String;

    return cameraPhoto;
  }

  return {
    takePhoto,
  };
}

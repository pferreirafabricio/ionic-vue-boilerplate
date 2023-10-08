import { toastController } from "@ionic/vue";

export default function () {
  /**
   * Shows a notification
   * @param {string} message
   * @param {string} color
   * @param {string} position
   * @param {number} duration
   * @returns
   */
  async function openToast(message, color, position = "top", duration = 3000) {
    const toast = await toastController.create({
      message,
      position,
      color,
      duration,
    });

    return toast.present();
  }

  return {
    openToast,
  };
}

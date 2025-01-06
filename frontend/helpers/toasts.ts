import {toast, Bounce} from 'react-toastify';

export const toastSuccess = (message: string) => {
  toast.dismiss();
  toast.success(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

export const toastError = (message: string) => {
  toast.dismiss();
  toast.error(message, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};
import toastr from "toastr";
toastr.options.closeButton = true;
const toastUi = {
  success: (msg) => {
    toastr.success(msg);
  },
  info: (msg) => {
    toastr.info(msg);
  },
  warning: (msg) => {
    toastr.warning(msg);
  },
  error: (msg) => {
    toastr.error(msg);
  },
};

export default toastUi;

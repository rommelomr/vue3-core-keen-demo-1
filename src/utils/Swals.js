export const confirm = (swal, message, callBack) => {

  swal
    .fire({
      title: "",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        callBack()
      }
    });
}
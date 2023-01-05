import Paginator from './paginator/Paginator.vue'
import ImagePicker from './image-pickers/ImagePicker.vue'
import Modal from './modals/Modal.vue'
import EmptyModal from './modals/EmptyModal.vue'
import HeaderModal from './modals/HeaderModal.vue'
import StarsRating from './rating/StarsRating.vue'

export default (app) => {
    app.component("Paginator", Paginator);
    app.component("ImagePicker", ImagePicker);
    app.component("Modal", Modal);
    app.component("EmptyModal", EmptyModal);
    app.component("HeaderModal", HeaderModal);
    app.component("StarsRating", StarsRating);

    // for (const [key, icon] of Object.entries(LucideIcons)) {
    //   app.component(key, icon);
    // }
};

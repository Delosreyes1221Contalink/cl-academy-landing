import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})

export class SweetAlertService {
    constructor() {
    }
    sendCourseInvitation(): void {
        Swal.fire({
            title: "¡Bienvenido!",
            text: "Enviaremos a tu correo el link a las sesiones virtuales del curso y también tus credenciales de acceso a Academia Contalink.",
            showConfirmButton: false,
            timer: 3000
        });
    }
}
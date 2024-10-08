import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})

export class SweetAlertService {
    constructor() {}

    sendCourseInvitation(onClose: () => void): void {
        Swal.fire({
            title: "¡Bienvenido!",
            text: "Enviaremos a tu correo el link a las sesiones virtuales del curso y también tus credenciales de acceso a Academia Contalink.",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: 'Cerrar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Llamar a la función onClose proporcionada
                onClose();
            }
        });
    }

    sendCourseInvitationPrincipalForm(onClose: () => void): void {
        Swal.fire({
            title: "¡Bienvenido!",
            text: "Gracias por registrar tu información. Pronto nos comunicaremos contigo, para brindarte más detalles sobre el programa con instituciones educativas.",
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: 'Cerrar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Llamar a la función onClose proporcionada
                onClose();
            }
        });
    }
}
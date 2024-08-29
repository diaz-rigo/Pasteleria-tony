import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tony';
  deferredPrompt: any;

  // Captura el evento beforeinstallprompt
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    // Previene que el navegador muestre el prompt automáticamente
    event.preventDefault();
    // Guarda el evento para que pueda ser disparado más tarde
    this.deferredPrompt = event;
  }

  // Método para mostrar el prompt de instalación
  installPWA() {
    if (this.deferredPrompt) {
      // Muestra el prompt de instalación
      this.deferredPrompt.prompt();
      // Maneja la respuesta del usuario
      this.deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        // Limpia deferredPrompt para que no pueda ser reutilizado
        this.deferredPrompt = null;
      });
    }
  }
}

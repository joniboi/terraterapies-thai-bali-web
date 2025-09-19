import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', '../styles.scss'],
    standalone: false
})
export class AppComponent {
    videoOpacity: number = 1; // 1 = fully visible, 0 = fully transparent

    items: { label: string; link: string }[] = [
        { label: 'Aromatico', link: '#ripple-trigger' },
        { label: 'Balinés', link: '#manual-ripples' },
        { label: 'Cranial Facial', link: '#craneal-facial' },
        { label: 'Descontracturante', link: '#descontracturante' },
        { label: 'Embarazadas', link: '#embarazadas' },
        { label: 'Fusión Bali-Thai', link: '#fusion-bali-thai' },
        { label: 'Lomi Lomi', link: '#lomi-lomi' },
        { label: 'Piedras Calientes', link: '#piedras-calientes' },
        { label: 'Pindas', link: '#pindas' },
        { label: 'Reflexología', link: '#reflexologia' },
        { label: 'Tailandés', link: '#tailandes' },
        { label: 'Vela Karité', link: '#vela-karite' }
    ];

    therapies = [
        { title: 'Masaje Aromático', image: 'assets/aromatico.jpg', description: 'Vive un momento de paz y bienestar. Gracias a sus aromas naturales y movimientos delicados, este masaje te ayuda a relajarte profundamente y sentirte pleno/a y tranquilo/a.Vive un momento de paz y bienestar...' },
        { title: 'Balinés', image: 'assets/balines.jpg', description: 'Viaja a Bali sin salir de tu ciudad. Presión moderada, relajación profunda y alivio de tensiones para cuerpo y mente renovados.' },
        { title: 'Lomi Lomi', image: 'assets/lomi-lomi.jpg', description: 'Técnica tradicional de Hawaii que utiliza movimientos largos y fluidos con los antebrazos, ofreciendo una presión suave a moderada. Ideal para quienes buscan relajación profunda y una experiencia armoniosa que ayuda al cuerpo y la mente a liberar tensiones y estrés.' },
    ];

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollTop = window.scrollY;
        const fadeStart = 0;
        const fadeEnd = window.innerHeight * 0.7; // video fades after 70% of screen
        const opacity = Math.max(0.3, 1 - scrollTop / fadeEnd);
        this.videoOpacity = opacity;
    }
    
    scrollToContent() {
        const section = document.querySelector('.therapies-section');
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

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
        { title: 'Aromático', image: 'assets/aromatico.jpg', description: 'Vive un momento de paz y bienestar. Gracias a sus aromas naturales y movimientos delicados, este masaje te ayuda a relajarte profundamente y sentirte pleno/a y tranquilo/a.Vive un momento de paz y bienestar...' },
        { title: 'Balinés', image: 'assets/balines.jpg', description: 'Viaja a Bali sin salir de tu ciudad. Presión moderada, relajación profunda y alivio de tensiones para cuerpo y mente renovados.' },
        { title: 'Craneal Facial', image: 'assets/craneal-facial.jpg', description: 'Renueva tu energía y bienestar con un masaje que combina técnicas para el cuero cabelludo, rostro, cuello y hombros. Ideal para aliviar tensiones, mejorar la circulación y promover una sensación de relajación profunda.' },
        { title: 'Descontracturante', image: 'assets/descontracturante.jpg', description: 'Alivia tensiones profundas y recupera tu bienestar. Este masaje utiliza técnicas específicas para liberar nudos musculares y mejorar la movilidad, ideal para quienes sufren de estrés o dolores musculares crónicos.' },
        { title: 'Embarazadas', image: 'assets/embarazadas.jpg', description: 'Cuida de ti y de tu bebé con un masaje diseñado especialmente para futuras mamás. Alivia molestias comunes del embarazo, mejora la circulación y promueve la relajación profunda en un ambiente seguro y confortable.' },
        { title: 'Fusión Bali-Thai', image: 'assets/fusion-bali-thai.jpg', description: 'Combina lo mejor de dos mundos con esta fusión de técnicas balinesas y tailandesas. Experimenta una mezcla armoniosa de movimientos fluidos y estiramientos energizantes para un bienestar completo.' },
        { title: 'Lomi Lomi', image: 'assets/lomi-lomi.jpg', description: 'Técnica tradicional de Hawaii que utiliza movimientos largos y fluidos con los antebrazos, ofreciendo una presión suave a moderada. Ideal para quienes buscan relajación profunda y una experiencia armoniosa que ayuda al cuerpo y la mente a liberar tensiones y estrés.' },
        { title: 'Piedras Calientes', image: 'assets/piedras-calientes.jpg', description: 'Experimenta la calidez y el alivio profundo. Las piedras calientes se colocan estratégicamente para relajar los músculos tensos, mejorar la circulación y proporcionar una sensación de bienestar total.' },
        { title: 'Pindas', image: 'assets/pindas.jpg', description: 'Sumérgete en una experiencia sensorial única. Las pindas, bolsas de hierbas y especias calientes, se aplican con movimientos rítmicos para aliviar tensiones musculares, mejorar la circulación y revitalizar la piel.' },
        { title: 'Reflexología', image: 'assets/reflexologia.jpg', description: 'Equilibra tu cuerpo y mente a través de los puntos reflejos en los pies. Esta técnica milenaria estimula áreas específicas para promover la salud y el bienestar general.' },
        { title: 'Tailandés', image: 'assets/tailandes.jpg', description: 'Experimenta una combinación única de estiramientos y presiones que revitalizan tu cuerpo y mente. Este masaje tradicional tailandés mejora la flexibilidad, alivia tensiones musculares y promueve un equilibrio energético.' },
        { title: 'Vela Karité', image: 'assets/vela-karite.jpg', description: 'Disfruta de un masaje indulgente con la suavidad del karité derretido. La cera caliente se aplica sobre la piel, proporcionando hidratación profunda mientras los movimientos del masaje relajan los músculos y calman la mente.' },
        
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

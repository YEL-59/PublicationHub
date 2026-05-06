import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {
    interface Window {
        Pusher: any;
        Echo: Echo<any>;
    }
}

const initEcho = (token: string) => {
    if (typeof window === 'undefined') return null;

    window.Pusher = Pusher;

    if (window.Echo) {
        return window.Echo;
    }

    window.Echo = new Echo({
        broadcaster: 'reverb',
        key: 'gau9dawhoh68o0x4qcha',
        wsHost: 'dashboard.hooray-entertainment.online',
        wsPort: 443,
        wssPort: 443,
        forceTLS: true,
        enabledTransports: ['ws', 'wss'],
        authEndpoint: `${process.env.NEXT_PUBLIC_BASE_API}/broadcasting/auth`,
        auth: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    });

    return window.Echo;
};

export default initEcho;

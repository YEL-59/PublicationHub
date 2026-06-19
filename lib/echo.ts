import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {
    interface Window {
        Pusher: typeof Pusher;
        Echo: Echo<any>;
    }
}

const initEcho = (token: string) => {
    if (typeof window === 'undefined') return null;

    window.Pusher = Pusher;

    if (window.Echo) {
        return window.Echo;
    }

    const scheme = process.env.NEXT_PUBLIC_REVERB_SCHEME || 'https';
    const host = process.env.NEXT_PUBLIC_REVERB_HOST || 'dashboard.hooray-entertainment.online';
    const port = Number(process.env.NEXT_PUBLIC_REVERB_PORT || 443);
    const key = process.env.NEXT_PUBLIC_REVERB_APP_KEY || 'gau9dawhoh68o0x4qcha';

    window.Echo = new Echo({
        broadcaster: 'reverb',
        key,
        wsHost: host,
        wsPort: port,
        wssPort: port,
        forceTLS: scheme === 'https',
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

export const subscribeToOpportunityChat = <T = unknown>(
    echo: Echo<any>,
    chatId: string | number,
    onMessage: (payload: { data: T }) => void
) => {
    const channel = echo.private(`opportunity_chat.${chatId}`);
    channel.listen('.opportunity.chat', onMessage);
    return channel;
};

export const leaveOpportunityChat = (echo: Echo<any>, chatId: string | number) => {
    echo.leave(`opportunity_chat.${chatId}`);
};

export default initEcho;

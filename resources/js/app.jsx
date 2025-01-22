import { createInertiaApp } from '@inertiajs/react';
import HSFileUpload from '@preline/file-upload';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { HSStaticMethods } from 'preline';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

HSStaticMethods.autoInit();
HSFileUpload.autoInit();

const observer = new MutationObserver((mutationsList) => {
    // eslint-disable-next-line no-unused-vars
    for (const mutation of mutationsList) {
        // HSStaticMethods.autoInit();
        // HSFileUpload.getInstance('#hs-file-upload', true);
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
});

const inputs = document.querySelectorAll('.dt-container thead input');

inputs.forEach((input) => {
    input.addEventListener('keydown', function (evt) {
        if ((evt.metaKey || evt.ctrlKey) && evt.key === 'a') this.select();
    });
});
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${appName} | ${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);

        delete el.dataset.page;
    },
    progress: {
        color: '#fbbf24',
    },
});

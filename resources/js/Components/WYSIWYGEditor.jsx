import { Editor } from 'https://esm.sh/@tiptap/core';
import Bold from 'https://esm.sh/@tiptap/extension-bold';
import BulletList from 'https://esm.sh/@tiptap/extension-bullet-list';
import Link from 'https://esm.sh/@tiptap/extension-link';
import ListItem from 'https://esm.sh/@tiptap/extension-list-item';
import OrderedList from 'https://esm.sh/@tiptap/extension-ordered-list';
import Paragraph from 'https://esm.sh/@tiptap/extension-paragraph';
import Placeholder from 'https://esm.sh/@tiptap/extension-placeholder';
import Underline from 'https://esm.sh/@tiptap/extension-underline';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit';
import { useEffect } from 'react';

export default function WYSIWYGEditor() {
    useEffect(() => {
        const editor = new Editor({
            element: document.querySelector(
                '#hs-editor-tiptap [data-hs-editor-field]',
            ),
            editorProps: {
                attributes: {
                    class: 'min-h-40 p-3 border border-gray-300 rounded-md',
                },
            },
            extensions: [
                StarterKit.configure({ history: false }),
                Placeholder.configure({
                    placeholder: 'Start typing your content...',
                    emptyNodeClass: 'text-gray-400',
                }),
                Paragraph.configure({
                    HTMLAttributes: { class: 'text-gray-800' },
                }),
                Bold.configure({ HTMLAttributes: { class: 'font-bold' } }),
                Underline,
                Link.configure({
                    HTMLAttributes: {
                        class: 'text-blue-600 hover:underline',
                    },
                }),
                BulletList.configure({
                    HTMLAttributes: {
                        class: 'list-disc ml-6',
                    },
                }),
                OrderedList.configure({
                    HTMLAttributes: {
                        class: 'list-decimal ml-6',
                    },
                }),
                ListItem.configure({
                    HTMLAttributes: {
                        class: 'list-item',
                    },
                }),
            ],
        });

        const actions = [
            {
                id: '#hs-editor-tiptap [data-hs-editor-bold]',
                fn: () => editor.chain().focus().toggleBold().run(),
            },
            {
                id: '#hs-editor-tiptap [data-hs-editor-italic]',
                fn: () => editor.chain().focus().toggleItalic().run(),
            },
            {
                id: '#hs-editor-tiptap [data-hs-editor-underline]',
                fn: () => editor.chain().focus().toggleUnderline().run(),
            },
            {
                id: '#hs-editor-tiptap [data-hs-editor-strike]',
                fn: () => editor.chain().focus().toggleStrike().run(),
            },
            // {
            //     id: '#hs-editor-tiptap [data-hs-editor-link]',
            //     fn: () => {
            //         const url = window.prompt('URL');
            //         editor
            //             .chain()
            //             .focus()
            //             .extendMarkRange('link')
            //             .setLink({ href: url })
            //             .run();
            //     },
            // },
            {
                id: '#hs-editor-tiptap [data-hs-editor-ul]',
                fn: () => editor.chain().focus().toggleBulletList().run(),
            },
            {
                id: '#hs-editor-tiptap [data-hs-editor-ol]',
                fn: () => editor.chain().focus().toggleOrderedList().run(),
            },
        ];

        actions.forEach(({ id, fn }) => {
            const button = document.querySelector(id);
            if (button) button.addEventListener('click', fn);
        });

        return () => {
            editor.destroy();
        };
    }, []);

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div id="hs-editor-tiptap">
                <div className="sticky top-0 flex gap-x-0.5 border-b border-gray-200 bg-white p-2 align-middle">
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-bold=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
                            <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-italic=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="19" x2="10" y1="4" y2="4"></line>
                            <line x1="14" x2="5" y1="20" y2="20"></line>
                            <line x1="15" x2="9" y1="4" y2="20"></line>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-underline=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                            <line x1="4" x2="20" y1="20" y2="20"></line>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-strike=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
                            <path d="M14 12a4 4 0 0 1 0 8H6"></path>
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-ol=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="10" x2="21" y1="6" y2="6"></line>
                            <line x1="10" x2="21" y1="12" y2="12"></line>
                            <line x1="10" x2="21" y1="18" y2="18"></line>
                            <path d="M4 6h1v4"></path>
                            <path d="M4 10h2"></path>
                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-ul=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="8" x2="21" y1="6" y2="6"></line>
                            <line x1="8" x2="21" y1="12" y2="12"></line>
                            <line x1="8" x2="21" y1="18" y2="18"></line>
                            <line x1="3" x2="3.01" y1="6" y2="6"></line>
                            <line x1="3" x2="3.01" y1="12" y2="12"></line>
                            <line x1="3" x2="3.01" y1="18" y2="18"></line>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-blockquote=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17 6H3"></path>
                            <path d="M21 12H8"></path>
                            <path d="M21 18H8"></path>
                            <path d="M3 12v6"></path>
                        </svg>
                    </button>
                    <button
                        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        type="button"
                        data-hs-editor-code=""
                    >
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 16 4-4-4-4"></path>
                            <path d="m6 8-4 4 4 4"></path>
                            <path d="m14.5 4-5 16"></path>
                        </svg>
                    </button>
                </div>

                <div
                    className="h-[10rem] overflow-auto"
                    data-hs-editor-field=""
                ></div>
            </div>
        </div>
    );
}

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
{{--        <script src="https://cdn.jsdelivr.net/npm/preline@2.4.1/dist/preline.min.js"></script>--}}
        <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/lodash/lodash.min.js"></script>
        <script type="importmap">
            {
              "imports": {
                "https://esm.sh/v135/prosemirror-model@1.19.3/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs",
                "https://esm.sh/v135/prosemirror-model@1.19.4/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs",
                "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs",
                "https://esm.sh/v135/prosemirror-model@1.21.0/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs",
                "https://esm.sh/v135/prosemirror-model@1.22.1/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs",
                "https://esm.sh/v135/prosemirror-model@1.23.0/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.20.0/es2022/prosemirror-model.mjs"
              }
            }
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

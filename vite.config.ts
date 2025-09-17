import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";
import {resolve} from "path";

export default defineConfig({
    plugins: [tailwindcss()],
    base: "./",
    resolve: {
        alias: {
            "@": resolve(__dirname, "."),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                adult: resolve(__dirname, "adult.html"),
                blog: resolve(__dirname, "blog.html"),
                blogpost: resolve(__dirname, "blog-post.html"),
                contact: resolve(__dirname, "contact.html"),
                ielts: resolve(__dirname, "ielts.html"),
                teen: resolve(__dirname, "teen.html"),
                ttc: resolve(__dirname, "ttc.html"),
                teacher: resolve(__dirname, "teacher.html"),
                placement: resolve(__dirname, "placement.html"),
                gallery: resolve(__dirname, "gallery.html"),
                kid: resolve(__dirname, 'kid.html')
            },
        },
    },
});

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	plugins: [react()],
	resolve: {
		alias: [
			{find: "@", replacement: "/src"},
			{
				find: "@/components",
				replacement: "/src/components/",
			},
			{
				find: "@/components/UI",
				replacement: "/src/components/UI",
			},
			{
				find: "@/assets",
				replacement: "/src/assets",
			},
		],
	},
});

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemas";
import { theme } from "./theme";
import StudioNavBar from "./src/components/StudioNavBar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export default defineConfig({
  basePath: "/studio",
  name: "ShortsGameStrong_Studio",
  title: "ShortsGameStrong Studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavBar,
    },
  },
  theme,
});

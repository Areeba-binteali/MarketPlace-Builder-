import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Sanity environment variables are missing!");
}

export const sanityConfig = defineConfig({
  name: "default",
  title: "studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-07", 
  plugins: [structureTool(), visionTool()],
  basePath: "/admin/studio",
  schema: { types: schemaTypes },
  auth: {
    redirectOnSingle: false,
    mode: 'replace',
    providers: [
      /*
      {
        name: 'google', 
        title: 'Google', 
        url: 'https://api.sanity.io/v1/auth/login/google'
      },
      
      {
        name: 'github',
        title: 'GitHub',
        url: 'https://api.sanity.io/v1/auth/login/github'
      },
       */
      {
        name: 'sanity',
        title: 'E-mail / password',
        url: 'https://api.sanity.io/v1/auth/login/sanity',
      }, 
     
    
    ],
  }
});

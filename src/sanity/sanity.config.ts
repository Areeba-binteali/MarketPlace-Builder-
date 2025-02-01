import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure" 
import {visionTool} from "@sanity/vision"
import { schemaTypes } from "./schema";


export const sanityConfig = defineConfig({
name:"default",
title:"studio",
projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uoanafo6",
dataset:"production",
plugins:[structureTool(), visionTool()],
basePath:"/studio",
schema:{ types:schemaTypes}

})
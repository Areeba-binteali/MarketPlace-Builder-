import { defineType,defineField } from "sanity";

export const HomePage = defineType({
    name: "home",
    title: "Home Page",
    type: "document",
    fields:[
        defineField({
            name: "pageTitle",
            title: "Page Title",
            type: "string",
        }),
        defineField({
            name: "heroSec",
            title: "Hero Section",
            type: "object",
            fields: [
               defineField({
                name: "heroHead",
                title: "Hero Heading",
                type: "string",
                validation: (rule) => rule.required(),
               }),
               defineField({
                name: "heroBtn",
                title: "Hero Button",
                type: "string",
                validation: (rule) => rule.required(),
               }),
               defineField({
                name: "heroBtnLink",
                title: "Hero Button Link",
                type: "string",
                validation: (rule) => rule.required(),
               }),
               defineField({
                name: "heroDes",
                title: "Hero Description",
                type: "text",
                validation: (rule) => rule.required(),
            }),
            ]
        }),
        defineField({
            name: "brandSec",
            title: "Brands Section",
            type: "object",
            fields: [
                defineField({
                    name: "brandHead",
                    title: "Brand Heading",
                    type: "string",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "fourBoxesBrand",
                    title: "Brand Boxes",
                    type: "array",
                    of: [
                        {
                            type: "object",
                        fields: [
                            defineField({
                                name: "brandBoxHead",
                                title: "Brand Box Heading",
                                type: "string",
                                validation: (rule) => rule.required(),
                            }),
                            defineField({
                                name: "brandBoxImage",
                                title: "Brand Box Image",
                                type: "image",
                                validation: (rule) => rule.required(),
                            }),
                            defineField({
                                name: "brandBoxDescription",
                                title: "Brand Box Description",
                                type: "text",
                                validation: (rule) => rule.required(),
                            }),
                        ]
                        }
                    ]
                })
            ]
        }),
        defineField({
            name: "ceramicsSection",
            title: "New Products Section",
            type: "object",
            fields: [
                defineField({
                    name: "newHead",
                    title: "New Products Heading",
                    type: "string",
                }),
                defineField({
                    name: "newProductsBtn",
                    title: "New Products Button",
                    type: "string",
                }),
                defineField({
                    name: "newProductsBtnLink",
                    title: "New Products Button Link",
                    type: "string",
                })
            ]
        })
    ]
})

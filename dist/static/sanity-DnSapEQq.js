import{defineConfig as l,renderStudio as s}from"sanity";import{structureTool as r}from"sanity/structure";import{visionTool as p}from"@sanity/vision";const y={name:"blog",title:"Blog",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"title",maxLength:96}},{name:"metaTitle",title:"Meta Title",type:"string"},{name:"metaDescription",title:"Meta Description",type:"text",description:"A short description of the blog post (Max: 160 words)"},{name:"author",title:"Author",type:"reference",to:{type:"author"}},{name:"mainImage",title:"Main image",type:"mainImage"},{name:"categories",title:"Categories",type:"array",of:[{type:"reference",to:{type:"category"}}]},{name:"publishedAt",title:"Published at",type:"datetime"},{name:"body",title:"Body",type:"blockContent"},{name:"featured",title:"Featured",type:"boolean",description:"Set as featured blog. Only one blog can be featured at a time."},{name:"tags",title:"Tags",type:"array",of:[{type:"string"}],description:"Add multiple tags for this blog post",options:{layout:"tags"}},{name:"titleDescription",title:"Title Description",type:"text",description:"A short description of the blog title (Max: 100 words)",validation:e=>e.required().custom(t=>t?t.trim().split(/\s+/).length<=100?!0:"Title description must not exceed 100 words":!0)},{name:"catalog",title:"Catalog",type:"array",of:[{type:"string"}],description:"Add multiple tags for this blog post",options:{layout:"tags"}},{name:"faq",title:"FAQ",type:"array",of:[{type:"object",fields:[{name:"question",title:"Question",type:"string"},{name:"answer",title:"Answer",type:"text"}]}],description:"Add frequently asked questions for this blog post."}],preview:{select:{title:"title",type:"type",media:"mainImage"},prepare({title:e,type:t,media:o}){return{title:e,subtitle:t,media:o}}},__experimental_actions:["create","update","delete","publish"],async beforeUpdate({patch:e,documentId:t,schemaType:o}){if(o==="blog"&&e.set&&e.set.featured===!0){const i=require("part:@sanity/base/client").default,a='*[_type == "blog" && featured == true && _id != $documentId]',n={documentId:t};if((await i.fetch(a,n)).length>0)throw new Error("Only one blog can be featured at a time.")}}},m={name:"author",title:"Author",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"bio",title:"Bio",type:"text"},{name:"image",title:"Image",type:"image"}]},d={name:"mainImage",title:"Main Image",type:"image",options:{hotspot:!0},fields:[{name:"caption",title:"Caption",type:"string"},{name:"alt",title:"Alt Text",type:"string"}]},c={name:"category",title:"Category",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"description",title:"Description",type:"text"}]},u={name:"blockContent",title:"Block Content",type:"array",of:[{type:"block"},{type:"image",fields:[{name:"caption",title:"Caption",type:"string",options:{isHighlighted:!0}},{name:"alt",title:"Alt Text",type:"string"}]}]},h={name:"containSection",title:"Home Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"How to Download Header",type:"string"},{name:"howToDownloadSteps",title:"How to Download Steps",type:"array",of:[{type:"object",fields:[{name:"title",title:"Step Title",type:"string"},{name:"description",title:"Step Description",type:"text"}]}]},{name:"saveFromInstaHeader",title:"Save From Insta Header",type:"string"},{name:"saveFromInstaContent",title:"Save From Insta Content",type:"text"},{name:"featuresHeader",title:"Features Header",type:"string"},{name:"features",title:"Features",type:"array",of:[{type:"object",fields:[{name:"title",title:"Feature Title",type:"string"},{name:"description",title:"Feature Description",type:"text"}]}]},{name:"whyShouldUse",title:"Why Should Use",type:"array",of:[{type:"object",fields:[{name:"title",title:"Why Should We Use Title",type:"string"},{name:"description",title:"Why Should We Use Description",type:"text"}]}]},{name:"faq",title:"FAQ",type:"array",of:[{type:"object",fields:[{name:"question",title:"Question",type:"string"},{name:"answer",title:"Answer",type:"text"}]}]},{name:"visibility",title:"Visibility",type:"object",fields:[{name:"showHowToDownload",title:"Show How to Download",type:"boolean"},{name:"showSaveFromInsta",title:"Show Save From Insta",type:"boolean"},{name:"showFeatures",title:"Show Features",type:"boolean"},{name:"showFAQ",title:"Show FAQ",type:"boolean"},{name:"showWhyShouldUse",title:"Show Why Should Use",type:"boolean"}]}]},w={name:"containSectionReel",title:"Reel Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"How to Download Header",type:"string"},{name:"howToDownloadSteps",title:"How to Download Steps",type:"array",of:[{type:"object",fields:[{name:"title",title:"Step Title",type:"string"},{name:"description",title:"Step Description",type:"text"}]}]},{name:"saveFromInstaHeader",title:"Save From Insta Header",type:"string"},{name:"saveFromInstaContent",title:"Save From Insta Content",type:"text"},{name:"featuresHeader",title:"Features Header",type:"string"},{name:"features",title:"Features",type:"array",of:[{type:"object",fields:[{name:"title",title:"Feature Title",type:"string"},{name:"description",title:"Feature Description",type:"text"}]}]},{name:"whyShouldUse",title:"Why Should Use",type:"array",of:[{type:"object",fields:[{name:"title",title:"Why Should We Use Title",type:"string"},{name:"description",title:"Why Should We Use Description",type:"text"}]}]},{name:"faq",title:"FAQ",type:"array",of:[{type:"object",fields:[{name:"question",title:"Question",type:"string"},{name:"answer",title:"Answer",type:"text"}]}]},{name:"visibility",title:"Visibility",type:"object",fields:[{name:"showHowToDownload",title:"Show How to Download",type:"boolean"},{name:"showSaveFromInsta",title:"Show Save From Insta",type:"boolean"},{name:"showFeatures",title:"Show Features",type:"boolean"},{name:"showFAQ",title:"Show FAQ",type:"boolean"},{name:"showWhyShouldUse",title:"Show Why Should Use",type:"boolean"}]}]},g={name:"containSectionVideo",title:"Video Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"How to Download Header",type:"string"},{name:"howToDownloadSteps",title:"How to Download Steps",type:"array",of:[{type:"object",fields:[{name:"title",title:"Step Title",type:"string"},{name:"description",title:"Step Description",type:"text"}]}]},{name:"saveFromInstaHeader",title:"Save From Insta Header",type:"string"},{name:"saveFromInstaContent",title:"Save From Insta Content",type:"text"},{name:"featuresHeader",title:"Features Header",type:"string"},{name:"features",title:"Features",type:"array",of:[{type:"object",fields:[{name:"title",title:"Feature Title",type:"string"},{name:"description",title:"Feature Description",type:"text"}]}]},{name:"whyShouldUse",title:"Why Should Use",type:"array",of:[{type:"object",fields:[{name:"title",title:"Why Should We Use Title",type:"string"},{name:"description",title:"Why Should We Use Description",type:"text"}]}]},{name:"faq",title:"FAQ",type:"array",of:[{type:"object",fields:[{name:"question",title:"Question",type:"string"},{name:"answer",title:"Answer",type:"text"}]}]},{name:"visibility",title:"Visibility",type:"object",fields:[{name:"showHowToDownload",title:"Show How to Download",type:"boolean"},{name:"showSaveFromInsta",title:"Show Save From Insta",type:"boolean"},{name:"showFeatures",title:"Show Features",type:"boolean"},{name:"showFAQ",title:"Show FAQ",type:"boolean"},{name:"showWhyShouldUse",title:"Show Why Should Use",type:"boolean"}]}]},f={name:"containSectionPhoto",title:"Photo Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"How to Download Header",type:"string"},{name:"howToDownloadSteps",title:"How to Download Steps",type:"array",of:[{type:"object",fields:[{name:"title",title:"Step Title",type:"string"},{name:"description",title:"Step Description",type:"text"}]}]},{name:"saveFromInstaHeader",title:"Save From Insta Header",type:"string"},{name:"saveFromInstaContent",title:"Save From Insta Content",type:"text"},{name:"featuresHeader",title:"Features Header",type:"string"},{name:"features",title:"Features",type:"array",of:[{type:"object",fields:[{name:"title",title:"Feature Title",type:"string"},{name:"description",title:"Feature Description",type:"text"}]}]},{name:"whyShouldUse",title:"Why Should Use",type:"array",of:[{type:"object",fields:[{name:"title",title:"Why Should We Use Title",type:"string"},{name:"description",title:"Why Should We Use Description",type:"text"}]}]},{name:"faq",title:"FAQ",type:"array",of:[{type:"object",fields:[{name:"question",title:"Question",type:"string"},{name:"answer",title:"Answer",type:"text"}]}]},{name:"visibility",title:"Visibility",type:"object",fields:[{name:"showHowToDownload",title:"Show How to Download",type:"boolean"},{name:"showSaveFromInsta",title:"Show Save From Insta",type:"boolean"},{name:"showFeatures",title:"Show Features",type:"boolean"},{name:"showFAQ",title:"Show FAQ",type:"boolean"},{name:"showWhyShouldUse",title:"Show Why Should Use",type:"boolean"}]}]},S=[y,m,d,c,u,h,w,g,f],b=l({name:"default",title:"Instagram Resource Downloader",projectId:"n9195iq3",dataset:"production",plugins:[r(),p()],schema:{types:S}});s(document.getElementById("sanity"),b,{reactStrictMode:!1,basePath:"/"});

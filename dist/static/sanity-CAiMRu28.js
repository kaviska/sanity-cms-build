import{defineConfig as l,renderStudio as r}from"sanity";import{structureTool as s}from"sanity/structure";import{visionTool as d}from"@sanity/vision";const p={name:"blog",title:"Blog",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"title",maxLength:96}},{name:"metaTitle",title:"Meta Title",type:"string"},{name:"metaDescription",title:"Meta Description",type:"text",description:"A short description of the blog post (Max: 160 words)"},{name:"author",title:"Author",type:"reference",to:{type:"author"}},{name:"mainImage",title:"Main image",type:"mainImage"},{name:"categories",title:"Categories",type:"array",of:[{type:"reference",to:{type:"category"}}]},{name:"publishedAt",title:"Published at",type:"datetime"},{name:"body",title:"Body",type:"blockContent"},{name:"featured",title:"Featured",type:"boolean",description:"Set as featured blog. Only one blog can be featured at a time."},{name:"download",title:" Show Download",type:"boolean",description:"Show Download Section"},{name:"sidebar",title:"Sidebar Availability",type:"boolean",description:"Set as sidebar Available or not."},{name:"tags",title:"Tags",type:"array",of:[{type:"string"}],description:"Add multiple tags for this blog post",options:{layout:"tags"}},{name:"titleDescription",title:"Title Description",type:"text",description:"A short description of the blog title (Max: 100 words)",validation:e=>e.required().custom(t=>t?t.trim().split(/\s+/).length<=100?!0:"Title description must not exceed 100 words":!0)},{name:"catalog",title:"Catalog",type:"array",of:[{type:"string"}],description:"Add multiple tags for this blog post",options:{layout:"tags"}},{name:"faq",title:"FAQ",type:"array",of:[{type:"object",fields:[{name:"question",title:"Question",type:"string"},{name:"answer",title:"Answer",type:"text"}]}],description:"Add frequently asked questions for this blog post."}],preview:{select:{title:"title",type:"type",media:"mainImage"},prepare({title:e,type:t,media:o}){return{title:e,subtitle:t,media:o}}},__experimental_actions:["create","update","delete","publish"],async beforeUpdate({patch:e,documentId:t,schemaType:o}){if(o==="blog"&&e.set&&e.set.featured===!0){const i=require("part:@sanity/base/client").default,n='*[_type == "blog" && featured == true && _id != $documentId]',a={documentId:t};if((await i.fetch(n,a)).length>0)throw new Error("Only one blog can be featured at a time.")}}},c={name:"author",title:"Author",type:"document",fields:[{name:"name",title:"Name",type:"string"},{name:"bio",title:"Bio",type:"text"},{name:"image",title:"Image",type:"image"}]},m={name:"mainImage",title:"Main Image",type:"image",options:{hotspot:!0},fields:[{name:"caption",title:"Caption",type:"string"},{name:"alt",title:"Alt Text",type:"string"}]},y={name:"category",title:"Category",type:"document",fields:[{name:"title",title:"Title",type:"string"},{name:"description",title:"Description",type:"text"}]},g={name:"blockContent",title:"Block Content",type:"array",of:[{type:"block"},{type:"image",fields:[{name:"caption",title:"Caption",type:"string",options:{isHighlighted:!0}},{name:"alt",title:"Alt Text",type:"string"}]}]},u={name:"containSection",title:"Home Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"Add Title For the Page",type:"string"},{name:"body",type:"blockContent"}]},b={name:"containSectionReel",title:"Reel Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"Add Title For the Reel Page",type:"string"},{name:"body",type:"blockContent"}]},f={name:"containSectionVideo",title:"Video Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"Add Title For the Video Page",type:"string"},{name:"body",type:"blockContent"}]},h={name:"containSectionPhoto",title:"Photo Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"Add Title For the Photo Page",type:"string"},{name:"body",type:"blockContent"}]},w={name:"containSectionCarousel",title:"Carousel Page ",type:"document",fields:[{name:"howToDownloadHeader",title:"Add Title For the Carousel Page",type:"string"},{name:"body",type:"blockContent"}]},C=[p,c,m,y,g,u,b,f,h,w],T=l({name:"default",title:"Instagram Resource Downloader",projectId:"n9195iq3",dataset:"production",plugins:[s(),d()],schema:{types:C}});r(document.getElementById("sanity"),T,{reactStrictMode:!1,basePath:"/"});

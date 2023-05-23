# Stupid AI-powered John Doe's Blog ver 2.0 - app using the Next 13, Sanity Api, OpenAI & Kandinsky 2.1 AI model

See here - coming soon

## Next.js 13 Client/Server components, metadata and search engine optimization (SEO), Sanity api

### Getting Started

Clone this project and install dependencies :

```bash
npm i
# or
yarn install
```

Add your environment variables (nextAuth\NotionApi).
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Folder Structure
 

| File/Folder  	   									| Primary use    																								|
| :-------------------------------- | :------------------------------------------------------------ |
| `.env`				          					| Environment variables (googleAuth\nextAuth\mongoDB)       		|
| `/src`				          					| Main source folder client/server api components  			    		|
| `/public`          			 					| All of our static files																				|
| `/src/pages`			           			| Api, route files 						 																  |
| `/src/utils`			           			| Config file for SEO MetaData 																  |
| `/src/styles`			         				| Css global styling 																						|
| `/src/components`       					| React components    																					|


<!-- ![Screenshot 1](/public/assets/screenshots/shot1.jpg) -->


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

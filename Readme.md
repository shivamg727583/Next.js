# Next.js 

## why we need next.js ?
1. Full stack capabilities
 - server side rendering (SSR)
 - Static site generation (SSG)
 - API routes,enabling u to build both the frontend and backend in one framework.

2. Performance Optimization
 - Static site generation (SSG)
 - Increment static Regeneration (ISR) allow u to pre-render pages for better performance
 - making pages faster to load

3. SEO friendly

4. Developer Experience
 - file based routing system which makes it easy to create routes
 - Build-in support for Typescript ,ESLint

5. Job Market

## How to create Next.js application
 1. npx create-next-app@latest
 2. would u like to use Typescript ? - No/Yes
 3. Would u like to use ESLint ? - No/Yes
 4. Would u like to use Tailwind css ? - No/Yes
 5. √ Would you like your code inside a `src/` directory? ... No / Yes
 6. Would you like to use App Router? (recommended) ... No / Yes
 7. Would you like to use Turbopack for `next dev`? ... No / Yes
 8. Would you like to customize the import alias (`@/*` by default)? ... No / Yes

 

## File based routing - All display pages or folder should be inside app folder
 - app > home > page.js /page.jsx  ->           http://localhost:3000/
 - app > about -> page.js/page.jsx   ->           http://localhost:3000/about

 
- Page.jsx - for rendering any page
- layout.jsx - common layout for a project
- route rendering

* Dynamic Routing :- app -> [routeName] -> page.tsx (Folder name should be square bracket [])  - we can fetch using param (means parameter)


## Server side Rendering vs Client side rendering
- Server side rendering (SSR) - rendering on server side 
- Client side rendering (CSR) - rendering on client side
- Static site generation (SSG) - rendering on server side and then static html is generated and served from server.
- Incremental static regeneration (ISR) - rendering on server side and then static html is generated and served from server and then it is updated on server side when there is any change in code.

## Layout 
- layout.js - common layout for a project
- We can also make a layout.tsx page inside the page folder for specific page.

## Error - Handling 
- Make a custom `error.tsx` page inside `app folder` 
- Use case : i. Use as `Throw Error("here error msg")`
- Its excute nearest error.tsx file
- let's suppose ,we have made 2 error one in app folder and another inside app>profile>error.tsx and when we add error in profile then , it will fetch error page of profile folder.

## Loading :
- Make a file name as `loading.tsx` in app folder.
- In Next.js App Router, the `loading.tsx` file only shows during **server-side** or **async client-side** data fetching (e.g., when we use await in our page or layout)
- If our page loads instantly (no data fetching, no suspense), the loading page will not appear



## Link - Use for navigate page 
 <Link href= '/page' ></Link>

## Image - Used for image
 

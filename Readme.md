## Next.js 

# why we need next.js ?
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

# How to create Next.js application
 1. npx create-next-app@latest
 2. would u like to use Typescript ? - No/Yes
 3. Would u like to use ESLint ? - No/Yes
 4. Would u like to use Tailwind css ? - No/Yes
 5. √ Would you like your code inside a `src/` directory? ... No / Yes
 6. Would you like to use App Router? (recommended) ... No / Yes
 7. Would you like to use Turbopack for `next dev`? ... No / Yes
 8. Would you like to customize the import alias (`@/*` by default)? ... No / Yes


 # Folder Structure

# File based routing - All display pages or folder should be inside app folder
 - app > home > page.js /page.jsx  ->           http://localhost:3000/
 - app > about -> page.js/page.jsx   ->           http://localhost:3000/about

 
- Page.jsx - for rendering any page
- layout.jsx - common layout for a project
- route rendering

# Link - Use for navigate page 
 <Link href= '/page' ></Link>

 # Image - Used for image
 

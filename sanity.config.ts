import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: 'or94zqzu',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
})

export default config
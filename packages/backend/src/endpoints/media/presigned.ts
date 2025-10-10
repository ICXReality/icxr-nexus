import { Endpoint } from 'payload'
import z from 'zod'

// Validation schemas
const UploadQuerySchema = z.object({
  key: z.string().uuid('Invalid UUID format'),
})

export const PresignedMediaEndpoint: Endpoint = {
  path: '/presigned',
  method: 'put',
  handler: async (req) => {
    try {
      // Parse and validate query parameters
      const url = new URL(req.url || '', `http://localhost`)
      const queryParams = {
        key: url.searchParams.get('key'),
      }

      const validatedQuery = UploadQuerySchema.parse(queryParams)

      if (!req.body || !req.arrayBuffer) {
        return new Response(JSON.stringify({ error: 'No file provided' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      // Get file content as stream/buffer (like S3)
      const fileBuffer = Buffer.from(await req.arrayBuffer())

      // Get Content-Type from headers (like S3 expects)
      const contentType = req.headers.get('Content-Type') || 'application/octet-stream'

      await req.payload.create({
        collection: 'media',
        data: {
          key: validatedQuery.key,
        },
        file: {
          data: fileBuffer,
          name: `upload-${validatedQuery.key}`,
          mimetype: contentType,
          size: fileBuffer.length,
        },
      })

      return new Response(null, { status: 200 })
    } catch (error) {
      console.error('Upload error:', error)

      // Handle Zod validation errors
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: 'Validation failed',
            details: error.issues.map((e: any) => `${e.path.join('.')}: ${e.message}`),
          }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          },
        )
      }

      return new Response(JSON.stringify({ error: 'Upload failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  },
}

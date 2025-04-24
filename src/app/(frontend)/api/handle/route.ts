import config from '@payload-config'
import payload from 'payload'

export async function GET() {
  try {
    await payload.init({ config })

    const themes = await payload.find({
      collection: 'themes',
      where: { _order: { exists: false } },
    })

    if (!themes || themes.totalDocs === 0) {
      return Response.json({ message: 'No themes with missing _order values found.' }, { status: 404 })
    }

    const results = {
      success: 0,
      errors: 0
    }

    for (const doc of themes.docs) {
      try {
        await payload.update({
          collection: 'themes',
          id: doc.id,
          data: {}
        })

        console.log(`Updated theme ${doc.id} with orderable value`)
        results.success++
      }
      catch (error) {
        console.error(`Failed to update theme ${doc.id}:`, error)
        results.errors++
      }
    }

    return Response.json(results)
  }
  catch (error) {
    console.error(error)
  }
}

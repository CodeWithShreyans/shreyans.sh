import { unstable_noStore } from "next/cache"

import { env } from "@/env.mjs"
import { cn } from "@/lib/utils"

type SentryResponse = {
   data: [{ "count(transaction)": number }]
   meta: {
      dataset: string
      datasetReason: string
      fields: { "count(transaction)": string }
      isMetricsData: boolean
      isMetricsExtractedData: boolean
      tips: { columns: null; query: null }
      units: { "count(transaction)": null }
   }
}

const getViews = async (slug: string) => {
   unstable_noStore()
   const api = new URL(
      "https://sentry.io/api/0/organizations/shreyans-jain-org/events/",
   )
   api.searchParams.set("field", "count(transaction)")
   api.searchParams.set("project", "4506345522724864")
   api.searchParams.set("environment", "vercel-production")
   api.searchParams.set("query", `(transaction:/blog/${slug})`)
   const views = await fetch(api, {
      headers: {
         Authorization: `Bearer ${env.SENTRY_TOKEN}`,
      },
   })

   return (await views.json()) as SentryResponse
}

export const Views = async ({
   className,
   slug,
}: {
   className?: string
   slug: string
}) => {
   const views = await getViews(slug)

   return (
      <div className={cn("text-lg text-muted-foreground", className)}>
         Views: {views.data[0]["count(transaction)"]}
      </div>
   )
}

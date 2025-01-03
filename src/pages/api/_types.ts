export type NotionWebhookRequest = {
    data: {
        properties: {
            Index: {
                unique_id: {
                    number: number
                }
            }
            Thought: {
                title: [
                    {
                        plain_text: string
                    },
                ]
            }
            DateTime: {
                date: {
                    start: string
                }
            }
        }
    }
}

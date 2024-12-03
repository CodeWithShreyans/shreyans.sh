import { formatDuration, intervalToDuration } from "date-fns"

export const BirthTime = () => {
    const time = intervalToDuration({
        start: new Date(1179628980000),
        end: new Date(),
    })

    return (
        <span className="font-semibold">
            {formatDuration(time, {
                format: ["years", "months", "days", "hours"],
            })}
        </span>
    )
}

import { formatDuration, intervalToDuration } from "date-fns"

export const BirthTime = () => {
    const time = intervalToDuration({
        start: new Date(1179628980000),
        end: new Date(),
    })

    return (
        <span className="font-semibold">
            {/* {`${time.years} years ${
                time.months !== 0 ? `${time.months} months ` : ""
            }${time.days !== 0 ? `${time.days} days ` : ""}${
                time.hours !== 0 ? `and ${time.hours} hours ` : ""
            }`} */}
            {formatDuration(time, {
                format: ["years", "months", "days", "hours"],
            })}
        </span>
    )
}

import { getTimeElapsed } from "@/lib/utils"

const BirthTime = () => {
   const time = getTimeElapsed(1179628980000)

   return (
      <span className="font-semibold">
         {`${time.years} years ` +
            (time.months !== 0 ? `${time.months} months ` : "") +
            (time.days !== 0 ? `${time.days} days ` : "") +
            (time.hours !== 0 ? `and ${time.hours} hours ` : "")}
      </span>
   )
}

export default BirthTime

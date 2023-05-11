import { andThen, sum, compose, otherwise, always, identity } from "ramda";

const fetchStatsForTeam = (team) => new Promise((resolve, reject) => {
  setTimeout(() => reject(), 1000)
})

const getDefaultValue = always('-')
const sumStats = sum

const getStats = compose(
  otherwise(getDefaultValue),
  andThen(sumStats),
  fetchStatsForTeam
)

console.log('getStats', await getStats('fasst'))

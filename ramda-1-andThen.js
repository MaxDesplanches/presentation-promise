import {compose,tap, uniq, flatten, map, prop, andThen, sort, ascend, sortBy, toLower, identity} from 'ramda';

const devs = [
  {
    id: 1,
    name: 'Stephanie',
    projects: ['april']
  },
  {
    id: 2,
    name: 'Guillaume',
    projects: ['ilona', 'repam']
  },
  {
    id: 3,
    name: 'Sebastien',
    projects: ['unmi', 'spid', 'ag2r', 'asselio', 'laterreentiere']
  },
  {
    id: 4,
    name: 'Max',
    projects: ['april']
  }
]

const fetchTeamUsers = (team) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(devs), 1000)
})

const formatProjects = compose(
  sortBy(toLower),
  uniq,
  flatten,
  map(prop('projects')),
)
// obtenir la liste des projets d'une equipe, sans doublon
const getAllProjects = compose(
  andThen(formatProjects),
  fetchTeamUsers,
)

console.log('getAllProjects', await getAllProjects('fasst'))

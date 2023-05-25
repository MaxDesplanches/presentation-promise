import {multiply, compose, map, prop, andThen, sum, identity, tap} from "ramda";
import Promise from 'bluebird'

const fetchNumberOfProjectByStatus = (status) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(
    compose(
      Math.ceil,
      multiply(1000)
    )(Math.random())
  ), 1000);
})


const projectsType = [
  {
    label: "projets en cours",
    status: "IN_PROGESS",
  },
  {
    label: "projets en signature",
    status: "SEND_FOR_SIGNATURE",
  },
  {
    label: "projets terminés",
    status: "SIGNED",
  }
]

const getStatusAndFetchStats = compose(fetchNumberOfProjectByStatus, prop('status'))

// map's composition law
// compose(map(f), map(g)) === map(compose(f, g));

const countAllProjects = compose(
  andThen(sum),
  Promise.all,
  map(fetchNumberOfProjectByStatus),
  map(prop('status'))
)

const countAllProjectsRefactored = compose(
  andThen(sum),
  Promise.all,
  map(getStatusAndFetchStats)
)

console.log('total projects', await countAllProjects(projectsType))
console.log('total projects', await countAllProjectsRefactored(projectsType))

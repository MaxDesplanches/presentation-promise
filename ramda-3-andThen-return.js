import { find, propEq, compose, andThen, prop, head, map, tap, identity, toUpper } from "ramda";

const projects = [
  {
    id: 1,
    name: 'April',
    description: "Un super parcours collectif en santé et prev"
  },
  {
    id: 2,
    name: 'flexidocs',
    description: "L'outil de generation de pdf dynamique le plus puissant au monde"
  }
];

const fetchAllProjectsIds = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(map(prop('id'), projects)), 1000);
})

const fetchProjectById = (id) => new Promise((resolve, reject) => {
  const project = find(propEq(id, 'id'), projects);
  setTimeout(() => resolve(project), 1000);
})

const formatProjectDescription = compose(
  toUpper,
  prop('description')
)

const getFirstProject = compose(
  fetchProjectById,
  head
)

const getFirstProjectDescription = compose(
  andThen(formatProjectDescription),
  andThen(getFirstProject),
  fetchAllProjectsIds
)

console.log('getFirstProjectDescription', await getFirstProjectDescription());

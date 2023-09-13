import { POKEMON_TYPE_COLORS } from '../utils/constants'

const getColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColor;
import bug from '../images/bug.svg';
import dark from '../images/dark.svg';
import dragon from '../images/dragon.svg';
import electric from '../images/electric.svg';
import fairy from '../images/fairy.svg';
import fighting from '../images/fighting.svg';
import fire from '../images/fire.svg';
import flying from '../images/flying.svg';
import ghost from '../images/ghost.svg';
import grass from '../images/grass.svg';
import ground from '../images/ground.svg';
import ice from '../images/ice.svg';
import normal from '../images/normal.svg';
import poison from '../images/poison.svg';
import psychic from '../images/psychic.svg';
import rock from '../images/rock.svg';
import steel from '../images/steel.svg';
import water from '../images/water.svg';

const typesImages = [
	{
		name: 'bug',
		url: bug,
	},
	{
		name: 'dark',
		url: dark,
	},
	{
		name: 'dragon',
		url: dragon,
	},
	{
		name: 'electric',
		url: electric,
	},
	{
		name: 'fairy',
		url: fairy,
	},
	{
		name: 'fighting',
		url: fighting,
	},
	{
		name: 'fire',
		url: fire,
	},
	{
		name: 'flying',
		url: flying,
	},
	{
		name: 'ghost',
		url: ghost,
	},
	{
		name: 'grass',
		url: grass,
	},
	{
		name: 'ground',
		url: ground,
	},
	{
		name: 'ice',
		url: ice,
	},
	{
		name: 'normal',
		url: normal,
	},
	{
		name: 'poison',
		url: poison,
	},
	{
		name: 'psychic',
		url: psychic,
	},
	{
		name: 'rock',
		url: rock,
	},
	{
		name: 'steel',
		url: steel,
	},
	{
		name: 'water',
		url: water,
	},
];

export const getProperTypeImg = (type: string): string => {
	return typesImages.find((typeImg) => typeImg.name === type)?.url || '';
};

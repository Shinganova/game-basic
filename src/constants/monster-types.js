const MONSTER_TYPES = [
	{
		name: 'The Sausage King',
		base: {
			exp: 50,
			health: 100,
			mana: 250,
			strength: 10,
			speed: 1000,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			speed: 1,
		},
	},
	{
		name: 'Demon',
		base: {
			exp: 5,
			health: 40,
			mana: 100,
			strength: 1,
			speed: 50,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			speed: 1,
		},
	},
	{
		name: 'Skeleton',
		base: {
			exp: 4,
			health: 20,
			mana: 5,
			strength: 1,
			speed: 100,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			speed: 1,
		},
	},
	{
		name: 'Rot Worm',
		base: {
			exp: 3,
			health: 10,
			mana: 10,
			strength: 1,
			speed: 150,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			speed: 1,
		},
	},
	{
		name: 'Bat',
		base: {
			exp: 2,
			health: 5,
			mana: 5,
			strength: 1,
			speed: 200,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			speed: 1,
		},
	},
];

export default MONSTER_TYPES;

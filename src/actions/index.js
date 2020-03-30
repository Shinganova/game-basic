import {
	ADD_ARTICLE, ATTACK_ENEMY, LEVEL_UP, NEW_BATTLE,
} from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload };
}

export function attackEnemy(payload) {
	return { type: ATTACK_ENEMY, payload };
}

export function levelUp(payload) {
	return { type: LEVEL_UP, payload };
}

export function newBattle(payload) {
	return { type: NEW_BATTLE, payload };
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './CraftWindow.scss';

class ConnectedCraftWindow extends Component {
	constructor(props) {
		super(props);

		console.log('ConnectedCraftWindow props', props);

		this.state = {
			spell: {
				rune: 'instant',
				orb: 'single',
				gem: 'damage',
				essence: 'physical',
			},
		};

		// props.newBattle();
	}

	onChange = (event) => {
		const key = event.target.getAttribute('name');
		const { value } = event.target;

		console.log('onChange', key, value);

		this.setState((prevState) => ({
			spell: {
				...prevState.spell,
				[key]: value,
			},
		}), () => { console.log(this.state); });
	}

	generateSpellDescription = (spell) => {
		const {
			rune,
			orb,
			gem,
			essence,
		} = spell;

		let spellDescription = '';

		let part1 = '';
		let part2 = '';
		let part3 = '';
		let part4 = '';

		// Gem
		switch (gem) {
		case 'damage':
			part1 = 'Deal X';

			// Esssence
			switch (essence) {
			case 'physical':
				part2 = ' physical damage';
				break;
			case 'magic':
				part2 = ' magic damage';
				break;
			default:
				spellDescription = 'default';
			}

			// Rune
			switch (rune) {
			case 'instant':
				part3 = '';
				break;
			case 'instant-over-time':
				part3 = ' over Y seconds';
				break;
			default:
				spellDescription = 'default';
			}

			// Orb
			switch (orb) {
			case 'single':
				part4 = ' to target enemy.';
				break;
			case 'aoe':
				part4 = ' to all enemies.';
				break;
			default:
				spellDescription = 'default';
			}

			spellDescription = `${part1}${part2}${part3}${part4}`;
			break;
		case 'heal':
			part1 = 'Heal';

			// Orb
			switch (orb) {
			case 'single':
				part2 = ' player for X health';
				break;
			case 'aoe':
				part2 = ' all playeres for X health';
				break;
			default:
				spellDescription = 'default';
			}

			// Rune
			switch (rune) {
			case 'instant':
				part3 = '.';
				break;
			case 'instant-over-time':
				part3 = ' over Y seconds.';
				break;
			default:
				spellDescription = 'default';
			}

			spellDescription = `${part1}${part2}${part3}${part4}`;
			// spellDescription = 'Heal player for X health';
			// spellDescription = 'Heal player for X health over time';
			// spellDescription = 'Heal all players for X health';
			// spellDescription = 'Heal all players for X health over time';
			break;
		default:
			spellDescription = 'default';
		}
		return spellDescription;
	}

	render() {
		// const {
		// 	player,
		// 	enemies,
		// 	levelUps,
		// 	newBattle,
		// } = this.props;

		const { spell } = this.state;

		const spellDescription = this.generateSpellDescription(spell);


		return (
			<div className="craft-window">
				<header>
					<h1>Craft Window</h1>
				</header>
				<div className="crafts">
					<div className="craft">
						<label htmlFor="gem">gem</label>
						<select name="gem" id="gem" onChange={this.onChange} value={spell.gem}>
							{/* <option value="" disabled>empty</option> */}
							<option value="damage">damage</option>
							<option value="heal">heal</option>
							{/* <option value="stun">stun</option>
						<option value="silence">silence</option>
						<option value="stat-change">stat-change</option> */}
						</select>
					</div>
					<div className="craft">
						<label htmlFor="essence">essence</label>
						<select name="essence" id="essence" onChange={this.onChange} value={spell.essence}>
							{/* <option value="" disabled>empty</option> */}
							<option value="physical">physical</option>
							<option value="magic">magic</option>
						</select>
					</div>
					<div className="craft">
						<label htmlFor="rune">rune</label>
						<select name="rune" id="rune" onChange={this.onChange} value={spell.rune}>
							{/* <option value="" disabled>empty</option> */}
							<option value="instant">instant</option>
							<option value="instant-over-time">instant-over-time</option>
							{/* <option value="channel">channel</option>
							<option value="channel-over-time">channel-over-time</option> */}
						</select>
					</div>
					<div className="craft">
						<label htmlFor="orb">orb</label>
						<select name="orb" id="orb" onChange={this.onChange} value={spell.orb}>
							{/* <option value="" disabled>empty</option> */}
							<option value="single">single</option>
							{/* <option value="cone">cone</option> */}
							<option value="aoe">aoe</option>
						</select>
					</div>
				</div>
				<div className="crafted-item">
					<p>{spellDescription}</p>
					<p>Cooldown:</p>
					<p>Mana cost:</p>
				</div>
			</div>
		);
	}
}


// function mapDispatchToProps(dispatch) {
// 	return {
// 		fightEnemy: (enemy) => dispatch(attackEnemy(enemy)),
// 	};
// }

const mapDispatchToProps = {
	// attackEnemy: allActions.attackEnemy,
	...allActions,
};

const mapStateToProps = (state) => ({
	player: state.rootReducer.player,
	enemies: state.rootReducer.enemies,
	levelUps: state.rootReducer.levelUps,
});

const CraftWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedCraftWindow);

export default CraftWindow;

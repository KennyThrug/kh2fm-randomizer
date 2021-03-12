import { Enemy } from "./Enemy";
import { LocationName } from "./LocationName";
import { GameMode } from "../settings/enums";

export enum EnemyLocationType {
	MOB_FIGHT = "Mob Fight",
	BOSS_FIGHT = "Boss Fight",
	MISCELLANEOUS = "Miscellaneous",
}

export interface EnemyLocation {
	type: EnemyLocationType;
	location: LocationName;
	description: string;
	maxSize?: number;
	world: string;
	room: string;
	event?: string;
	eventGroup?: string[];
	enemies: {
		enemy: Enemy;
		maxSize?: number;
		value: string;
		world?: string;
		room?: string;
		event?: string;
		secondaryObjectLocation?: {
			name: string;
			//Two Types of Things can go here
			//#1, the location in data of another object in the arena that can be replaced (starts with a 1)
			//#2, the location in data to check for what party member is needed to replace (starting with a D)
			value: string;
		};
		patches?: {
			// patches which are applied to every boss that is placed here (ie marluxia's room)
			all: {
				name: string;
				codes: string[];
			}[];
		};
	}[];
	gameMode?: {
		[K in GameMode]?: {};
	};
}

export enum EnemyType {
	HEARTLESS = "Heartless",
	NOBODY = "Nobody",
	MUSHROOM = "Mushroom",
	BOSS = "Boss",
	MISCELLANEOUS = "Miscellaneous",
}

export interface Enemy {
	type: EnemyType;
	name: string;
	value: string;
	size?: number;
	secondaryObject?: string;
	secondaryObjectLocation?: string;
	rules?: {
		bannedFrom?: string[];
	};
}

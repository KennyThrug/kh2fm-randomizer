import { Enemies } from "../enemies";
import { EnemyLocation, EnemyLocationType } from "../types/EnemyLocation";
import { LocationName } from "../types/LocationName";

export const absentSilhouettesEnemyLocations: EnemyLocation[] = [
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Vexen AS Fight",
		maxSize: 4443212, // Larxene
		world: "04",
		room: "20",
		event: "73",
		enemies: [
			{
				value: "11C597A0",
				enemy: Enemies.VEXEN_AS,
				secondaryObjectLocation: {
					name : "First Party Member Slot",
					value : "PM1",
				}
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Lexaeus AS Fight",
		maxSize: 4443212, // Larxene
		world: "04",
		room: "21",
		event: "8E",
		enemies: [
			{
				value: "11C56368",
				enemy: Enemies.LEXAEUS_AS,
				secondaryObjectLocation: {
					name : "First Party Member Slot",
					value : "PM1",
				}
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Zexion AS Fight",
		world: "04",
		room: "22",
		event: "97",
		enemies: [
			// {
			// 	value: "11C597E0",
			// 	enemy: Enemies.ZEXION_AS,
			// },
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Marluxia AS Fight",
		maxSize: 4443212, // Larxene
		world: "04",
		room: "26",
		event: "91",
		enemies: [
			{
				value: "11C58FE0",
				enemy: Enemies.MARLUXIA_AS,
				patches: {
					all: [
						{
							name: "Don't turn off player control",
							codes: [
								"204fa564 00000089",
								"204fa568 00600000"
							]
						}
					] 
				},
				secondaryObjectLocation: {
					name : "First Party Member Slot",
					value : "PM1",
				},
			},
		],
	},
	{
		type: EnemyLocationType.BOSS_FIGHT,
		location: LocationName.CAVERN_OF_REMEMBRANCE,
		description: "Larxene AS Fight",
		maxSize: 4443212, // Larxene
		world: "04",
		room: "21",
		event: "8F",
		enemies: [
			{
				value: "11C5649C",
				enemy: Enemies.LARXENE_AS,
				secondaryObjectLocation: {
					name : "First Party Member Slot",
					value : "PM1",
				}
			},
		],
	},
];

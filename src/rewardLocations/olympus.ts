import { LocationName } from "../types/LocationName";
import { Rewards } from "../rewards";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const olympusRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.OLYMPUS,
		description: "Underworld Entrance",
		value: "11CDFB02",
		reward: Rewards.POWER_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Passage",
		value: "11CDFB0E",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Passage",
		value: "11CDFB1A",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Passage",
		value: "11CDFB26",
		reward: Rewards.ETHER,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Passage",
		value: "11CDFB32",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Passage",
		value: "11CDFB3E",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.OLYMPUS,
		description: "Inner Chamber",
		value: "11CDFB4A",
		reward: Rewards.UNDERWORLD_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Inner Chamber",
		value: "11CDFB56",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Caverns Entrance",
		value: "11CDFB62",
		reward: Rewards.LUCID_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Caverns Entrance",
		value: "11CDFB6E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Caverns Entrance",
		value: "11CDFB7A",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "The Lost Road",
		value: "11CDFB86",
		reward: Rewards.BRIGHT_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "The Lost Road",
		value: "11CDFB92",
		reward: Rewards.ETHER,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "The Lost Road",
		value: "11CDFB9E",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "The Lost Road",
		value: "11CDFBAA",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Atrium",
		value: "11CDFBB6",
		reward: Rewards.LUCID_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "Atrium",
		value: "11CDFBC2",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BIGCHEST,
		location: LocationName.OLYMPUS,
		description: "The Lock",
		value: "11CDFBCE",
		reward: Rewards.CAVERNS_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "The Lock",
		value: "11CDFBDA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		location: LocationName.OLYMPUS,
		description: "The Lock",
		value: "11CDFBE6",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.OLYMPUS,
		description: "Cerberus",
		value: "21D10808",
		reward: Rewards.COUNTERGUARD,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.OLYMPUS,
		description: "Phil's Training (Maniac)",
		value: "21D10FE8",
		reward: Rewards.AERIAL_DIVE,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.OLYMPUS,
		description: "Pete",
		value: "21D10828",
		reward: Rewards.TRINITY_LIMIT,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.OLYMPUS,
		description: "Hydra",
		value: "21D10858",
		reward: Rewards.THUNDER,
	},
	{
		type: RewardLocationType.BONUS,
		location: LocationName.OLYMPUS,
		description: "Hades",
		value: "21D10888",
		reward: Rewards.MAGNET_BURST,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS,
		description: "Coliseum Map",
		value: "11CE070E",
		reward: Rewards.COLISEUM_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS,
		description: "Olympus Stone",
		value: "11CE071A",
		reward: Rewards.OLYMPUS_STONE,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS,
		description: "Secret Ansem's Report 5 (OC Demyx)",
		value: "11CE09D2",
		reward: Rewards.REPORT_FIVE,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS,
		description: "Hero's Crest",
		value: "11CE0726",
		reward: Rewards.HEROS_CREST,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS,
		description: "Auron's Statue",
		value: "11CE0882",
		reward: Rewards.AURONS_STATUE,
		secondVisit: true,
	},
	{
		type: RewardLocationType.POPUP,
		location: LocationName.OLYMPUS,
		description: "Guardian Soul",
		value: "11CE088E",
		reward: Rewards.GUARDIAN_SOUL,
		secondVisit: true,
	},
];

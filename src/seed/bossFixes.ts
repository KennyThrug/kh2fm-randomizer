import { Enemy } from "../types/Enemy";
import { createLine } from "../helpers/createLine";
export const bossFixes = (
    codes : String[],
    oldenemy: any,
    newenemy: any,
) : String => {
    //If Object Has a secondary Component
    if(newenemy.enemy.secondaryObject !== undefined){
        //If there is no secondary component location, use a party member
        if(oldenemy.secondaryObjectLocation === undefined){
            partyMemberReplacements(codes,oldenemy,newenemy.enemy);
            return `\n//${newenemy.enemy.secondaryObject?.name} (was First Party Member Slot)`

        }
        else{
            placeSecondaryBossObject(codes,oldenemy,newenemy.enemy);
            return `\n//${newenemy.enemy.secondaryObject?.name} (was ${oldenemy.secondaryObjectLocation?.name})`
        }
    }
    return "";
}


export const placeSecondaryBossObject = (
    codes : String[],
    location : any,
    boss : Enemy
) : void => {
    const modifierAddress = (parseInt(location.secondaryObjectLocation?.value + "", 16) + 32).toString(16);
    const modifier =
        boss.secondaryObject?.value.length === 6 ? boss.secondaryObject?.value.substring(0, 2) : "";
        
    codes.push(createLine(location.secondaryObjectLocation?.value + "",boss.secondaryObject?.value + "",false));
    codes.push(createLine(modifierAddress,modifier,false));

    //Extra patch to make Hercules actually use Aura Sphere
    if(boss.name === "Hades (2nd Visit & Hades Paradox Cup Battle)"){
        codes.push(createLine((parseInt(location.secondaryObjectLocation?.value +"",16)+28).toString(16),"00100000",false));
    }
}


export const partyMemberReplacements = (
    codes : String[],
    location : any,
    boss : Enemy
) : void => {
    //If Enemy value has an offset (if its 6 digits) then the party member cannot handle it and the boss and party member have to switch
    var replaceValue = ((boss.secondaryObject?.value + "").length < 6) ? boss.secondaryObject?.value : boss.value;

    var checkVal = (parseInt("D032f064",16) + (parseInt(location.world,16) * 4)).toString(16);
    switch(location.world){
        case "0E" : { //Haloween Town
            //Donald
            codes.push(createLine(`${checkVal}`,"00000100",false))
            codes.push(createLine("11c6cc22",`${replaceValue}`,false));
            //Goofy
            codes.push(createLine(`${checkVal}`,"00000200",false))
            codes.push(createLine("11c6cc24",`${replaceValue}`,false));
            //Jack
            codes.push(createLine(`${checkVal}`,"00000300",false))
            codes.push(createLine("11c6cc26",`${replaceValue}`,false));
            //Locked Jack
            codes.push(createLine(`${checkVal}`,"00008300",false))
            codes.push(createLine("11c6cc26",`${replaceValue}`,false));
            break;
        }
        case "0A" : { //Pride Lands
            //Donald
            codes.push(createLine(`${checkVal}`,"00000100",false))
            codes.push(createLine("11c6cc22",`${replaceValue}`,false));
            //Goofy
            codes.push(createLine(`${checkVal}`,"00000200",false))
            codes.push(createLine("11c6cc24",`${replaceValue}`,false));
            //Simba
            codes.push(createLine(`${checkVal}`,"00000300",false))
            codes.push(createLine("11c6cc26",`${replaceValue}`,false));
            codes.push(createLine(`${checkVal}`,"00008300",false))
            codes.push(createLine("11c6cc26",`${replaceValue}`,false));
            break;
        }
        case "11" : { //Space Paranoids
            //Donald
            codes.push(createLine(`${checkVal}`,"00000100",false))
            codes.push(createLine("11ce11eA",`${replaceValue}`,false));
            //Goofy
            codes.push(createLine(`${checkVal}`,"00000200",false))
            codes.push(createLine("11ce11eC",`${replaceValue}`,false));
            //Tron
            codes.push(createLine(`${checkVal}`,"00000300",false))
            codes.push(createLine("11ce11eE",`${replaceValue}`,false));
            codes.push(createLine(`${checkVal}`,"00008300",false))
            codes.push(createLine("11ce11eE",`${replaceValue}`,false));
            break;
        }
        case "0D" : { //Timeless River
            //Donald
            codes.push(createLine(`${checkVal}`,"00000100",false))
            codes.push(createLine("11ce121E",`${replaceValue}`,false));
            //Goofy
            codes.push(createLine(`${checkVal}`,"00000200",false))
            codes.push(createLine("11ce1220",`${replaceValue}`,false));
            break;
        }
        default : { //In a world where Sora wears normal clothes
            //Donald
            codes.push(createLine(`${checkVal}`,"00000100",false))
            codes.push(createLine("11CE0B6A",`${replaceValue}`,false));
            //Goofy
            codes.push(createLine(`${checkVal}`,"00000200",false))
            codes.push(createLine("11CE0B6C",`${replaceValue}`,false));
            //Guest
            codes.push(createLine(`${checkVal}`,"00000300",false))
            codes.push(createLine("11CE0B6E",`${replaceValue}`,false));
            //Locked Guest
            codes.push(createLine(`${checkVal}`,"00008300",false))
            codes.push(createLine("11CE0B6E",`${replaceValue}`,false));
            break;
        }
    }
    //Switch boss and party member if offset needed
    if(boss.value === replaceValue){
        boss.value = boss.secondaryObject?.value + "";
    }
}


export const aiFixes = (
    location : Enemy,
    boss : Enemy
) : string => {
    switch(boss.name){
        //The following function doesn't really work, will work on it at a later date -Thrug
        // case "Demyx (Hollow Bastion)":{
        //     return (
        //         createLine(location.aiLocations?.demyx + "","00000074") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+4).toString(16),"00000000") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+8).toString(16),"00000000") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+28).toString(16),"00000000") +
        //         createLine((parseInt(location.aiLocations?.demyx +"",16)+32).toString(16),"00000000") +
        //         + "");
        // }
        case "Twilight Thorn": {
            return "";
        }
        default: {
            return "";
        }
    }
}
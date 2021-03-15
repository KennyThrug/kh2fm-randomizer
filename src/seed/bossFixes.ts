import { Enemy } from "../types/Enemy";
import { createLine } from "../helpers/createLine";

/**
 * Function to be called by other classes. Makes codes that will make Bosses work, that don't just work 'straight out of the box'
 * If the boss requires a second thing, It will add that, using either another object in the arena, or replace a party member
 * If there is a specific fix that is only one type of enemy, then it will do that.
 * @param codes codes array, used to push new codes onto
 * @param oldenemy the enemy that used to be in the arena, from the EnemyLocation class
 * @param newenemy the enemy that will be put into the arena, from the EnemyLocation class
 * @returns 
 */
export const bossFixes = (
    codes : string[],
    oldenemy: any,
    newenemy: any,
) : String => {
    aiFixes(codes,oldenemy,newenemy);
    //If Object Has a secondary Component
    if(newenemy.enemy.secondaryObject !== undefined){
        //If there is no secondary component location, use a party member
        if(oldenemy.secondaryObjectLocation.value === "Solo" || oldenemy.secondaryObjectLocation.value === "PM1" || oldenemy.secondaryObjectLocation.value === "PM2"){
            partyMemberReplacements(codes,oldenemy,newenemy.enemy);
        }
        else{
            placeSecondaryBossObject(codes,oldenemy,newenemy.enemy);
        }
        return `\n//${newenemy.enemy.secondaryObject?.name} (was ${oldenemy.secondaryObjectLocation?.name})`
    }

    return "";
}

/**
 * In the situation that there is an object in the arena that can be replaced, This function will replace it.
 * Less of a clusterfuck than partyMemberReplacements, but essentially does the same thing
 * @param codes codes function, to push new codes to
 * @param location the EnemyLocation that houses the arena that we are replacing and the SecondaryObjectLocation
 * @param boss The Boss that is getting put into the arena, and the enemyLocation
 */
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

/**
 * This Function is kinda a mess of switch statements, however, its purpose is fairly simple. It makes codes to:
 * 1.) If the player is solo, then add a party member to be replaced
 * 2.) Check for which party member is first/second in the order (depending on @param location). 
 * 3.) Replace whatever party member is in that slot
 * Note: if the SecondaryObject is a 6 digit value (ie. Hercules) then it will switch the boss and the party member, so the boss will be a party member.
 * @param codes 
 * @param location The enemyLocation.enemies variable for the arena getting randomized into. \n
 *                 used from this is the secondaryObjectLocation variable. Which can be either :
 *                 "Solo" : Which means that the Arena is an arena where you are Solo. This can be solved by adding party members to the arena
 *                 "PM1"  : Refers to Party member 1, the first slot of party Members. The first party member will be replaced
 *                 "PM2"  : Refers to Party member 2, the second slot of party members. The second pary member will be replaced
 * @param boss The Boss that is being put into the arena. Should have a SecondaryObject
 */
export const partyMemberReplacements = (
    codes : String[],
    location : any,
    boss : Enemy
) : void => {
    //If Enemy value has an offset (if its 6 digits) then the party member cannot handle it and the boss and party member have to switch
    var replaceValue = ((boss.secondaryObject?.value + "").length < 6) ? boss.secondaryObject?.value : boss.value;
    var checkVal = "";
    var soraVal = ""

    if(location.secondaryObjectLocation === "Solo"){
        location.secondaryObjectLocation = "PM1";
    }
    switch(location.world){
        case "0E" : { //Haloween Town
            soraVal = "11c6cc20"; break;                
        }
        case "0A" : { //Pride Lands
            soraVal = "11c6cc20"; break
        }
        case "11" : { //Space Paranoids
            soraVal = "11ce11e8"; break;
        }
        case "0D" : { //Timeless River
            soraVal = "11ce121C"; break;
        }
        default : { //In a world where Sora wears normal clothes
            soraVal = "11CE0B68"; break;
        }
    }
    if(location.secondaryObjectLocation === "PM1"){
        checkVal = (parseInt("D032f064",16) + (parseInt(location.world,16) * 4)).toString(16);
        //Donald
        codes.push(createLine(`${checkVal}`,"00000100",false))
        codes.push(createLine((parseInt(soraVal,16)+2).toString(16),`${replaceValue}`,false));
        //Goofy
        codes.push(createLine(`${checkVal}`,"00000200",false))
        codes.push(createLine((parseInt(soraVal,16)+4).toString(16),`${replaceValue}`,false));
        //Guest
        codes.push(createLine(`${checkVal}`,"00000300",false))
        codes.push(createLine((parseInt(soraVal,16)+6).toString(16),`${replaceValue}`,false));
        //Locked Guest
        codes.push(createLine(`${checkVal}`,"00008300",false))
        codes.push(createLine((parseInt(soraVal,16)+6).toString(16),`${replaceValue}`,false));
    }
    else if(location.secondaryObjectLocation === "PM2"){
        checkVal = (parseInt("D032f063",16) + (parseInt(location.world,16) * 4)).toString(16);
        //Donald
        codes.push(createLine(`${checkVal}`,"00000102",false))
        codes.push(createLine((parseInt(soraVal,16)+2).toString(16),`${replaceValue}`,false));
        codes.push(createLine(`${checkVal}`,"00000103",false))
        codes.push(createLine((parseInt(soraVal,16)+2).toString(16),`${replaceValue}`,false));
        //Goofy
        codes.push(createLine(`${checkVal}`,"00000201",false))
        codes.push(createLine((parseInt(soraVal,16)+4).toString(16),`${replaceValue}`,false));
        codes.push(createLine(`${checkVal}`,"00000203",false))
        codes.push(createLine((parseInt(soraVal,16)+4).toString(16),`${replaceValue}`,false));
        //Guest
        codes.push(createLine(`${checkVal}`,"00000301",false))
        codes.push(createLine((parseInt(soraVal,16)+6).toString(16),`${replaceValue}`,false));
        codes.push(createLine(`${checkVal}`,"00000302",false))
        codes.push(createLine((parseInt(soraVal,16)+6).toString(16),`${replaceValue}`,false));
    }
    //Switch boss and party member if offset needed
    if(boss.value === replaceValue){
        boss.value = boss.secondaryObject?.value + "";
    }
}

/**
 * Just a large switch statement, that will add patches to make bosses work better
 * Twilight Town : Replaces current character with Roxas, so the Reaction Command works.
 * @param codes Code Array to push to
 * @param location EnemyLocation of arena boss is getting replacecd into
 * @param boss Enemy that is getting replaced into the location
 */
export const aiFixes = (
    codes : string[],
    location : any,
    boss : any
) : void => {
    switch(boss.enemy.name){
        case "Twilight Thorn": {
            switch(location.world) {
                case "0E" :{
                    codes.push(createLine("11c6cc20","0000005A",false));
                    break;
                }
                case "0A" :{
                    codes.push(createLine("11c6cc20","0000005A",false));
                    break;
                }
                case "11" :{
                    codes.push(createLine("11ce11e8","0000005A",false));
                    break;
                }
                case "0D" :{
                    codes.push(createLine("11ce121C","0000005A",false));
                    break;
                }
                default :{
                    codes.push(createLine("11CE0B68","0000005A",false));
                    break;
                }
            }
            codes.push(
                "//Remove Dodge Roll LV2 1\npatch=1,EE,E0010102,extended,0032EE96",
                "patch=1,EE,1036E5B8,extended,00000235",
                "//Remove Dodge Roll LV2 2\npatch=1,EE,E0030103,extended,0032EE96",
                "patch=1,EE,1036E5B8,extended,00000000",
                "patch=1,EE,1032EE9C,extended,00008235",
                "patch=1,EE,1032EEC2,extended,00000000",
                "//Remove Dodge Roll LV3 1\npatch=1,EE,E0010104,extended,0032EE96",
                "patch=1,EE,1036E5BA,extended,00000236",
                "//Remove Dodge Roll LV3 2\npatch=1,EE,E0030105,extended,0032EE96",
                "patch=1,EE,1036E5BA,extended,00000000",
                "patch=1,EE,1032EE9C,extended,00008236",
                "patch=1,EE,1032EEC2,extended,00000000",
                "//Remove Dodge Roll MAX 1\npatch=1,EE,E0010106,extended,0032EE96",
                "patch=1,EE,1036E5BC,extended,00000237",
                "//Remove Dodge Roll MAX 2\npatch=1,EE,E0020107,extended,0032EE96",
                "patch=1,EE,1032EE9C,extended,00008237",
                "patch=1,EE,1032EEC2,extended,00000000"
            );
            break;
        }
    }
}
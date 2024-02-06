import Asthakootami from '@Pages/MatchCalculator/temp-data/ashtakootami.json';

export const KundaliniCalculator = ( browseMatrimonyFilter )=>{
    const brideName = browseMatrimonyFilter?.brideName?.value;
    const brideRaasi = browseMatrimonyFilter?.brideRaasi?.value;
    const brideNakshatram = browseMatrimonyFilter?.brideNakshatram?.value;
    const brideGroomName = browseMatrimonyFilter?.brideGroomName?.value;
    const brideGroomRaasi = browseMatrimonyFilter?.brideGroomRaasi?.value;
    const brideGroomNakshatram = browseMatrimonyFilter?.brideGroomNakshatram?.value;

    /* Varna Kutami */
    const brideVarna = Asthakootami?.raasi?.[brideRaasi]?.varanam?.varna;
    const brideVarnaElement = Asthakootami?.raasi?.[brideRaasi]?.varanam?.element;
    const brideGroomVarna = Asthakootami?.raasi?.[brideGroomRaasi]?.varanam?.varna;
    const brideGroomVarnaElement = Asthakootami?.raasi?.[brideGroomRaasi]?.varanam?.element;

    const brideVarnaPoint = Asthakootami?.varnas?.[brideVarna];
    const brideGroomVarnaPoint = Asthakootami?.varnas?.[brideGroomVarna];
    const varnaPointObtained = (brideGroomVarnaPoint>=brideVarnaPoint)?1:0;

    /* Vashya Kutami */
    const brideVashya = Asthakootami?.nakshatra?.[brideNakshatram]?.vashyaKootami;
    const brideGroomVashya = Asthakootami?.nakshatra?.[brideGroomNakshatram]?.vashyaKootami;

    const vashyaPointObtained = Asthakootami?.vashya?.mythri?.[brideVashya]?.[brideGroomVashya];
    const vashyaResult = Asthakootami?.vashya?.phalam?.[vashyaPointObtained];

    /* Tarabhalam Kutami */
    const nakshatraList = Asthakootami?.nakshatra?.list;
    const brideTaraIndex = nakshatraList?.indexOf( brideNakshatram?.split(" ")?.[0] );
    const brideGroomTaraIndex = nakshatraList?.indexOf( brideGroomNakshatram?.split(" ")?.[0] );
    let taraPointObtained = 0;
    let taraCalculation1 = false;
    let taraCalculation2 = false;
    if( brideGroomTaraIndex < brideTaraIndex ){
        if( ((((brideTaraIndex-brideGroomTaraIndex)+1) % 9) %2)===0 ) { taraCalculation1=true; }
        if( ((((brideTaraIndex-1)+(27-brideGroomTaraIndex)) % 9) %2)===0 ) { taraCalculation2=true; }
    } else {
        if( ((((brideGroomTaraIndex-brideTaraIndex)+1) % 9) %2)===0 ) { taraCalculation1=true; }
        if( ((((brideGroomTaraIndex-1)+(27-brideTaraIndex)) % 9) %2)===0 ) { taraCalculation2=true; }
    }
    if(taraCalculation1  && taraCalculation2){ taraPointObtained = 3; }
    else if((!taraCalculation1  && taraCalculation2) || 
            (taraCalculation1  && !taraCalculation2)){ taraPointObtained = 1.5; }

    /* Yoni Kutami */
    const brideAnimal = Asthakootami?.nakshatra?.[brideNakshatram]?.animal;
    const brideGroomAnimal = Asthakootami?.nakshatra?.[brideGroomNakshatram]?.animal;
    const yoniPointObtained = Asthakootami?.yoni?.mythri?.[brideAnimal]?.[brideGroomAnimal];
    const yoniResult = Asthakootami?.yoni?.phalam?.[yoniPointObtained];

    /* Graha Kutami */
    const brideGraha = Asthakootami?.raasi?.[brideRaasi]?.raasiGraha;
    const brideGroomGraha = Asthakootami?.raasi?.[brideGroomRaasi]?.raasiGraha;
    const grahaPointObtained = Asthakootami?.grahas?.mythri?.[brideGraha]?.[brideGroomGraha];
    const grahaResult = Asthakootami?.grahas?.phalam?.[grahaPointObtained];

    /* Gana Kutami */
    const brideGanam = Asthakootami?.nakshatra?.[brideNakshatram]?.ganam;
    const brideGroomGanam = Asthakootami?.nakshatra?.[brideGroomNakshatram]?.ganam;
    const ganaPointObtained = Asthakootami?.gana?.mythri?.[brideGanam]?.[brideGroomGanam];
    const ganaResult = Asthakootami?.gana?.phalam?.[ganaPointObtained];

    /* Bhakoot Kutami */
    const bhakootPointObtained = Asthakootami?.bhakoot?.mythri?.[brideRaasi]?.[brideGroomRaasi];

    /* Nadi Kutami */
    const brideNadi = Asthakootami?.nakshatra?.[brideNakshatram]?.nadi;
    const brideGroomNadi =  Asthakootami?.nakshatra?.[brideGroomNakshatram]?.nadi;
    const nadiPointObtained = (brideNadi!==brideGroomNadi)?8:0;


    const matchScore = varnaPointObtained + vashyaPointObtained + taraPointObtained 
                + yoniPointObtained + grahaPointObtained + ganaPointObtained + bhakootPointObtained + nadiPointObtained;

    let kundalini = {};

        kundalini["bride"] = { 
                "Name": brideName,
                "Zodiac Sign (Raasi)": brideRaasi,
                "Star (Nakshatram)": brideNakshatram
        };

        kundalini["bridegroom"] = {
                "Name": brideGroomName,
                "Zodiac Sign (Raasi)": brideGroomRaasi,
                "Star (Nakshatram)": brideGroomNakshatram
        };
        
        kundalini["matchScore"] = {
                "obtained" : matchScore,
                "total": 36,
                "comment": "Good to Proceed"
        };

        kundalini["matchCompatibility"] = {
            "Varna Kutami": {
                "bride": { "Varna": brideVarna, "Varna Element": brideVarnaElement },
                "bridegroom": {  "Varna": brideGroomVarna, "Varna Element": brideGroomVarnaElement },
                "score": { "obtained": varnaPointObtained, "total": 1 },
                "result": { "Phalam": "" }
            },
            "Vashya Kutami": {
                "bride": { "Vashya Kutami": brideVashya },
                "bridegroom": { "Vashya Kutami": brideGroomVashya },
                "score": { "obtained": vashyaPointObtained, "total": 2 },
                "result": { "Phalam": vashyaResult }
            },
            "Tarabhalam Kutami": {
                "bride": { "Tara": brideNakshatram },
                "bridegroom": { "Tara": brideGroomNakshatram },
                "score": { "obtained": taraPointObtained, "total": 3 },
                "result": { "Phalam": "" }
            },
            "Yoni Kutami":{
                "bride": { "Animal": brideAnimal },
                "bridegroom": { "Animal": brideGroomAnimal },
                "score": { "obtained": yoniPointObtained, "total": 4 },
                "result": {  "Behaviour": yoniResult }
            },
            "Graha Kutami":{
                "bride":{  "Graha": brideGraha },
                "bridegroom": {  "Graha": brideGroomGraha },
                "score":{  "obtained": grahaPointObtained, "total": 5  },
                "result": { "Phalam": grahaResult }
            },
            "Gana Kutami":{
                "bride": {  "Gana": brideGanam },
                "bridegroom": {  "Gana": brideGroomGanam },
                "score": { "obtained": ganaPointObtained, "total": 6 },
                "result":{ "Compatibility": ganaResult }
            },
            "Bhakoot Kutami":{
                "bride": { "Raasi": brideRaasi },
                "bridegroom": { "Raasi": brideGroomRaasi },
                "score": { "obtained": bhakootPointObtained, "total": 7 },
                "result":{ "Compatibility": "" }
            },
            "Adi Kutami":{
                "bride": { "Nadi": brideNadi },
                "bridegroom": { "Nadi": brideGroomNadi },
                "score": { "obtained": nadiPointObtained, "total": 8 },
                "result":{ "Compatibility": "" }
            }
        };

    return kundalini;
};
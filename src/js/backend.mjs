/* Lucas LEBARS */


import PocketBase from "pocketbase";
const pb = new PocketBase('http://127.0.0.1:8090'); 


export async function allMaisons() {
    const records = await pb.collection('maison').getFullList() ;
    return records ;
    }

    /* Etape 11. */
    export async function oneID(id) {
            const record = await pb.collection('maison').getOne(id);
            return record;
    }

 /* Etape 12. */
    export async function allMaisonsFavori() {
        const record = await pb.collection('maison').getFullList({ filter : 'favori=true' }) ;
        return record;
}

 /* Etape 13. */
export async function allMaisonsSorted() {
    const record = await pb.collection('maison').getFullList({ sort : 'prix' }) ;
    return record;
}

 /* Etape 14. */
export async function bySurface(s) {
    const record = await pb.collection('maison').getFullList({ filter : `surface > ${s}`}) ;
    return record;
}

 /* Etape 15. */
export async function surfaceORprice(p,s) {
    const record = await pb.collection('maison').getFullList({ filter : `surface => ${s} || prix <= ${p} `}) ;
    return record;
}

 /* Etape 19. */
export async function getAgentByID(id) {
    const record = await pb.collection('agent').getOne(id) ;
    return record;
}
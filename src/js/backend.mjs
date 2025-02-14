

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


export async function getOffre(id) {
    try {
        let data = await pb.collection('maison').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.images);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function getOffres(id) {
    try {
        let data = await pb.collection('maison').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.images);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function bySurface(surface) {
    try {
        const records = await pb.collection('maison').getFullList({
            filter: `surface > ${surface}`
        });
        return records.map(record => {
            record.imageUrl = pb.files.getURL(record, record.images);
            return record;
        });
    } catch (error) {
        console.error('Une erreur est survenue en récupérant les maisons:', error);
        return [];
    }
}

export async function byPrice(prix) {
    try {
        const records = await pb.collection('maison').getFullList({
            filter: `prix < ${prix}`
        });
        return records.map(record => {
            record.imageUrl = pb.files.getURL(record, record.images);
            return record;
        });
    } catch (error) {
        console.error('Une erreur est survenue en récupérant les maisons:', error);
        return [];
    }
}

export async function byPriceRange(minPrix, maxPrix) {
    try {
        const records = await pb.collection('maison').getFullList({
            filter: `prix >= ${minPrix} && prix <= ${maxPrix}`
        });
        return records.map(record => {
            record.imageUrl = pb.files.getURL(record, record.images);
            return record;
        });
    } catch (error) {
        console.error('Une erreur est survenue en récupérant les maisons:', error);
        return [];
    }
}

export async function addOffre(house) {
    try {
        await pb.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutee avec succes'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}


export async function filterByPrix(prix) {
    try {
        const records = await pb.collection('maison').getFullList({
            filter: `prix < ${prix}`
        });
        return records.map(record => {
            record.imageUrl = pb.files.getURL(record, record.images);
            return record;
        });
    } catch (error) {
        console.error('Une erreur est survenue en récupérant les maisons:', error);
        return [];
    }
}
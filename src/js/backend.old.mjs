import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");


export async function getData() {
  const today = new Date().toISOString(); // Récupérer la date du jour. Regardez la doc de la méthode toISOString pour plus d'informations: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
  let data = await pb.collection("maison").getFullList(
      {
          sort: "-date",
          order: "desc",

      }
  ); // Filtrer les événements passés en fonction de la date. Si la colonne date n'est pas dans votre collection, vous pouvez la remplacer par une autre colonne de type date.
  data = data.map((d) => {
      d.imageUrl = pb.files.getURL(d, d.images);
      return d;
  }); // Récupérer l'URL de l'image de chaque événement. Vous pouvez remplacer imgUrl par le nom de la colonne qui contient le nom de l'image.
    return data;
}

//question 1
try { const records = await pb.collection('Maison').getFullList() ;
    console.table(records) ;
    } catch (e) {
    console.error(e) ;
    }

    //question 2
try { const Onerecords = await pb.collection('Maison').getOne('zd8w7e0gzgk2p80') ;
    console.table(Onerecords) ;
    } catch (e) {
    console.error(e) ;
    }

    //question 3
    try { const Croisrecords = await pb.collection('Maison').getFullList({ sort : 'created', }) ;
        console.table(Croisrecords) ;
        } catch (e) {
        console.error(e) ;
        }

        //question 4
        try { const Croisrecords = await pb.collection('Maison').getFullList({ sort : '-created', }) ;
        console.table(Croisrecords) ;
        } catch (e) {
        console.error(e) ;
        }

        //question 5

        try { const favori = await pb.collection('Maison').getFullList({ filter : 'favori=true', }) ;
        console.table(favori) ;
    } catch (e) {
    console.error(e) ;
    }

    //question 6
    try { const surface = await pb.collection('Maison').getFullList({ filter : 'surface > 100', }) ;
        console.table(surface) ;
    } catch (e) {
    console.error(e) ;
    }

    //question 7

    try { const surfaceandsldb = await pb.collection('Maison').getFullList({ filter : 'surface > 100 && nbSdb >= 2', }) ;
        console.table(surfaceandsldb) ;
    } catch (e) {
    console.error(e) ;
    }


        //question 8
    try { const surfaceandch = await pb.collection('Maison').getFullList({ filter : 'surface > 100 && nbChambres >= 3', }) ;
    console.table(surfaceandch) ;
} catch (e) {
console.error(e) ;
}

//question 9

try { const surfaceandprice = await pb.collection('Maison').getFullList({ filter : 'surface > 100' , sort : 'prix' }) ;
console.table(surfaceandprice) ;
} catch (e) {
console.error(e) ;
}

//question 10
    try { const pricerecords = await pb.collection('Maison').getFullList({ sort : 'nomMaison', }) ;
        console.table(pricerecords) ;
        } catch (e) {
        console.error(e) ;
        }

        //question 11
        try { const nomDonné = "CartonHouse" 
            const searchrecords = await pb.collection('Maison').getFullList({ sort : 'nomMaison',filter: nomMaison = 'CartonHouse' }) ;
        console.table(searchrecords) ;
        } catch (e) {
        console.error(e) ;
        }

        //question 12
        try { const nomDonné = "CartonHouse" 
            const diffsearchrecords = await pb.collection('Maison').getFullList({filter: nomMaison != 'CartonHouse', sort : 'nomMaison'  }) ;
        console.table(diffsearchrecords) ;
        } catch (e) {
        console.error(e) ;
        }
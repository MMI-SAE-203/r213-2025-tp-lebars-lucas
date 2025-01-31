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
      d.img = pb.files.getURL(d, d.images);
      return d;
  }); // Récupérer l'URL de l'image de chaque événement. Vous pouvez remplacer imgUrl par le nom de la colonne qui contient le nom de l'image.
    return data;
}
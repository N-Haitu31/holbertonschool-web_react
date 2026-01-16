import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Créer un objet row
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insérer la ligne et récupérer l'ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Créer une ligne mise à jour avec l'âge
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Mettre à jour la ligne
CRUD.updateRow(newRowID, updatedRow);

// Supprimer la ligne
CRUD.deleteRow(newRowID);

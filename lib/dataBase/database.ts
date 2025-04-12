import * as SQLite from 'expo-sqlite';

interface Tarefa {
  id: number;
  titulo: string;
}

const db = SQLite.openDatabaseSync('tarefas.db');

export const initDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT
    );
  `);
};

export const getTarefa = () => {
  return db.getAllSync('SELECT * FROM tarefas;'); 
};

export const addTarefa = (titulo: string) => {
  const result = db.runSync('INSERT INTO tarefas (titulo) VALUES (?);', [titulo]);
  return result.lastInsertRowId; 
};

export const deletarTarefa = (id: number) => {
  db.runSync('DELETE FROM tarefas WHERE id = ?;', [id]);
};

export const updateTarefa = (id: number, novoTitulo: string): void => {
  db.runSync('UPDATE tarefas SET titulo = ? WHERE id = ?;', [novoTitulo, id]);
} 
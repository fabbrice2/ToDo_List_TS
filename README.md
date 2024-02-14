# To Do List

To Do List est une application de gestion de tâches qui utilise les opérations CRUD (Create, Read, Update, Delete) pour permettre aux utilisateurs d'ajouter, afficher, mettre à jour et supprimer des tâches de manière efficace. 

## Installation

1. **Clonez le projet depuis le dépôt GitHub :**

    ```bash
    $ git clone https://github.com/Aboubakar2004/ToDo_List_TS.git
    $ cd ToDo_List_TS
    ```

2. **Installation du Backend:**

    ```bash
    $ cd todolistbackend
    $ npm install
    $ npm install mysql
    $ npm install express
    $ npm install cors
    $ npm install body-parser
    ```

3. **Installation du Frontend:**

    ```bash
    $ cd todolistfrontend
    $ npm install react-icons --save
    $ npm install react-router-dom
    $ npm install
    ```

4. **Configuration de la base de données:**

    - Créez une base de données nommée "signup".
    - Importez le fichier todolistbackend/login.sql.

5. **Configuration du mot de passe pour les utilisateurs Mac:**

    Dans le fichier `todolistbackend/server.ts`, assurez-vous que le mot de passe est configuré comme suit si vous utilisez MAMP :

    ```typescript
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",  // Mettez votre mot de passe si vous en avez
      database: "signup",
    });
    ```

## Utilisation

1. **Lancez le Backend :**

    ```bash
    $ cd todolistbackend
    $ npm start
    ```

2. **Lancez le Frontend :**

    ```bash
    $ cd todolistfrontend
    $ npm start
    ```

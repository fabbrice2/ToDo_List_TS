import React from 'react'

const TaskForm: React.FC = () => {
  return (
    <div>
        <div>
            <h1>Ajouter une nouvelle tâche:</h1>
            <div>
                <div>
                    <div>
                        <label>Titre</label>
                        <input type="text" placeholder="Titre de la tâche que vous allez effectuer"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" placeholder="Titre de la tâche que vous allez effectuer"/>
                    </div>
                    <div>
                        <label>Étape 1</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Étape 2</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Étape 3</label>
                        <input type="text"/>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Étape 4</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Étape 5</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Étape 6</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Étape 7</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <button>Ajouter</button>
                        <button>Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskForm

Contexte du projet

Objectifs :

    Mise en place d'un store pour gérer l'authentification (contextAPI)
    Mise en place de routes privée et publiques (react-router-dom)
    Utilisations des Hooks
    Implémentation de components MaterialUI
    CSS-in-JS

​

Fonctionnalitées attendues :

    Lister les apprenants/formateurs/promos/salles
    Ajouter un(e) apprenants/formateurs/promos/salles
    Ajouter une promo a un formateur
    Lister les apprenants/formateurs liée a une promo
    Ajouter une reservation de salle pour une promo
    Lister les reservations a venir pour une promo
    Lister les salles disponible en fonction d'une date précise

​

Routes API :

++Chaque routes de l'api nécessite l'envoie d'un token sous la clé 'token' soit dans les headers soit dans le body, vous pouvez obtenir ce token via la première routes lister ci-dessous (voir readme github de l'api pour plus de détails sur comment setup et run en local)++

    POST /api/admin/auth | body : {username, password} | response : {token}
    GET /api/apprenants - retourne la liste de tous les apprenants
    GET /api/apprenants/:id - retourne le détails d'un apprenants
    POST /api/apprenants - ajoute un apprenants
    DELETE /api/apprenants/:id - supprime un apprenants
    GET /api/formateurs - retourne la liste de tous les formateurs
    GET /api/formateurs/:id - retourne le détails d'un formateurs
    POST /api/formateurs - ajoute un formateurs (avec ou sans promo)
    POST /api/formateurs/:id/addPromo - ajoute une promo a un formateur
    GET /api/promos - retourne la liste de toutes les promos
    GET /api/promos/:id - retourne le détails d'une promo
    POST /api/promos - ajoute une promo
    GET /api/salles - retourne la liste de toutes les salles
    GET /api/salles/:id - retourne le details d'une salle
    POST /api/salles - ajoute une salle
    GET /api/reservations - retourne la liste de toutes les reservations
    GET /api/reservations - retourne le details d'une reservation
    GET /api/reservations/:promo_id - retourne la liste de toutes les reservations d'une promo
    GET /api/reservations/:salle_id - retourne la liste de toutes les reservations d'une salle
    POST /api/reservations - ajoute une reservation


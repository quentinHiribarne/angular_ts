# Wiki-Marvel

Repo cours Angular/TS M2 IW

API URL : https://gateway.marvel.com:443/v1/public
eg : https://gateway.marvel.com:443/v1/public/characters?apikey=YOUR_PUBLIC_KEY

## Liste des routes

### Personnages

- GET /characters - Liste les personnages
- GET /characters/{characterId} - Récupère un personnage par son id
- GET /characters/{characterId}/comics - Récupère les comics d'un personnage
- GET /characters/{characterId}/events - Récupère les events d'un personnage
- GET /characters/{characterId}/series - Récupère les series d'un personnage
- GET /characters/{characterId}/stories - Récupère les stories d'un personnage

### Comics

- GET /comics - Liste les comics
- GET /comics/{comicId} - Récupère un comic par son id
- GET /comics/{comicId}/characters - Récupère les personnages d'un comic
- GET /comics/{comicId}/creators - Récupère les créateurs d'un comic
- GET /comics/{comicId}/events - Récupère les events d'un comic
- GET /comics/{comicId}/stories - Récupère les stories d'un comic

### Creators

- GET /creators - Liste les créateurs
- GET /creators/{creatorId} - Récupère un créateur par son id
- GET /creators/{creatorId}/comics - Récupère les comics d'un créateur
- GET /creators/{creatorId}/events - Récupère les events d'un créateur
- GET /creators/{creatorId}/series - Récupère les series d'un créateur
- GET /creators/{creatorId}/stories - Récupère les stories d'un créateur

### Events

- GET /events - Liste les events
- GET /events/{eventId} - Récupère un event par son id
- GET /events/{eventId}/characters - Récupère les personnages d'un event
- GET /events/{eventId}/comics - Récupère les comics d'un event
- GET /events/{eventId}/creators - Récupère les créateurs d'un event
- GET /events/{eventId}/series - Récupère les series d'un event
- GET /events/{eventId}/stories - Récupère les stories d'un event

### Series

- GET /series - Liste les series
- GET /series/{seriesId} - Récupère une serie par son id
- GET /series/{seriesId}/characters - Récupère les personnages d'une serie
- GET /series/{seriesId}/comics - Récupère les comics d'une serie
- GET /series/{seriesId}/creators - Récupère les créateurs d'une serie
- GET /series/{seriesId}/events - Récupère les events d'une serie
- GET /series/{seriesId}/stories - Récupère les stories d'une serie

### Stories

- GET /stories - Liste les stories
- GET /stories/{storyId} - Récupère une story par son id
- GET /stories/{storyId}/characters - Récupère les personnages d'une serie
- GET /stories/{storyId}/comics - Récupère les comics d'une serie
- GET /stories/{storyId}/creators - Récupère les créateurs d'une serie
- GET /stories/{storyId}/events - Récupère les events d'une serie

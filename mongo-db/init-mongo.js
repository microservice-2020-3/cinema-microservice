db.createUser(
  {
    user: "cristian",
    pwd: "cristianPassword2017",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
  
db.grantRolesToUser( "cristian", [ "root" , { role: "root", db: "admin" } ] )

dbMovies = db.getSiblingDB("movies")

dbMovies.movies.insertMany([{
  id: '1',
  title: 'Assasins Creed',
  runtime: 115,
  format: 'IMAX',
  plot: 'Lorem ipsum dolor sit amet',
  releaseYear: 2017,
  releaseMonth: 1,
  releaseDay: 6
}, {
  id: '2',
  title: 'Aliados',
  runtime: 124,
  format: 'IMAX',
  plot: 'Lorem ipsum dolor sit amet',
  releaseYear: 2017,
  releaseMonth: 1,
  releaseDay: 13
}, {
  id: '3',
  title: 'xXx: Reactivado',
  runtime: 107,
  format: 'IMAX',
  plot: 'Lorem ipsum dolor sit amet',
  releaseYear: 2017,
  releaseMonth: 1,
  releaseDay: 20
}, {
  id: '4',
  title: 'Resident Evil: Capitulo Final',
  runtime: 107,
  format: 'IMAX',
  plot: 'Lorem ipsum dolor sit amet',
  releaseYear: 2017,
  releaseMonth: 1,
  releaseDay: 27
}, {
  id: '5',
  title: 'Moana: Un Mar de Aventuras',
  runtime: 114,
  format: 'IMAX',
  plot: 'Lorem ipsum dolor sit amet',
  releaseYear: 2016,
  releaseMonth: 12,
  releaseDay: 2
},
{
  id: '6',
  title: 'Especial de natal Porta dos Fundos',
  runtime: 115,
  format: 'IMAX',
  plot: 'Lorem ipsum dolor sit amet',
  releaseYear: 2020,
  releaseMonth: 12,
  releaseDay: 25
}])

dbCinemas = db.getSiblingDB("cinemas")

dbCinemas.countries.insertMany([{
  "_id": "588ab9d92d029a6d15d0b5b7",
  "name": "Mexico",
  "states": ["588aba4d2d029a6d15d0b5ba", "588ab9d92d029a6d15d0b5b7"]
}, {
  "_id": "588ab9d92d029a6d15d0b5b8",
  "name": "Colombia",
  "states": ["588ab9d92d029a6d15d0b5b8", "588ab9d92d029a6d15d0b5b8"]
}, {
  "_id": "588ab9d92d029a6d15d0b5b9",
  "name": "Chile",
  "states": ["588ab9d92d029a6d15d0b5b9"]
}])

dbCinemas.states.insertMany([{
  "_id": "588aba4d2d029a6d15d0b5ba",
  "name": "Michoacán",
  "country_id": "588ab9d92d029a6d15d0b5b7",
  "cities": ["588ababf2d029a6d15d0b5bf"]
}, {
  "_id": "588aba4d2d029a6d15d0b5bb",
  "name": "Querétaro",
  "country_id": "588ab9d92d029a6d15d0b5b7",
  "cities": ["588ababf2d029a6d15d0b5c0"]
}, {
  "_id": "588aba4d2d029a6d15d0b5bc",
  "name": "Cundinamrca",
  "country_id": "588ab9d92d029a6d15d0b5b8",
  "cities": ["588ababf2d029a6d15d0b5c2"]
}, {
  "_id": "588aba4d2d029a6d15d0b5bd",
  "name": "Antioquia",
  "country_id": "588ab9d92d029a6d15d0b5b8",
  "cities": ["588ababf2d029a6d15d0b5c1"]
}, {
  "_id": "588aba4d2d029a6d15d0b5be",
  "name": "Region Metropolitana",
  "country_id": "588ab9d92d029a6d15d0b5b9",
  "cities": ["588ababf2d029a6d15d0b5c3"]
}])

dbCinemas.cities.insertMany([{
  "_id": "588ababf2d029a6d15d0b5bf",
  "name": "Morelia",
  "state_id": "588aba4d2d029a6d15d0b5ba",
  "cinemas": ["588ac3a02d029a6d15d0b5c4", "588ac3a02d029a6d15d0b5c5"]
}, {
  "_id": "588ababf2d029a6d15d0b5c0",
  "name": "Queretaro",
  "state_id": "588aba4d2d029a6d15d0b5bb",
  "cinemas": ["588ac7a12d029a6d15d0b5cb"]
}, {
  "_id": "588ababf2d029a6d15d0b5c1",
  "name": "Medellin",
  "state_id": "588aba4d2d029a6d15d0b5bd",
  "cinemas": ["588ac7332d029a6d15d0b5ca"]
}, {
  "_id": "588ababf2d029a6d15d0b5c2",
  "name": "Bogota",
  "state_id": "588aba4d2d029a6d15d0b5bc",
  "cinemas": ["588ac65f2d029a6d15d0b5c8", "588ac65f2d029a6d15d0b5c9"]
}, {
  "_id": "588ababf2d029a6d15d0b5c3",
  "name": "Santiago de Chile",
  "state_id": "588aba4d2d029a6d15d0b5be",
  "cinemas": ["588ac53c2d029a6d15d0b5c6", "588ac53c2d029a6d15d0b5c7"]
}])

dbCinemas.cinemas.insertMany([{
  "_id": "588ac3a02d029a6d15d0b5c4",
  "name": "Plaza Morelia",
  "cinemaPremieres": [{
    "id": "1",
    "title": "Assasins Creed",
    "runtime": 115,
    "plot": "Lorem ipsum dolor sit amet",
    "poster": "link to poster..."
  }, {
    "id": "2",
    "title": "Aliados",
    "runtime": 124,
    "plot": "Lorem ipsum dolor sit amet",
    "poster": "link to poster..."
  }, {
    "id": "3",
    "title": "xXx: Reactivado",
    "runtime": 107,
    "plot": "Lorem ipsum dolor sit amet",
    "poster": "link to poster..."
  }],
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 120.0,
      "format": "IMAX",
      "schedules": [{
          "time": "10:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "movie_id": "1",
          "price": 54.0
      }, {
          "time": "4:35",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "1",
          "price": 71.0
      }, {
          "time": "6:55",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "3",
          "price": 79.0
      }]
  }, {
      "name": 2.0,
      "capacity": 100.0,
      "format": "Normal",
      "schedules": [{
          "time": "10:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "movie_id": "2",
          "price": 71.0
      }]
  }, {
      "name": 3.0,
      "capacity": 80.0,
      "format": "4DX",
      "schedules": [{
          "time": "10:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "movie_id": "3",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5bf"
}, {
  "_id": "588ac3a02d029a6d15d0b5c5",
  "name": "Las Americas",
  "cinemaPremieres": [{
    "id": "1",
    "title": "Assasins Creed",
    "runtime": 115,
    "plot": "Lorem ipsum dolor sit amet",
    "poster": "link to poster..."
  }, {
    "id": "3",
    "title": "xXx: Reactivado",
    "runtime": 107,
    "plot": "Lorem ipsum dolor sit amet",
    "poster": "link to poster..."
  }],
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 80.0,
      "format": "Normal",
      "schedules": [{
          "time": "10:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "seatsOccupied": [40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "1",
          "price": 71.0
      }, {
          "time": "12:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "movie_id": "3",
          "price": 71.0
      }]
    }, {
      "name": 2.0,
      "capacity": 80.0,
      "format": "3D",
      "schedules": [{
          "time": "10:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "seatsOccupied": [40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "1",
          "price": 71.0
      }, {
          "time": "3:25",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "movie_id": "3",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5bf"
}, {
  "_id": "588ac53c2d029a6d15d0b5c6",
  "name": "Estacion Central",
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 100.0,
      "schedules": [{
          "time": "12:10",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "movie_id": "1",
          "price": 54.0
      }, {
          "time": "5:35",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "2",
          "price": 71.0
      }, {
          "time": "9:55",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "3",
          "price": 79.0
      }]
  }, {
      "name": 2.0,
      "capacity": 80.0,
      "schedules": [{
          "time": "3:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "movie_id": "4",
          "price": 71.0
      }]
  }, {
      "name": 3.0,
      "capacity": 80.0,
      "schedules": [{
          "time": "5:25",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "movie_id": "5",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5c3"
}, {
  "_id": "588ac53c2d029a6d15d0b5c7",
  "name": "San Agustin",
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 60.0,
      "schedules": [{
          "time": "12:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "seatsOccupied": [40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "1",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5c3"
}, {
  "_id": "588ac65f2d029a6d15d0b5c8",
  "name": "Calima",
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 100.0,
      "schedules": [{
          "time": "11:10",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "3",
          "price": 54.0
      }, {
          "time": "5:35",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "movie_id": "1",
          "price": 71.0
      }, {
          "time": "7:55",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "3",
          "price": 79.0
      }]
  }, {
      "name": 2.0,
      "capacity": 80.0,
      "schedules": [{
          "time": "5:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "movie_id": "1",
          "price": 71.0
      }]
  }, {
      "name": 3.0,
      "capacity": 80.0,
      "schedules": [{
          "time": "12:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "seatsOccupied": [40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "4",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5c2"
}, {
  "_id": "588ac65f2d029a6d15d0b5c9",
  "name": "Hayuelos Colombia",
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 60.0,
      "schedules": [{
          "time": "5:25",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "movie_id": "5",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5c2"
}, {
  "_id": "588ac7332d029a6d15d0b5ca",
  "name": "City Plaza",
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 90.0,
      "schedules": [{
          "time": "11:40",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "1",
          "price": 90.0
      }, {
          "time": "3:35",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "movie_id": "1",
          "price": 120.0
      }, {
          "time": "6:55",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "3",
          "price": 79.0
      }]
  }, {
      "name": 2.0,
      "capacity": 80.0,
      "schedules": [{
          "time": "5:15",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0],
          "movie_id": "2",
          "price": 71.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5c1"
}, {
  "_id": "588ac7a12d029a6d15d0b5cb",
  "name": "Juriquilla Uptown",
  "cinemaRooms": [{
      "name": 1.0,
      "capacity": 90.0,
      "schedules": [{
          "time": "11:40",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "1",
          "price": 90.0
      }, {
          "time": "3:35",
          "seatsEmpty": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0],
          "movie_id": "1",
          "price": 120.0
      }, {
          "time": "6:55",
          "seatsEmpty": [11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 61.0, 62.0, 63.0, 64.0, 65.0, 66.0, 67.0, 68.0, 69.0, 70.0, 71.0, 72.0, 73.0, 74.0, 75.0, 76.0, 77.0, 78.0, 79.0, 80.0],
          "seatsOccupied": [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0, 51.0, 52.0, 53.0, 54.0, 55.0, 56.0, 57.0, 58.0, 59.0, 60.0],
          "movie_id": "3",
          "price": 79.0
      }]
  }],
  "city_id": "588ababf2d029a6d15d0b5c0"
}])
const USERS = [
    {
        "id": 1,
        "name": "Casie",
        "email": "cmacarthur0@email.org",
        "language": "French",
        "occupation": "Research and Development",
    },
    {
        "id": 2,
        "name": "Willette",
        "email": "wboyett1@email.com",
        "language": "Hindi",
        "occupation": "Training",
    },
    {
        "id": 3,
        "name": "Dulciana",
        "email": "dhugett2@email.com",
        "language": "Hiri Motu",
        "occupation": "Product Management",
    },
    {
        "id": 4,
        "name": "Dominique",
        "email": "dgarmanson3@email.com",
        "language": "Somali",
        "occupation": "Software Engineer",
    }
]

const DOGS = [
    {
        "id": 1,
        "name": "Bella",
        "breed": "Labrador Retriever",
        "ownerId": 1,
        "owner": {
            "id": 1,
            "name": "Casie",
            "email": "cmacarthur0@email.org",
            "language": "French",
            "occupation": "Research and Development",
        },
        "age": 4,
        "image": ""
    },
    {
        "id": 2,
        "name": "Charlie",
        "breed": "German Shepherd Dog",
        "ownerId": 2,
        "owner": {
            "id": 2,
            "name": "Willette",
            "email": "wboyett1@email.com",
            "language": "Hindi",
            "occupation": "Training",
        },
        "age": 2,
        "image": ""
    },
    {
        "id": 3,
        "name": "Luna",
        "breed": "Golden Retriever",
        "ownerId": 3,
        "owner": {
            "id": 3,
            "name": "Dulciana",
            "email": "dhugett2@email.com",
            "language": "Hiri Motu",
            "occupation": "Product Management",
        },
        "age": 1,
        "image": ""
    },
    {
        "id": 4,
        "name": "Lucy",
        "breed": "French Bulldog",
        "ownerId": 4,
        "owner": {
            "id": 4,
            "name": "Dominique",
            "email": "dgarmanson3@email.com",
            "language": "Somali",
            "occupation": "Software Engineer",
        },
        "age": 5,
        "image": ""
    }
]

module.exports = { USERS, DOGS }
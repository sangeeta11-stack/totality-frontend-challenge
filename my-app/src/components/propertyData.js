import Bedroom1 from '../Assets/bedromm1.jpg'
import Bedroom2 from '../Assets/badroom2.jpg'
import Bedroom3 from '../Assets/badroom3.jpg'
import Bedroom4 from '../Assets/badroom4.jpg'
import Bedroom5 from '../Assets/badroom5.jpg'
import Bedroom6 from '../Assets/badroom6.jpg'
import Kitchen1 from '../Assets/kitchen1.jpg'
import Kitchen2 from '../Assets/⁬kitchen2.jpg'
import Kitchen3 from '../Assets/kitchen3.jpg'
import Kitchen4 from '../Assets/kitchen4.jpg'
import Kitchen5 from '../Assets/kitchen5.jpg'
import Kitchen6 from '../Assets/kitchen6.jpg'
import Kitchen7 from '../Assets/kitchen7.jpg'
import Kitchen8 from '../Assets/kitchen8.jpg'
import Livingroom1 from '../Assets/livingroom1.jpg'
import Livingroom2 from '../Assets/livingroom2.jpg'
import Livingroom3 from '../Assets/livingroom3.jpg'
import Livingroom4 from '../Assets/livingroom4.jpg'
import Livingroom5 from '../Assets/livingroom5.jpg'
import Livingroom6 from '../Assets/livingroom6.jpg'
import Livingroom7 from '../Assets/livingroom7.jpg'
import Livingroom8 from '../Assets/livingroom8.jpg'

const properties = [
    {
        id: 1,
        title: "Luxury Apartment in Downtown",
        description: "A spacious luxury apartment with modern amenities and a beautiful city view.",
        price: 3500,
        address: "123 Luxury Lane, Downtown, City A, 12345",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1500,
        images: [Bedroom1],
        client: {
            name: "John Doe",
            contact: "johndoe@example.com",
            phone: "+1234567890"
        }
    },
    {
        id: 2,
        title: "Cozy Cottage Near the Beach",
        description: "A charming cottage just minutes away from the beach, perfect for a quiet getaway.",
        price: 2500,
        address: "456 Beachside Road, Beachside, City B, 23456",
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 1200,
        images: [Bedroom2],
        client: {
            name: "Jane Smith",
            contact: "janesmith@example.com",
            phone: "+0987654321"
        }
    },
    {
        id: 3,
        title: "Modern Loft in Suburbia",
        description: "A stylish loft located in a quiet suburban neighborhood.",
        price: 2800,
        address: "789 Suburbia Avenue, Suburbia, City C, 34567",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1400,
        images: [Kitchen1],
        client: {
            name: "Michael Johnson",
            contact: "michaelj@example.com",
            phone: "+1122334455"
        }
    },
    {
        id: 4,
        title: "Spacious Villa with Private Pool",
        description: "A luxurious villa featuring a private pool and large garden area.",
        price: 4500,
        address: "321 Poolside Drive, Uptown, City D, 45678",
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3000,
        images: [Kitchen3],
        client: {
            name: "Emma Williams",
            contact: "emmaw@example.com",
            phone: "+1223344556"
        }
    },
    {
        id: 5,
        title: "Penthouse with Panoramic Views",
        description: "An exclusive penthouse offering panoramic views of the entire city.",
        price: 7000,
        address: "654 Skyline Plaza, Central City, City E, 56789",
        bedrooms: 3,
        bathrooms: 3,
        squareFeet: 2000,
        images: [Bedroom5],
        client: {
            name: "Oliver Brown",
            contact: "oliverb@example.com",
            phone: "+1334455667"
        }
    },
    {
        id: 6,
        title: "Charming Bungalow with Garden",
        description: "A cozy bungalow with a beautiful garden and outdoor seating area.",
        price: 2200,
        address: "987 Garden Lane, Old Town, City F, 67890",
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 1000,
        images: [Livingroom5],
        client: {
            name: "Sophia Miller",
            contact: "sophiam@example.com",
            phone: "+1445566778"
        }
    },
    {
        id: 7,
        title: "Family Home in Quiet Neighborhood",
        description: "A spacious family home located in a quiet and safe neighborhood.",
        price: 3200,
        address: "321 Family Lane, Green Hills, City G, 78901",
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 2500,
        images: [Kitchen2],
        client: {
            name: "James Taylor",
            contact: "jamest@example.com",
            phone: "+1556677889"
        }
    },
    {
        id: 8,
        title: "Modern Condo with Gym Access",
        description: "A modern condo with access to a fully equipped gym and swimming pool.",
        price: 2700,
        address: "456 Gymview Drive, City Center, City H, 89012",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1300,
        images: [Bedroom6],
        client: {
            name: "Isabella Davis",
            contact: "isabellad@example.com",
            phone: "+1667788990"
        }
    },
    {
        id: 9,
        title: "Beach House with Ocean View",
        description: "A beautiful beach house offering a stunning view of the ocean.",
        price: 5000,
        address: "123 Oceanview Crescent, Seaside, City I, 90123",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1800,
        images: [Bedroom4],
        client: {
            name: "Liam Wilson",
            contact: "liamw@example.com",
            phone: "+1778899001"
        }
    },
    {
        id: 10,
        title: "Rustic Cabin in the Woods",
        description: "A cozy rustic cabin surrounded by nature, perfect for a peaceful retreat.",
        price: 2000,
        address: "789 Cabin Trail, Forest Hills, City J, 01234",
        bedrooms: 1,
        bathrooms: 1,
        squareFeet: 900,
        images: [Kitchen7],
        client: {
            name: "Ava Anderson",
            contact: "avaa@example.com",
            phone: "+1889900112"
        }
    },
    {
        id: 11,
        title: "Urban Studio in the Heart of the City",
        description: "A compact yet stylish studio located in the heart of the city.",
        price: 1800,
        address: "321 Studio Lane, City Center, City K, 12346",
        bedrooms: 1,
        bathrooms: 1,
        squareFeet: 600,
        images: [Bedroom3],
        client: {
            name: "Noah Martinez",
            contact: "noahm@example.com",
            phone: "+1990011223"
        }
    },
    {
        id: 12,
        title: "Contemporary Townhouse",
        description: "A contemporary townhouse with modern finishes and spacious living areas.",
        price: 3400,
        address: "654 Townhouse Avenue, Urban Suburb, City L, 23467",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFeet: 1600,
        images: [Kitchen6],
        client: {
            name: "Mia Robinson",
            contact: "miar@example.com",
            phone: "+1111222334"
        }
    },
    {
        id: 13,
        title: "Country Farmhouse",
        description: "A charming farmhouse located in the countryside, perfect for those looking for a quiet life.",
        price: 2900,
        address: "789 Farmhouse Road, Rural Area, City M, 34578",
        bedrooms: 4,
        bathrooms: 2,
        squareFeet: 2400,
        images: [Kitchen4],
        client: {
            name: "Ethan Moore",
            contact: "ethanm@example.com",
            phone: "+1222333445"
        }
    },
    {
        id: 14,
        title: "Historic Home with Character",
        description: "A historic home full of character and charm, located in a vibrant neighborhood.",
        price: 3100,
        address: "123 Historic Lane, Old City, City N, 45689",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 2000,
        images: [Livingroom4],
        client: {
            name: "Amelia Harris",
            contact: "ameliah@example.com",
            phone: "+1333444556"
        }
    },
    {
        id: 15,
        title: "Luxury Condo with City Views",
        description: "A luxury condo offering stunning views of the city skyline.",
        price: 3800,
        address: "654 Skyline Road, Skyline District, City O, 56701",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1400,
        images: [Livingroom1],
        client: {
            name: "Lucas White",
            contact: "lucasw@example.com",
            phone: "+1444555667"
        }
    },
    {
        id: 16,
        title: "Eco-Friendly Green Home",
        description: "An eco-friendly home designed with sustainability in mind.",
        price: 3300,
        address: "789 Greenway Drive, Eco Village, City P, 67801",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1700,
        images: [Kitchen5],
        client: {
            name: "Charlotte King",
            contact: "charlottek@example.com",
            phone: "+1555666778"
        }
    },
    {
        id: 17,
        title: "Beachfront Condo",
        description: "A beautiful beachfront condo with direct access to the beach.",
        price: 5500,
        address: "123 Beachfront Avenue, Oceanfront, City Q, 78923",
        bedrooms: 3,
        bathrooms: 2,
        squareFeet: 1900,
        images: [Livingroom6],
        client: {
            name: "William Lee",
            contact: "williaml@example.com",
            phone: "+1666777889"
        }
    },
    {
        id: 18,
        title: "Modern Home with Rooftop Terrace",
        description: "A stylish modern home featuring a rooftop terrace with a great view.",
        price: 3600,
        address: "456 Terrace Way, Metro Area, City R, 89034",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFeet: 1800,
        images: [Livingroom2],
        client: {
            name: "Elijah Clark",
            contact: "elijahc@example.com",
            phone: "+1777888990"
        }
    },
    {
        id: 19,
        title: "Classic Victorian House",
        description: "A classic Victorian house with ornate detailing and a large backyard.",
        price: 4000,
        address: "789 Victorian Lane, Historic District, City S, 90134",
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 2200,
        images: [Livingroom3],
        client: {
            name: "Harper Lewis",
            contact: "harperl@example.com",
            phone: "+1888999001"
        }
    },
    {
        id: 20,
        title: "Secluded Mountain Cabin",
        description: "A secluded cabin in the mountains, perfect for a peaceful retreat.",
        price: 2500,
        address: "123 Mountain Pass, Mountain Range, City T, 01245",
        bedrooms: 2,
        bathrooms: 1,
        squareFeet: 1100,
        images: [Kitchen6],
        client: {
            name: "Benjamin Walker",
            contact: "benjaminw@example.com",
            phone: "+1999001122"
        }
    }
];

export default properties;

import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express()
const PORT = process.env.PORT


app.get('/api/products', (req, res) => {

    const products = [
        {
            "id": 1,
            "first_name": "Coriss",
            "last_name": "Engel",
            "email": "cengel0@mediafire.com",
            "gender": "Female",
            "job_title": "Senior Cost Accountant"
        },
        {
            "id": 2,
            "first_name": "Krishna",
            "last_name": "Alwin",
            "email": "kalwin1@xrea.com",
            "gender": "Male",
            "job_title": "Structural Analysis Engineer"
        },
        {
            "id": 3,
            "first_name": "Percival",
            "last_name": "Townson",
            "email": "ptownson2@bbc.co.uk",
            "gender": "Male",
            "job_title": "Mechanical Systems Engineer"
        },
        {
            "id": 4,
            "first_name": "Lilias",
            "last_name": "Bernini",
            "email": "lbernini3@nbcnews.com",
            "gender": "Female",
            "job_title": "Operator"
        },
        {
            "id": 5,
            "first_name": "Romola",
            "last_name": "Teasdale",
            "email": "rteasdale4@microsoft.com",
            "gender": "Female",
            "job_title": "Quality Control Specialist"
        },
        {
            "id": 6,
            "first_name": "Brenden",
            "last_name": "Trotman",
            "email": "btrotman5@oaic.gov.au",
            "gender": "Polygender",
            "job_title": "Web Designer II"
        },
        {
            "id": 7,
            "first_name": "Glori",
            "last_name": "Freestone",
            "email": "gfreestone6@dailymotion.com",
            "gender": "Female",
            "job_title": "Financial Advisor"
        },
        {
            "id": 8,
            "first_name": "Catie",
            "last_name": "Crighton",
            "email": "ccrighton7@tumblr.com",
            "gender": "Female",
            "job_title": "Assistant Professor"
        },
        {
            "id": 9,
            "first_name": "Kermy",
            "last_name": "Beagles",
            "email": "kbeagles8@tinypic.com",
            "gender": "Male",
            "job_title": "Professor"
        },
        {
            "id": 10,
            "first_name": "Celine",
            "last_name": "Warbey",
            "email": "cwarbey9@mapquest.com",
            "gender": "Female",
            "job_title": "Payment Adjustment Coordinator"
        },
        {
            "id": 11,
            "first_name": "Rip",
            "last_name": "Wareham",
            "email": "rwarehama@who.int",
            "gender": "Male",
            "job_title": "VP Marketing"
        },
        {
            "id": 12,
            "first_name": "Arielle",
            "last_name": "Bonome",
            "email": "abonomeb@ebay.com",
            "gender": "Female",
            "job_title": "Business Systems Development Analyst"
        },
        {
            "id": 13,
            "first_name": "Ardelle",
            "last_name": "Cockayme",
            "email": "acockaymec@foxnews.com",
            "gender": "Female",
            "job_title": "Design Engineer"
        },
        {
            "id": 14,
            "first_name": "Abbie",
            "last_name": "Langford",
            "email": "alangfordd@behance.net",
            "gender": "Female",
            "job_title": "VP Accounting"
        },
        {
            "id": 15,
            "first_name": "Jeddy",
            "last_name": "Villaron",
            "email": "jvillarone@msu.edu",
            "gender": "Male",
            "job_title": "Chief Design Engineer"
        },
        {
            "id": 16,
            "first_name": "Magdalena",
            "last_name": "Giacomi",
            "email": "mgiacomif@google.pl",
            "gender": "Female",
            "job_title": "VP Accounting"
        },
        {
            "id": 17,
            "first_name": "Fraze",
            "last_name": "Frankowski",
            "email": "ffrankowskig@furl.net",
            "gender": "Male",
            "job_title": "Associate Professor"
        },
        {
            "id": 18,
            "first_name": "Mord",
            "last_name": "Fearnyough",
            "email": "mfearnyoughh@cloudflare.com",
            "gender": "Male",
            "job_title": "Senior Developer"
        },
        {
            "id": 19,
            "first_name": "Kenn",
            "last_name": "Willeson",
            "email": "kwillesoni@live.com",
            "gender": "Male",
            "job_title": "Office Assistant II"
        },
        {
            "id": 20,
            "first_name": "Freeland",
            "last_name": "Volante",
            "email": "fvolantej@reddit.com",
            "gender": "Male",
            "job_title": "Information Systems Manager"
        },
        {
            "id": 21,
            "first_name": "Madalena",
            "last_name": "Symcock",
            "email": "msymcockk@mozilla.com",
            "gender": "Female",
            "job_title": "Structural Engineer"
        },
        {
            "id": 22,
            "first_name": "Sully",
            "last_name": "Goor",
            "email": "sgoorl@weibo.com",
            "gender": "Male",
            "job_title": "Marketing Manager"
        },
        {
            "id": 23,
            "first_name": "Merrill",
            "last_name": "Ciottoi",
            "email": "mciottoim@addtoany.com",
            "gender": "Male",
            "job_title": "Structural Analysis Engineer"
        },
        {
            "id": 24,
            "first_name": "Clarabelle",
            "last_name": "Shepherd",
            "email": "cshepherdn@gnu.org",
            "gender": "Genderqueer",
            "job_title": "Legal Assistant"
        },
        {
            "id": 25,
            "first_name": "Velma",
            "last_name": "Janssens",
            "email": "vjanssenso@opensource.org",
            "gender": "Female",
            "job_title": "Information Systems Manager"
        },
        {
            "id": 26,
            "first_name": "Pandora",
            "last_name": "Phillip",
            "email": "pphillipp@is.gd",
            "gender": "Female",
            "job_title": "Human Resources Assistant III"
        },
        {
            "id": 27,
            "first_name": "Yolanthe",
            "last_name": "Simacek",
            "email": "ysimacekq@angelfire.com",
            "gender": "Female",
            "job_title": "Occupational Therapist"
        },
        {
            "id": 28,
            "first_name": "Gustav",
            "last_name": "Thuillier",
            "email": "gthuillierr@cbsnews.com",
            "gender": "Male",
            "job_title": "Account Representative II"
        },
        {
            "id": 29,
            "first_name": "Celesta",
            "last_name": "Hebbes",
            "email": "chebbess@zimbio.com",
            "gender": "Female",
            "job_title": "Legal Assistant"
        }
    ]

    //http://localhost:8000/api/products?search=metal

    if (req.query.search) {
        const filteredProducts = products.filter((product) => product.first_name.includes(req.query.search))
        res.send(filteredProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 2000)
})

app.listen(PORT, () => {
    console.log(`Server listening on port✅ ${PORT}`);

})
type Users = {
    id: number,
    name: string,
    email: string,
    role: string,
    apartment: number,
    status?: string
}

export const users: Users[] = [
    {
        id: 1,
        name: 'Rogerio',
        email: "rogerio123@email.com",
        role: "manager",
        apartment: 101,
        status: "compliant"
    },
    {
        id: 2,
        name: 'Maria',
        email: "maria123@email.com",
        role: "resident",
        apartment: 102,
        status: "compliant"
    },
    {
        id: 3,
        name: 'Barbara',
        email: "barbara123@email.com",
        role: "resident",
        apartment: 103,
        status: "delinquent"
    },
    {
        id: 4,
        name: 'Vinicius',
        email: "vinicius123@email.com",
        role: "resident",
        apartment: 104,
        status: "delinquent"
    },
    {
        id: 5,
        name: "Amanda",
        email: "amanda@email.com",
        role: "resident",
        apartment: 105,
        status: "compliant"
    },
    {
        id: 6,
        name: "Lucas",
        email: "lucas@email.com",
        role: "resident",
        apartment: 106,
        status: "compliant"
    },
    {
        id: 7,
        name: "Sophia",
        email: "sophia@email.com",
        role: "resident",
        apartment: 107,
        status: "pending"
    },
    {
        id: 8,
        name: "Gabriel",
        email: "gabriel@email.com",
        role: "resident",
        apartment: 108,
        status: "compliant"
    },
    {
        id: 9,
        name: "Isabella",
        email: "isabella@email.com",
        role: "resident",
        apartment: 109,
        status: "delinquent"
    },
    {
        id: 10,
        name: "Daniel",
        email: "daniel@email.com",
        role: "resident",
        apartment: 110,
        status: "compliant"
    },
    {
        id: 11,
        name: "Olivia",
        email: "olivia@email.com",
        role: "resident",
        apartment: 111,
        status: "pending"
    },
    {
        id: 12,
        name: "Ethan",
        email: "ethan@email.com",
        role: "resident",
        apartment: 112,
        status: "compliant"
    }

]
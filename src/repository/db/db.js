import { faker } from "@faker-js/faker"

export const tabelaProdutos = "tabelaProdutos"
const db = {
    tabelaProdutos: []
}

export class Db {
    tabela
    constructor(tabela) {
        this.tabela = tabela
    }

    static async create(dados, tabela) {
        const salvar = {
            id: faker.number.int({ min: 1, max: 100 }),
            ...dados,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
        db[tabela].push(salvar)
        return Promise.resolve(salvar)
    }

    static async findById(id, tabela) {
        const produto = db[tabela].find(produto => produto.id == id)
        return Promise.resolve(produto)
    }

    static async find(tabela) {
        return Promise.resolve(db[tabela])
    }

    static async update(id, dados, tabela) {
        const index = db[tabela].findIndex(produto => produto.id == id)
        db[tabela][index] = {
            ...dados,
            id: Number(id),
            createdAt: db[tabela][index].createdAt,
            updatedAt: faker.date.recent()
        }
        return Promise.resolve(db.tabelaProdutos[index])
    }

    static async delete(id, tabela) {
        const index = db[tabela].findIndex(produto => produto.id == id)
        const deletedProduct = db[tabela].splice(index, 1)
        return Promise.resolve(deletedProduct)
    }
}


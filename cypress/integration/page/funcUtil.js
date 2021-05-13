import forumPageJson from './forumPageJson'

export  default  class funcDemo{
    constructor(){

    }
    login(username,password) {
        if (username !== null)
            cy.get(forumPageJson.loginPage.inputUsername).type(username)

        if (password !== null)
            cy.get(forumPageJson.loginPage.inputPassword).type(password)
    }

}

